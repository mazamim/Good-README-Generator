// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const displayStartUP = require("./utils/statup.js");
const generateMarkdown = require("./utils/generateMarkdown.js");
const questions = require("./utils/questions.js");

cloudinary.config({
  cloud_name: "dpw3rs0pv",
  api_key: "972653366497172",
  api_secret: "4-Z9rD8vXdhTV14oyYB_ATd1hEc",
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    console.log(error);
  });
}

// TODO: Create a function to initialize app
function init() {

  displayStartUP();

  inquirer
    .prompt([
      {
        name: "yes_no",
        type: "confirm",
        message: "Shal we start?",
      },
    ])
    .then((answer) => {
      answer.yes_no
        ? readMeCreater()
        : console.log(
            "Good Bye....Please run the program again inorder to create your read me file"
          );
    });
}

// Function call to initialize app
init();

async function readMeCreater() {
var urlArray=[]
  const answer = await inquirer.prompt(questions);
     answer.pictures.forEach((element) => {
  cloudinary.uploader.upload(element, (error, results) => {
    if (results) {
      urlArray.push(results.url);
      const clonedAnswer = { ...answer };
      clonedAnswer.pictures = urlArray;
      const content = generateMarkdown(clonedAnswer);
      writeToFile(`${clonedAnswer.project_title}.md`, content);
    }
  });
});
}

