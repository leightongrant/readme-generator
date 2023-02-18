import fs from 'fs';

/* This function will take some data parameters,
insert them into the template and return it */
const readmeTemplate = (...data) => {
    //Questions Data
    const { lic, title, sdesc, desc, inst } = data[0];
    //console.log(data);

    // Install details
    let instDet = '';
    let n = 1;
    if (inst.split(',') === 1) {
        instDet = `\`${n}. inst[0].trim()\``;
    } else {
        inst.split(',').forEach(i => {
            instDet += `\`${n}. ${i.trim()}\`\n\n`;
            n++;
        });
    }

    // Check for choses license
    let licTxt = '';
    if (lic === 'None') {
        licTxt = 'None';
    } else {
        licTxt = `Distributed under the ${lic} License. See \`LICENSE.txt\` for more information.`;
    }


    const ph = 'Enter text here';
    const top = `<p align="right">(<a href="#readme-top">back to top</a>)</p>`;
    let templateData = `<a name="readme-top"></a>\n`;
    templateData += `# ${title}\n\n`;
    templateData += `${sdesc}\n\n`;
    templateData += `## Description\n\n${desc}\n${top}\n\n`;
    templateData += `## Table of Contents\n\n${ph}\n${top}\n\n`;
    templateData += `## Installation\n\n${instDet}\n${top}\n\n`;
    templateData += `## Usage\n\n${ph}\n${top}\n\n`;
    templateData += `## Contributing\n\n${ph}\n${top}\n\n`;
    templateData += `## Tests\n\n${ph}\n${top}\n\n`;
    templateData += `## Questions\n\n${ph}\n${top}\n\n`;
    templateData += `## License\n\n${licTxt}\n${top}\n\n`;

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
