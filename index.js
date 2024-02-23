const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input, each question will help build part of your README file
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description for your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "Are there any installation requirements? (if so please describe)"
    },    
    {
        type: "input",
        name: "usage",
        message: "How is your project used?"
    },
    {
        type: "input",
        name: "contributing",
        message: "How does someone make contributions to your project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Are there any testing instructions for this project."
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to use?",
        choices: ["None", "MIT", "Apache", "BDS 3-Clause", "Mozilla"]
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(data)
        if(err){
            console.log(err)
        } else {
            console.log("ReadME has been succesfully created.")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generateMarkdown(data))
        console.log(data)
    })
}

// Function call to initialize app
init();