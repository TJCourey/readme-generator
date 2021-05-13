// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "GNU": {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
    case "Mozilla": {
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
    case "MIT": {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    case "Apache": {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = `${renderLicenseBadge(data.license)}`;
  return `
  ${markdown}\n

  # ${data.project}\n
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Features](#features)

  ## Description\n
  ${data.description}\n
  ## Installation\n
  ${data.install}\n
  ## Usage\n
  ${data.use}\n
  ## Credits\n
  ${data.credits}\n
  ## License\n
  ${markdown}\n
  
  ## Features\n
  ${data.features}\n
  ## How to Contribute\n
  ${data.contribution}\n
`;
}

module.exports = generateMarkdown;
