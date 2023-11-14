import core from '@actions/core';

const url = core.getInput('url');
const env = core.getInput('env');

await core.summary
  .addHeading('Blue Green Deployment Summary')
  .addRaw('This action will *always* deploy to the inactive environment.',true)
  .addRaw(`## Deployed to: ${env}`,true)
  .addRaw(`URL: [${url}](${url})`,true)
  .addRaw('It may take up to 5 minutes for ECS to deploy the container and any launch commands to complete.',true)
  .write()