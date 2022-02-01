const emptyInput = (name) => {
  if (name !== "") {
    return true;
  } else {
    console.log(`Input cannot be blank....`);
    return false;
  }
};

const questions = [
  {
    type: "input",
    name: "project_title",
    message: "What is you Project Title?",
    validate: emptyInput,
  },
  {
    type: "input",
    name: "description",
    message: "What is the description?",
    validate: emptyInput,
  },
  {
    type: "input",
    name: "motivation",
    message: "What was your motivation?",
    validate: emptyInput,
  },
  {
    type: "input",
    name: "whythis",
    message: "Why did you build this project?",
    validate: emptyInput,
  },


  {
    type: "Expand",
    name: "installation",
    message:
      "What are the steps required to install your project? Seperate by commasifmorethan 1",
    validate: emptyInput,
    filter: async (name) => (name.includes(",") ? name.split(",") : name.split()),
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use",
  },
  {
    type: "input",
    name: "pictures",
    message:"Include Screenshot of your Project..  eg:-C:/Users/mazam/Downloads/1.jpeg ,etc...",
    filter:async (name) => (name.includes(",") ? name.split(",") : name.split()),
  },

  {
    type: "editor",
    name: "credits",
    message:"Include credits here",
    filter:async (name) => (name.includes(",") ? name.split(",") : name.split()),
    
  },

  {
    type: "list",
    name: "license",
    message:"Select license type from the list",
    choices:['No license','MIT','GNU','APACHE']
    
  },

  {
    type: "input",
    name: "contribute",
    message:"How to contribute?",
    
  },


];

module.exports = questions;
