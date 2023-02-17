import fs from 'fs';

/* This function will take some data parameters,
insert them into the template and return it */
const readmeTemplate = (...data) => {
    //console.log(data);
    const [title, shortDescription, description] = data[0];
    const ph = 'Enter text here';
    const top = `<p align="right">(<a href="#readme-top">back to top</a>)</p>`;
    let templateData = `<a name="readme-top"></a>\n`;
    templateData += `# ${title}\n\n`;
    templateData += `${shortDescription}\n\n`;
    templateData += `## Description\n\n${description}\n${top}\n\n`;
    templateData += `## Table of Contents\n\n${ph}\n${top}\n\n`;
    templateData += `## Installation\n\n${ph}\n${top}\n\n`;
    templateData += `## Usage\n\n${ph}\n${top}\n\n`;
    templateData += `## Contributing\n\n${ph}\n${top}\n\n`;
    templateData += `## Tests\n\n${ph}\n${top}\n\n`;
    templateData += `## Questions\n\n${ph}\n${top}\n\n`;
    templateData += `## License\n\n${ph}\n${top}\n\n`;

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
