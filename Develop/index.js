const fs = require("fs");

const inquirer = require("inquirer");

//Need correct path to grab js file
const generateMarkdown = require('../util/MarkDownGenerator.js')

const questions = [{

        type: "input",
        name: "github",
        message: "Welcome to this README generator application.\n  Please enter your Github username.",

    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address.",

    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Give me a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "How does the user install your application?"
    },
    {
        type: "input",
        name: "usage",
        message: "How does the user use the application?"
    },
    {
        type: "list",
        name: "license",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause Simplified License", "BSD 3-Clause New/Revised License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser Public License v2.1", "Mozilla Public License 2.0", "The Unilicense"],
        message: "What license would you like to use for your application?",

    },
    {
        type: "input",
        name: "contributing",
        message: "What did other users contribute?"
    },
    {
        type: "input",
        name: "tests",
        message: "Write any tests done here: "
    }


]
//console.log("done correctly");

function writeToFile(info) {

    fs.writeFile("README.md", info, function (err) {
        if (err) {
            throw err;
        }
        console.log('README created');
    })
}

function init() {
    return inquirer
        .prompt(questions)

        .catch(function (err) {
            console.log(err);
        });
}
// inquirer
//     .prompt(questions).then(answers => {

//         console.log('\nanswers:');
//         console.log(answers);
//     }).catch(_err => {
//         console.log("this failed")
//     })
// call the init function to start
init()
    .then(function (data) {
        return generateMarkdown(data)
    }).catch(error => {
        console.log("ERROR");
    })
    .then((answers) => {
        console.log(answers)
        writeToFile(answers)

    }).catch(error => {
        console.log("File not written");
    })