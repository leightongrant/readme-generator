// Validate function
function validate (input) {
    return input.trim().length !== 0 || 'You must enter details to continue';
}

function validateEmail (email) {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i;
    return re.test(email) || 'Please enter a valid email address';
}

const questions = () => {
    return [
        {
            type: 'input',
            name: 'title',
            message: 'Enter your Project Title or press enter to use repository name >> ',
        },
        {
            type: 'input',
            name: 'shortDescription',
            message: 'Enter a short description of your Project or press enter to use default>> ',
        },

        {
            type: 'input',
            name: 'description',
            message: 'Describe your Project in more details >> ',
            validate: validate
        },
        {
            type: 'input',
            name: 'installationIntro',
            message: 'Enter an intro for "Installation Section" or press enter to use default >> '
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter step by step details of how to install your App, seperate each step with a comma. If not required press enter to continue >> '
        },
        {
            type: 'input',
            name: 'usageIntro',
            message: 'Enter an intro for "Usage Section" or press enter to use default >> '
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter step by step details of how to use your App, seperate each step with a comma. If not required press enter to continue >> '
        },
        {
            type: 'input',
            name: 'contributionIntro',
            message: 'Enter an intro for "Contributions Section" or press enter to use default >> '
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter step by step details of how to contribute to your App, seperate each step with a comma. If not required press enter to continue >> '
        },
        {
            type: 'input',
            name: 'testIntro',
            message: 'Enter an intro for "Tests Section" or press enter to use default >> '
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter tests that a user can run, seperate each test with a comma. If not required press enter to continue >> '
        },
        {
            type: 'input',
            name: 'questionsIntro',
            message: 'Enter an intro for "Questions Section" or press enter to use default >> '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address >> ',
            validate: validateEmail
        },
        {
            type: 'input',
            name: 'githubName',
            message: 'Enter your GitHub username >> ',
            validate: validate
        },
        {
            type: 'input',
            name: 'path',
            message: 'Enter a path to a screenshot or save your screenshot to ./images/screenshot.png. If not required enter (n/a) or press enter to continue >> ',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license, the default is MIT >> ',
            choices: ['NONE', 'MIT', 'APACHEv2', 'GPLv3', 'BSD', 'ISC'],
            default: 'MIT'
        },
    ];
};


export { questions };