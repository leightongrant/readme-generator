import inquirer from 'inquirer';
import { createFile, readmeTemplate } from './createfile.js';

// Validate function
function validate (inp) {
  return inp.trim().length !== 0 || 'You must enter a value to continue';
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project >> ',
      validate: validate,
    },
    {
      type: 'input',
      name: 'sdesc',
      message: 'Enter a short description of your project >> ',
      validate: validate
    },
    {
      type: 'input',
      name: 'desc',
      message: 'Describe your project in more detail >> '
    },
    {
      type: 'input',
      name: 'inst',
      message: 'Enter step by step details of how to install your app.\nSeperate each step with a comma >> '
    },
    {
      type: 'input',
      name: 'usg',
      message: 'Enter step by step details of how to use your app.\nSeperate each step with a comma >> '
    },
    {
      type: 'input',
      name: 'contrib',
      message: 'Enter step by step details of how to contribute to your app.\nSeperate each step with a comma >> '
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license >> ',
      choices: ['None', 'MIT', 'Apache-2', 'GPL', 'BSD', 'ISC'],
      default: 'MIT'
    },
  ])
  .then((r) => {
    // Use user feedback for... whatever!!
    const answers = { title: r.title, sdesc: r.sdesc, desc: r.desc, lic: r.license, inst: r.inst, usg: r.usg, contrib: r.contrib };
    // const ans = r.license;
    //readmeTemplate(answers);
    createFile(readmeTemplate(answers));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.error(error);
    } else {
      // Something else went wrong
      console.error(error);
    }
  });









