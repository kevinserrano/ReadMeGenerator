function generateMarkdown(info) {
  // This is where entire README.md will reference, with title, description, features, etc.
  return `
  # ${info.title}
  ## Description
  ${info.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributors)
  * [Tests](#test)
  * [Questions](#questions)
  
  ## Installation
  <p> ${info.installation}</p>

  ## Usage
  <p> ${info.usage}</p>

  ## License
  <p>![Badge](https://img.shields.io/badge/license-${info.license}-blue)</p>

  ## Contributors
  <p>${info.contributing}</p>

  ## Test
  <p> ${info.tests}</p>
  
  ## Questions
  <p>Github Profile= https://github.com/${info.github}/</p>
  <p> I can be reached at this email:${info.email}</p>
  `
}

module.exports = generateMarkdown;
