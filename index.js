const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type:'input',
      name: 'name',
      message:'Enter text for the logo. (Must not be more than 3 characters)'
    },
    {
      type:'input',
      name: 'textColor',
      message:'Enter a text color'
    },
    {
      type:'list',
      name: 'shape',
      message:'Select a shape for the logo',
      choices: ['square', 'triangle', 'circle']
    },
    {
      type:'input',
      name: 'shapeColor',
      message:'Enter a shape color'
    }
  ])
  .then((response) =>{
    
  })