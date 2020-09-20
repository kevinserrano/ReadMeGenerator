const fs = require("fs");

const inquirer = require("inquirer");

//Need correct path to grab js file


const questions = [{
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Give me a description of your project"
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
        message: "What other users contributed?"
    },
    {
        type: "input",
        name: "tests",
        message: "Write any tests done here: "
    }


]
//console.log("done correctly");

function writeToFile(info) {
    // want to save the markdown file to the repo
    fs.writeFile("README.md", info, function (err) {
        if (err) {
            return err;
        }
        console.log('README created');
    })
}