// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const cloudinary = require("cloudinary").v2;

const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

cloudinary.config({
  cloud_name: "dpw3rs0pv",
  api_key: "972653366497172",
  api_secret: "4-Z9rD8vXdhTV14oyYB_ATd1hEc",
});


const emptyInput= (name)=>
{
  if(name !== '')
  {
    return true
  }
  else
   {
     console.log(`Input cannot be blank....`) 
  return false
  } 
}




// TODO: Create an array of questions for user input
const questions = [

    {
      type: 'input',
      name: 'project_title',
      message:'What is you Project Title?',
      validate:emptyInput
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description?',
      validate:emptyInput
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation?',
      validate:emptyInput
    },
    {
      type: 'input',
      name: 'whythis',
      message:'Why did you build this project?',
      validate:emptyInput
    },
    {
      type: 'input',
      name: 'problems',
      message: 'What problem does it solve?',
      validate:emptyInput
    },
    {
      type: 'input',
      name: 'learned',
      message: 'What did you learn?',
      validate:emptyInput
    },

    {
      type: 'Expand',
      name: 'installation',
      message: 'What are the steps required to install your project? Note:-Provide a step-by-step description of how to get the development environment running. sepearate the stepsby commas',
      validate:emptyInput
    },
    {
      type: 'input',
      name: 'usage',
      message:'Provide instructions and examples for use' 
    },
    {
      type: 'input',
      name: 'pictures',
      message:'Include screenshot of your Project.. Make sure to give full path of all your pictures seperated by commas eg:-C:/Users/mazam/Downloads/1.jpeg ,etc...' ,
      validate:(pictures)=>{
        var results;
        fs.access(pictures, fs.F_OK, (err) => {
          if (err) {
            console.error(err)
            console.log('File not exists')
            results='notOK'
          }
        else{
           console.log('File exists')
           return true
        }
         
          //file exists
        })
      
     if (results === 'OK'){
            return true
     }
     else{
       return false
     }


      }
    },
  ]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName,data,(error)=>{console.log(error)})

}

// TODO: Create a function to initialize app
function init() {


  // cloudinary.uploader.upload("C:/Users/mazam/Downloads/.jpeg", function(error, result) {console.log(result, error)});


  console.log(`##      ## ######## ##        ######   #######  ##     ## ########    
  ##  ##  ## ##       ##       ##    ## ##     ## ###   ### ##          
  ##  ##  ## ##       ##       ##       ##     ## #### #### ##          
  ##  ##  ## ######   ##       ##       ##     ## ## ### ## ######      
  ##  ##  ## ##       ##       ##       ##     ## ##     ## ##          
  ##  ##  ## ##       ##       ##    ## ##     ## ##     ## ##          
   ###  ###  ######## ########  ######   #######  ##     ## ########    `)
   console.log(` `)

   console.log('There are number of inputs in order to generate Your Readme file..Please answer them')
   console.log(`
   
   `)



   inquirer
   .prompt([
     {
       name: "yes_no",
       type: "confirm",
       message: "Shal we start?",
     },
   ])
   .then((answer) => {
       answer.yes_no ? readMeCreater() : console.log('Good Bye....Please run the program again inorder to create your read me file')
    
   });


  
}

// Function call to initialize app
init();


const readMeCreater  = ()=>{

  inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers)
    const clonedanswer={...answers}
    //making to array
    clonedanswer.installation=answers.installation.split(',')
    const content = generateMarkdown(clonedanswer);

    writeToFile("GenearatedReadme.md",content)
    
    
  });

}