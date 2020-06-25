const Mailchimp = require('mailchimp-api-v3');
const config = require('./config.js');

const args = process.argv.slice(2);
if (args.length < 3) {
  console.log('At least three arguments are required. First: email to send test. Second: the key that will be passed ("id" or "name"). Third: the value, e.g. "This Week in Hathor 3" or "campaignId".');
  return;
}

const email = args[0];
const key = args[1];
const value = args[2];

const getCampaignByTitle = () => {
  const mailchimp = new Mailchimp(config.apiKey);
  return mailchimp.get('/campaigns', { count: 1000 }).then((response) => {
    return response.campaigns.find((campaign) => {
      return (
        campaign.recipients.list_id === config.listId &&
        campaign.settings.subject_line.toLowerCase() === value.toLowerCase() &&
        campaign.settings.title.toLowerCase() === value.toLowerCase()
      );
    });
  });
};

const sendTestEmail = ({ id }) => {
  const mailchimp = new Mailchimp(config.apiKey);
  return mailchimp.post(`/campaigns/${id}/actions/test`, {
    test_emails: [email],
    send_type: 'html',
  });
};

const execute = async () => {
  let campaignId = '';
  if (key === 'name') {
    // Value is the campaign title, e.g. 'This week in Hathor 3'
    // so we get the campaign id associated
    const campaign = await getCampaignByTitle();
    if (!campaign) {
      console.log('No campaign was found with title', value);
      return;
    }
    campaignId = campaign.id;
  } else {
    // Value is the campaign id
    campaignId = value
  }

  // Send test email
  try {
    const response = await sendTestEmail({
      id: campaignId
    });
    console.log('Email sent!\n', response);
  } catch(e) {
    console.log('Error sending test email', e);
  }
}

execute();

console.log('Starting method to send your test email...');