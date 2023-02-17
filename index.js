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
      name: 'shortdescription',
      message: 'Enter a short description of your project >> '
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project in more detail >> '
    }
  ])
  .then((r) => {
    // Use user feedback for... whatever!!
    const answers = [r.title, r.shortdescription, r.description];
    //readmeTemplate(answers);
    createFile(readmeTemplate(answers));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.error(error);
    } else {
      // Something else went wrong
      console.log('Something went wrong');
    }
  });









