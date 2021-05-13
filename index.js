// TODO: Include packages needed for this application
//install inquirer
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown");
// TODO: Create an array of questions for user input
// add objects with type and value around question text
const questions = [
  { type: "input", message: "What is the project called", name: "project" },
  {
    type: "input",
    message: "Provide a short description",
    name: "description",
  },
  { type: "input", message: "Does this require installation", name: "install" },
  { type: "input", message: "How do you use this", name: "use" },
  {
    type: "input",
    message: "What techs were used and collaborators",
    name: "credits",
  },
  { type: "input", message: "What features do you have", name: "features" },
  { type: "input", message: "How can people contribute", name: "contribution" },
  {
    type: "list",
    message: "What license do you want to use",
    choices: ["GNU", "Mozilla", "MIT", "Apache"],
    name: "license",
  },
];
//run functions with inquirer
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}
//format in to mark down
// TODO: Create a function to initialize app
function init() {
  //user is given questions
  inquirer
    .prompt(questions)
    .then((data) => {
      writeToFile("Readme.md", generateMarkdown(data));
    })
    .catch();
}

// Function call to initialize app
init();
