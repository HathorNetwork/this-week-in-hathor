## Install dependencies

`npm install`

## Create campaign

1. Create a config.js file (copy the template from `config.js.template`);
2. Generate html file for the 'This Week in Hathor' week post;
3. Execute `node index.js number htmlPath`, where `number` is the week number and `htmlPath` is the path to the html file.

## Send test email

You need the destination email address and the campaign id or name.

`node test.js email_address id campaignId` or `node test.js email_address name campaignName`


Node > 10 is required.
