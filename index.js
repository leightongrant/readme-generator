import inquirer from 'inquirer';
import { createFile, readmeTemplate } from './createfile.js';
import { questions } from './questions.js';



inquirer
  .prompt(
    questions()
  )
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









