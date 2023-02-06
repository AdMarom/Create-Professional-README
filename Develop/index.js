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
        type: 'input',
        message: 'Table of Contents',
        name: 'contents'
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
        type: 'list',
        message: 'License',
        name: 'license',
        choices: [
            {
                name: 'Choice 1',
                value: 1,
            },
            {
                name: 'Choice 2',
                value: 2,
            },
            {
                name: 'Choice 3',
                value: 3,
            },
        ]
    },

]);
};


// TODO: Create a function to write README file
// TODO: Create a function to initialize app
const init = () => {
    questions()
      .then((answers) => fs.writeFile('README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();