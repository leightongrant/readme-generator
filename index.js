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
      type: 'input',
      name: 'test',
      message: 'Enter tests that a user can run.\nSeperate each test with a comma >> '
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address >> '
    },
    {
      type: 'input',
      name: 'githubname',
      message: 'Enter your GitHub username >> '
    },
    {
      type: 'input',
      name: 'path',
      message: 'Enter path to a screenshot >> '
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license, the default is MIT >> ',
      choices: ['None', 'MIT', 'Apache-2', 'GPL', 'BSD', 'ISC'],
      default: 'MIT'
    },
  ])
  .then((r) => {
    
    const answers = {
      title: r.title,
      sdesc: r.sdesc,
      desc: r.desc,
      lic: r.license,
      inst: r.inst,
      usg: r.usg,
      contrib: r.contrib,
      test: r.test,
      email: r.email,
      githubname: r.githubname,
      path: r.path,
    };
    
    createFile(readmeTemplate(answers));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error(error);
    } else {
      console.error(error);
    }
  });









