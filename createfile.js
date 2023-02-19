import fs from 'fs';

/* This function will take some data parameters,
insert them into the template and return it */
const readmeTemplate = (...data) => {
    //Questions Data
    const { lic, title, sdesc, desc, inst, usg, contrib, test, email, githubname, path } = data[0];
    //console.log(data);

    // Install Section
    const instDes = 'To install this app follow the steps below';
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

    // Usage Section
    const usgDesc = 'Follow the steps below to use this app';
    let usgDet = '';
    if (usg.split(',') === 1) {
        usgDet = `* ${usg[0].trim()}`;
    } else {
        usg.split(',').forEach(i => {
            usgDet += `* ${i.trim()}\n`;
        });
    }

    // Contribution Section
    const contribDesc = 'Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.';
    let contribDet = '';
    if (contrib.split(',') === 1) {
        contribDet = `* ${usg[0].trim()}`;
    } else {
        contrib.split(',').forEach(i => {
            contribDet += `* ${i.trim()}\n`;
        });
    }

    // Test Section
    const testDesc = 'To run test type the following command/s';
    let testDet = '';
    if (test.split(',') === 1) {
        testDet = `\`${usg[0].trim()}\``;
    } else {
        test.split(',').forEach(i => {
            testDet += `\`${i.trim()}\`\n\n`;
        });
    }

    // Questions Section
    const questDesc = 'If you have any questions about the repo, open an issue or contact me directly.';
    const emailAdd = `Contact me directly at ${email}`;
    const githubDet = `Find more info about my work at [${githubname}](https://github.com/${githubname}/)`;

    // License Section
    let licTxt = '';
    if (lic === 'None') {
        licTxt = 'None';
    } else {
        licTxt = `Distributed under the ${lic} License. See \`LICENSE.txt\` for more information.`;
    }

    // Table of contents
    const tocArr = ['Installation', 'Usage', 'Contributing', 'Tests', 'Questions', 'License'];
    let toc = '';
    for (const i of tocArr) {
        toc += `* <a href="#${i.toLowerCase()}">${i}</a>\n`;
    }


    const ph = 'N/A';
    const top = `<p align="right">(<a href="#readme-top">back to top</a>)</p>`;
    let templateData = `<a name="readme-top"></a>\n`;
    templateData += `# ${title}\n\n`;
    templateData += `${sdesc}\n\n`;
    templateData += `\n\n![screenshot](http://${path})\n\n`;
    templateData += `## Description\n\n${desc}\n${top}\n\n`;
    templateData += `## Table of Contents\n\n${toc}\n${top}\n\n`;
    templateData += `## Installation\n\n${instDes}\n\n${instDet}\n${top}\n\n`;
    templateData += `## Usage\n\n${usgDesc}\n\n${usgDet}\n${top}\n\n`;
    templateData += `## Contributing\n\n${contribDesc}\n\n${contribDet}\n${top}\n\n`;
    templateData += `## Tests\n\n${testDesc}\n\n${testDet}\n${top}\n\n`;
    templateData += `## Questions\n\n${questDesc}\n\n${emailAdd}\n\n${githubDet}\n${top}\n\n`;
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
