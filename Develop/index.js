// TODO: Include packages needed for this application
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  "What is the project called",
  "Provide a short description",
  "Does this require installation",
  "How do you use this",
  "Do you have credits or collaborators",
  "What features do you have",
  "How can people contribute",
  "Did you use any tests",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
