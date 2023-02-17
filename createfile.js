import fs from 'fs';

/* This function will take some data parameters,
insert them into the template and return it */
const readmeTemplate = (...data) => {
    //console.log(data);
    const [title, shortDescription, description] = data[0];
    // console.log(title);
    // console.log(description);
    let templateData = '';

    templateData += `# ${title}\n\n`;
    templateData += `${shortDescription}\n\n`
    templateData += `## Description\n\n${description}`;

    return templateData;

};

/* This function will take a template with data to be inserted 
and create a README file */

const createFile = (template, ...data) => {
    fs.writeFile('README.md', template, (err) => {
        if (err) console.error(err);
        console.info('Generating README...');
    });
};


export { readmeTemplate, createFile };
