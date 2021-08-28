// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateReadMe = require("./src/template");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: 'projectName',
        message: "Enter your Project's name (Required):",
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
        name: 'description',
        message: "Enter a description for you project (Required):",
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
    },
    {
        type: "input",
        name: 'usage',
        message: "Enter usage instructions for your project:",
    },
    {
        type: "input",
        name: 'contribution',
        message: "Enter contribution instructions for your project:",
    },
    {
        type: "input",
        name: 'test',
        message: "Enter testing guidelines/instructions:",
    },
    {
        type: "checkbox",
        name: 'license',
        message: "Select the license for this project",
        choices: [
            {
                name: 'Apache License 2.0',
                value: "Apache License 2.0"
            },
            {
                name: 'GNU General Public License v3.0',
                value: 'GNU General Public License v3.0'
            },
            {
                name: 'MIT',
                value: 'MIT'
            },
            {
                name: 'NOT LICENSED',
                value: 'NOT LICENSED'
            }],
    },

    {
        type: "input",
        name: 'githubUser',
        message: "Enter your GitHub username (Required):",
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
        message: "Enter your email address (Required):",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
]

function promptUser() {
    inquirer.prompt(questions)
        .then(res => {
            console.log(res);
            writeToFile('README.md', generateReadMe(res));
        })
}

promptUser();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

