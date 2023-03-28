// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license !== 'None') {
    return `![git hub license] (https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [license](#${license})\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
    This project is licensed under ${license} license`;
  }
  return '';
}

function renderContents(contents) {
  if (contents !== 'NO') {
    return `\n [Installation](#Installation)\n
    \n [Use](#Use)\n
    \n [License](#License)\n
    \n [Credits](#Credits)\n
    \n [Tests](#Tests)\n
    \n [Questions](#Questions)\n`;
  }
  return 'NA';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} 
${renderLicenseBadge(data.license)}

## Description 
${data.description}

## Table of Contents
${renderContents(data.contents)}

## Installation
${data.install}

## Usage
${data.use}
${renderLicenseLink(data.license)}

${renderLicenseSection(data.license)}

## Credits
${data.credits}

## Tests
${data.tests}

## Questions

Have questions? Email me at ${data.email} or find me on ![GitHub] (https://github.com/${data.github})!`;
}

module.exports = generateMarkdown;