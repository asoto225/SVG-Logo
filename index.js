const inquirer = require('inquirer');
const fs = require('fs');
const questionList = require('./lib/questions.js');
const { Circle, Triangle, Square } = require('./lib/shapes.js');
// const fileName = `./examples/logo.svg`;

function createFile(fileName, answers) {
    let svgString = "";
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
    svgString += '<g>';
    svgString += `${answers.shape}`;

    let shapeChoice;
    if (answers.shape === 'Circle') {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />`;
    } else if (answers.shape === 'Triangle') {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape === 'Square') {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
    };

    svgString += `<text x="150" y="125" text-anchor="middle" font-size="60" fill="${answers.textColor}">${answers.text}</text>`
    svgString += '</g>';
    svgString += '</svg>';

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log('Generated logo.svg');
    })
};

function init() {
    inquirer
        .prompt(questionList)
        .then((answers) => {
            createFile(`./examples/${answers.shape}.svg`, answers);
        });
};

init();















// const fileName = './examples/logo.svg';
// const setShape = require('./lib/setShapes.js');


// // ** figure out how to write file usign the svg.js file to import the shapes. Should i just create a separate file for shapes and a separate file for the set shape function?

// //create new svg file
// function createLogo(response) {
//     const svg = setShape;
//       fs.writeFile(fileName, svg(response), (err) => {
//     err ? console.log(err) : console.log("Generated logo.svg");
// });
// }

// function initalize() {
//     inquirer
//     .prompt(questionList)
//     .then((response) => {
//         createLogo(response);
//         })
//     .catch(err => {
//             console.log(err)
//         });
// }


// // function setShape(response){
// //     if(response.shape === 'Circle'){
// //         let userInput = new Circle (response.shapeColor, response.text, response.textColor)
// //         return userInput.render()
// //     }
// //     if(response.shape === 'Triangle'){
// //         let userInput = new Triangle (response.shapeColor, response.text, response.textColor)
// //         return userInput.render()
// //     }
// //     if(response.shape === 'Square'){
// //         let userInput = new Square (response.shapeColor, response.text, response.textColor)
// //         return userInput.render()
// //     }
// // };

// initalize();