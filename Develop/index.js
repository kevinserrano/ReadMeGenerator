const fs = require("fs");

const inquirer = require("inquirer");

//Need correct path to grab js file
const generateMarkdown = require('../util/MarkDownGenerator.js')

const questions = [{
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
        message: "What license would you like to use for your application?",
        listChoices: [
            "AGPL",
            "MIT",
            "GPLv3",
            "None"
        ]
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