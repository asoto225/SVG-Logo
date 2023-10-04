const inquirer = require('inquirer');
const fs = require('fs');
const questionList = require('./lib/questions.js');
const { Circle, Triangle, Square } = require('./lib/shapes.js');

function createFile(fileName, response) {


    let shapeChoice;
    if (response.shape === 'Circle') {
        shapeChoice = new Circle(response.shapeColor, response.textColor, response.text);
    } else if (response.shape === 'Triangle') {
        shapeChoice = new Triangle(response.shapeColor, response.textColor, response.text);
    } else if (response.shape === 'Square') {
        shapeChoice = new Square(response.shapeColor, response.textColor, response.text);
    };



    fs.writeFile(fileName, shapeChoice.render(), (err) => {
        err ? console.log(err) : console.log('Generated logo.svg');
    })
};

function init() {
    inquirer
        .prompt(questionList)
        .then((response) => {
            createFile(`./examples/${response.shape}.svg`, response);
        });
};

init();