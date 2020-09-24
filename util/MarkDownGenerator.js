function generateMarkdown(info) {
  // This is where entire README.md will reference, with title, description, features, etc.

  let badge = `https://img.shields.io/badge/license-${info.license}-brightgreen`;
  badge = encodeURI(badge);


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
  <img>![badge](${badge})</img>
  <p>${info.license}</p>

  ## Contributors
  <p>${info.contributing}</p>

  ## Test
  <p> ${info.tests}</p>
  
  ## Questions
  <a href = "https://github.com/${info.github}"> GitHub </a> \n
  I can be reached at this email : <a href= "mailto:${info.email}">${info.email}</a>
  `
}

module.exports = generateMarkdown;