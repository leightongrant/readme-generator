// Validate function
function validate (inp) {
    return inp.trim().length !== 0 || 'You must enter details to continue';
}

const questions = () => {
    return [
        {
            type: 'input',
            name: 'title',
            message: 'Enter project your title or press enter to use repository name >> ',
        },
        {
            type: 'input',
            name: 'shortDescription',
            message: 'Enter a short description of your project or press enter to use default>> ',
        },

        {
            type: 'input',
            name: 'description',
            message: 'Describe your project in more detail >> ',
            validate: validate
        },
        {
            type: 'input',
            name: 'installationIntro',
            message: 'Enter intro for installation section or press enter to use default >> '
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter step by step details of how to install your app, eperate each step with a comma. If not required press enter to continue >> '
        },
        {
            type: 'input',
            name: 'usageIntro',
            message: 'Enter intro for usage section or press enter to use default >> '
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter step by step details of how to use your app, seperate each step with a comma. If not required press enter to continue >> '
        },
        {
            type: 'input',
            name: 'contributionIntro',
            message: 'Enter intro for contributions section or press enter to use default >> '
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter step by step details of how to contribute to your app, seperate each step with a comma. If not required press enter to continue >> '
        },
        {
            type: 'input',
            name: 'testIntro',
            message: 'Enter intro for tests section or press enter to use default >> '
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter tests that a user can run, seperate each test with a comma. If not required press enter to continue >> '
        },
        {
            type: 'input',
            name: 'questionsIntro',
            message: 'Enter intro for questions section or press enter to use default >> '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address >> '
        },
        {
            type: 'input',
            name: 'githubName',
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
    ];
};


export { questions };