const inquirer = require('inquirer');
const fs = require('fs');
const svg = require('svg.js');

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('SVG image generated!');
    }
  });
}

function init() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Please choose 1 to 3 letters for your logo.',
      name: 'letters',
    },
    {
      type: 'list',
      name: 'shapeChoice',
      message: 'Please select a shape for your logo.',
      choices: [
        { name: 'Square', value: '<rect x="85" y="35" width="125" height="125"' },
        { name: 'Circle', value: '<circle cx="150" cy="100" r="80"' },
        { name: 'Triangle', value: '<polygon points="150 15, 270 150, 30 150"' },
      ],
    },
    {
      type: 'input',
      message: 'Please pick a color or enter a hexadecimal number for the background color.',
      name: 'backgroundColor',
    },
    {
      type: 'input',
      message: 'Please pick a color or enter a hexadecimal number for the text color.',
      name: 'textColor',
    },
    {
      type: 'input',
      message: 'Please pick a color or enter a hexadecimal number for the shape color.',
      name: 'shapeColor',
    },
  ])
  .then((answers) => {
        
    const { letters, shapeChoice, textColor, shapeColor, backgroundColor } = answers;
    
    const layout = 
    `<svg version="1.1"
       width="300" height="200"
       xmlns="http://www.w3.org/2000/svg">

      <rect width="100%" height="100%" fill="${backgroundColor}" />

      ${shapeChoice} fill= "${shapeColor}" />
      <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}" >${letters}</text>

    </svg>`;
      writeToFile('logo.svg', layout);
    })
    .catch((error) => console.error(error));
}

init();



    