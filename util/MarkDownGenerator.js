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
  <p> ${info.installation}</p>
  ## Usage
  <p> ${info.usage}</p>
  ## License
  ![License](https://img.shields.io/badge/license-${info.license}-blue)<br>
  ## Contributors
  <p>${info.contributing}</p>
  ## Test 
  <p> ${info.tests}</p>
  ## Questions
  <p> Github Profile = https://github.com/${info.github}/</p>
  <p> I can be reached at ${info.email}</p>
  `
}

module.exports = generateMarkdown;