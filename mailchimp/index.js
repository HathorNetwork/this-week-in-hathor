const Mailchimp = require('mailchimp-api-v3');
const fs = require('fs').promises;
const config = require('./config.js');

const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('At least two arguments are required. First: week number. Second: html path.');
  return;
}

const weekNumber = args[0];
const htmlPath = args[1];
const cssPath = args.length > 2 ? args[2] : 'main.css';

const prepareHtml = async () => {
  // The middle of the html is customized every week
  // so it's safe to change the head and footer lines
  const css = await fs.readFile(cssPath, 'utf-8');
  const html = await fs.readFile(htmlPath, 'utf-8');
  const htmlLines = html.split(/\r?\n/);

  // Css must be inline in the email
  htmlLines[19] = `<style>${css}</style>`;
  
  // Remove header
  htmlLines.splice(21, 14);
  htmlLines[20] = '<body>';

  // Remove footer
  let total = htmlLines.length;
  htmlLines.splice(total - 46, 42);
  total = htmlLines.length;
  htmlLines[total - 5] = '</main>';
  return htmlLines.join('\n');
}

const createCampaign = ({
  subject,
  preview,
  title,
  fromName,
  replyTo,
  type = 'regular',
}) => {
  const mailchimp = new Mailchimp(config.apiKey);

  // XXX If a campaign with this title and audience already exists, we will create a new one
  // should we raise an exception?
  return mailchimp.post('/campaigns', {
    type,
    recipients: {
      list_id: config.listId,
    },
    settings: {
      subject_line: subject,
      preview_text: preview,
      title,
      from_name: fromName,
      reply_to: replyTo,
      //to_name: '*|FNAME|*', we can't personalize to field because we don't have all audience first name
    },
  });
};

const updateCampaignHtml = ({ id, html }) => {
  const mailchimp = new Mailchimp(config.apiKey);
  return mailchimp.put(`/campaigns/${id}/content`, {
    html,
  });
};

const execute = async () => {
  // Get html
  const html = await prepareHtml();
  const fromName = 'This Week in Hathor';
  const subject = `${fromName} ${weekNumber}`;
  const replyTo = 'noreply@hathor.network';

  // Create campaign
  const campaign = await createCampaign({
    subject,
    preview: '',
    title: subject,
    fromName,
    replyTo,
  });

  // Set campaign html
  const update = await updateCampaignHtml({
    id: campaign.id,
    html,
  });

  console.log('Campaign created!\n', subject);
}

execute();

console.log('Creating your campaign...');