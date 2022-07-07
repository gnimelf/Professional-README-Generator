// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
var title = "";

// TODO: Create an array of questions for user input
const questions = [
    {
        "type": "input",
        "name": "title",
        "message": "Enter the title of the project "
    },
    {
        "type": "input",
        "name": "description",
        "message": "Provide a short description explaining the what, why, and how of your project."
    },
    {
        "type": "input",
        "name": "usage",
        "message": "Provide instructions and examples for use."
    },
    {
        "type": "input",
        "name": "credits",
        "message": "List your collaborators, any third-party assets, tutorials, if any, with links to their GitHub profiles."
    },
    {
        "type": "list",
        "name": "license",
        "message": "Choose a license",
        "choices": [
            "Apache",
            "Boost",
            "BSD 3",
            "CC0",
            "Eclipse",
            "GNU GPL v3",
            "IBM",
            "ISC",
            "MIT",
            "Mozilla",
            "SIL",
            "Unlicense"
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    
    // add answer to generateMarkDown function
    .then((answers) => {
        title = answers.title;
        var data = generateMarkdown(answers);
        writeToFile(`${title}.md`, data)
    })
    .catch((err) => {
        console.log(err);
    });
}

// Function call to initialize app
init();
