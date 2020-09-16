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


]