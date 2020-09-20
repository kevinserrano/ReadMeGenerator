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
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  <p> ${info.install}</p>
  ## Usage
  <p> ${info.usage}</p>
  ## License
  ![License](https://img.shields.io/badge/license-${info.license}-blue)
  ## Contributors
  <p>${info.contributing}</p>
  ## Test 
  <p> ${info.tests}</p>
  `
}

module.exports = generateMarkdown;