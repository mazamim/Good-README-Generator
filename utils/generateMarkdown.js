var urls=[]
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dpw3rs0pv",
  api_key: "972653366497172",
  api_secret: "4-Z9rD8vXdhTV14oyYB_ATd1hEc",
});

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
    case "GNU":
      // return "https://www.whitesourcesoftware.com/wp-content/media/2021/04/aHViPTcyNTE0JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVjNDk3NmFlNDM5Y2QucG5nJnZlcnNpb249MDAwMCZzaWc9NDQ0MzgxMTNmN2U3NDliM2U1MGE2ZjNkNzA2YzU5NDA.png";
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "APACHE":
      return " [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)   ";
      break;
 
    default:
      return "No license";
  }

}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({project_title,description,motivation,whythis,problems,learned,installation,usage,pictures,credits,license}) {

   
   return `
  
    # ${project_title}
  
    ## ${description}
  
    - Motivation of Project :- ${motivation}
    - Why this project? ${whythis}
    - List of Problems focued on :- ${problems}
    - What I have learned?:- ${learned}
    
    ## Table of Contents 
  
    - Installation
    - Usage
    - Credits
    - License
    
    ## Installation
    
   ${installation.map((element)=>{
     return `${element}`
   }).join('')}
    
    ## Usage
    ${usage}
  
    
    ## Screenshots/usage Pictures links
    
    ${pictures.map((element)=>{
      return `${element}`
    }).join('')}
        
    
    ## Credits
    ${credits}
  
    
    ## License
    ${renderLicenseBadge(license)}
  
    ## How to Contribute
    
  `

  
  } 









module.exports = generateMarkdown;
