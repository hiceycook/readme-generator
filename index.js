// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./src/template");

// TODO: Create an array of questions for user input
const promptUser = userInput => {
    return inquirer.prompt([
        {
            type: "input",
            name: 'name',
            message: "Enter your Project's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Project name!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'decription',
            message: "Enter a description for you project:",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'installation',
            message: "Enter installation instructions for your project:",
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'usage',
            message: "Enter usage instructions for your project:",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage instructions!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'contribution',
            message: "Enter contribution instructions for your project:",
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please enter contribution instructions!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'tests',
            message: "Enter testing guidelines/instructions:",
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('Please enter testing guidelines!');
                    return false;
                }
            }
        },
        {
            type: "checkbox",
            name: 'license',
            message: "Select the license for this project",
            choices: ['Apache license 2.0', 'GNU General Public License v3.0', 'MIT', 'BSD 2-clause "Simplified" license',
                'BSD 3-clause "New" or "Revised" license', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
        },
        {
            type: "input",
            name: 'github',
            message: "Enter your GitHub username:",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'email',
            message: "Enter your email address:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },

    ]);
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

promptUser().then(userInput => console.log(userInput));


