// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const { title } = require('process');
const generateMarkdown = require('./utils/generatemarkdowns');
const fs = require('fs').promises; 
const generatemarkdown = require('./utils/generatemarkdowns');

// TODO: Create an array of questions for user input
const questions = () => { 
   return inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your Project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a short description of your project',
        name: 'description'
    },
    {
        type: 'list',
        message: 'Table of Contents',
        name: 'contents',
        choices: [
            {
                name: 'YES',
                value: 'YES'
            },
            {
                name: 'NO',
                value: 'NO',
            }
        ]
    },
    {
        type: 'input',
        message: 'How to install and run project',
        name: 'install'
    },
    {
        type: 'input',
        message: 'How to use project',
        name: 'use'
    },
    {
        type: 'input',
        message: 'Credits',
        name: 'credits'
    },
    {
        type: 'input',
        message: 'Tests',
        name: 'tests'

    },
    {
        type: 'input',
        message: 'GitHub',
        name: 'github'

    },
    {
        type: 'input',
        message: 'Email',
        name: 'email'

    },
    {
        type: 'list',
        message: 'License',
        name: 'license',
        choices: [
            {
                name: 'MIT',
                value: 'MIT',
            },
            {
                name: 'Apache',
                value: 'Apache',
            },
            {
                name: 'Mozilla',
                value: 'Mozilla',
            },
            {
                name: 'None',
                value: 'None',
            },
        ]
    },

]);
};


// TODO: Create a function to write README file
// TODO: Create a function to initialize app
const init = () => {
    questions()
      .then((answers) => fs.writeFile('README.md', generatemarkdown(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();