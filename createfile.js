import fs from 'fs';

/* This function will take some data parameters,
insert them into the template and return it */
const readmeTemplate = (...data) => {
    //Questions Data
    let { license, title, shortDescription, description, installation, usage, contribution, test, email, githubName, path, installationIntro, usageIntro, contributionIntro, testIntro, questionsIntro } = data[0];

    // Title and short description
    const repositoryName = fs.realpathSync('.').split('/')[fs.realpathSync('.').split('/').length - 1].toUpperCase();
    title === '' ? title = repositoryName : title;
    shortDescription === '' ? shortDescription = `A ${repositoryName} project` : shortDescription;

    // Table of contents
    const tocArr = ['Installation', 'Usage', 'Contributing', 'Tests', 'Questions', 'License'];
    let toc = '';
    for (const i of tocArr) {
        toc += `* <a href="#${i.toLowerCase()}">${i}</a>\n`;
    }

    // Install Section
    installationIntro === '' ? installationIntro = 'To install this app follow the steps below' : installationIntro;
    let installSteps = '';
    installation === '' ? installSteps = 'N/A' : installation.split(',').forEach(item => { installSteps += `* \`${item.trim()}\`\n`; });

    // Usage Section
    usageIntro === '' ? usageIntro = 'Follow the steps below to use the app' : usageIntro;
    let usageSteps = '';
    usage === '' ? usageSteps = 'N/A' : usage.split(',').forEach(item => { usageSteps += `* ${item.trim()}\n`; });

    // Contribution Section
    contributionIntro === '' ? contributionIntro = 'Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.' : contributionIntro;
    let contributionSteps = '';
    contribution === '' ? contributionSteps = 'N/A' : contribution.split(',').forEach(item => { contributionSteps += `* ${item.trim()}\n`; });

    // Tests Section
    testIntro === '' ? testIntro = 'To do tests, run the following command/s' : testIntro;
    let testSteps = '';
    test === '' ? testSteps = 'N/A' : test.split(',').forEach(item => { testSteps += `* \`${item.trim()}\`\n`; });

    // Questions Section
    questionsIntro === '' ? questionsIntro = 'If you have any questions about the repo, open an issue or contact me directly.' : questionsIntro;
    const directContact = `Contact me directly at ${email}`;
    const githubDetails = `Find more info about my work at [${githubName}](https://github.com/${githubName}/)`;

    // License Section
    const licenseDetails = `Distributed under the ${license} License. See \`LICENSE.txt\` for more information.`;

    // Build template with data
    const top = `<p align="right">(<a href="#readme-top">back to top</a>)</p>`;
    let templateData = `<a name="readme-top"></a>\n`;
    templateData += `# ${title}\n\n`;
    templateData += `${shortDescription}\n\n\n`;
    templateData += `\n\n![screenshot](${path})\n\n`;
    // templateData += `## Description\n\n${desc}\n${top}\n\n`;
    templateData += `## Table of Contents\n\n${toc}\n${top}\n\n`;
    templateData += `## Installation\n\n${installationIntro}\n\n${installSteps}\n${top}\n\n`;
    templateData += `## Usage\n\n${usageIntro}\n\n${usageSteps}\n${top}\n\n`;
    templateData += `## Contributing\n\n${contributionIntro}\n\n${contributionSteps}\n${top}\n\n`;
    templateData += `## Tests\n\n${testIntro}\n\n${testSteps}\n${top}\n\n`;
    templateData += `## Questions\n\n${questionsIntro}\n\n${directContact}\n\n${githubDetails}\n${top}\n\n`;
    templateData += `## License\n\n${licenseDetails}\n${top}\n\n`;

    return templateData;

};

/* This function will take a template with data to be inserted 
and create a README file */

const createFile = (template, ...data) => {
    fs.writeFile('READMEtest.md', template, (err) => {
        if (err) console.error(err);
        console.info('Generating README...');
    });
};


export { readmeTemplate, createFile };
