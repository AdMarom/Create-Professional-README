// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require('fs').promises; 
const generatemarkdown = require('./utils/generatemarkdowns');

// TODO: Create an array of questions for user input
const questions = () => { 
   return inquirer.prompt([
    {
        type: 'input',
        message: 'What is your user name?',
        name: 'username'
    },

]);
};

const generateREADME = ({username}) =>
`# ${username}`;

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
const init = () => {
    questions()
      .then((answers) => fs.writeFile('README.md', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();