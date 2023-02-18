import inquirer from 'inquirer';
import { createFile, readmeTemplate } from './createfile.js';


inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project >> '
    },
    {
      type: 'input',
      name: 'sdesc',
      message: 'Enter a short description of your project >> '
    },
    {
      type: 'input',
      name: 'desc',
      message: 'Describe your project in more detail >> '
    },
    {
      type: 'input',
      name: 'inst',
      message: 'List install details, seperate each with a comma >> '
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
    const answers = { title: r.title, sdesc: r.sdesc, desc: r.desc, lic: r.license, inst: r.inst };
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









