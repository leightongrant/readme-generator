import inquirer from 'inquirer';
import { createFile, readmeTemplate } from './createfile.js';
import { questions } from './questions.js';

inquirer
  .prompt(
    questions()
  )
  .then((data) => {
    const answers = {
      title: data.title.trim(),
      shortDescription: data.shortDescription.trim(),
      description: data.description.trim(),
      license: data.license.trim(),
      installationIntro: data.installationIntro.trim(),
      installation: data.installation.trim(),
      usageIntro: data.usageIntro.trim(),
      usage: data.usage.trim(),
      contributionIntro: data.contributionIntro.trim(),
      contribution: data.contribution.trim(),
      testIntro: data.testIntro.trim(),
      questionsIntro: data.questionsIntro.trim(),
      test: data.test.trim(),
      email: data.email.trim(),
      githubName: data.githubName.trim(),
      path: data.path.trim(),
    };
    //readmeTemplate(answers);
    createFile(readmeTemplate(answers));
    //console.table(answers);

  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error(error);
    } else {
      console.error(error);
    }
  });










