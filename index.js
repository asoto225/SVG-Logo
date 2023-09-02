const inquirer = require('inquirer');
const fs = require('fs');
const questionList = require('./lib/questions.js');
const fileName = './examples/logo.svg';
const setShape = require('./lib/svg.js');


//create new svg file 
function newSvg(response) {
     const svg = setShape;
    fs.writeFile(fileName, svg(response), ()=> console.log('Generated logo.svg'));
};

// function writeToFile(){
//     const fileName = './examples/logo.svg'
//     fs.writeFile(fileName, setShape, (err) =>{
//         err ? console.log(err) : console.log(fileName + ' created.')
//     });
// }

// function initalize(){
//     inquirer
//     .prompt(questionList)
//     .then(response => newSvg(response))
// };

function initalize() {
    inquirer 
    .prompt(questionList)
    .then((response) => {
        newSvg(response);
        })
    .catch(err => {
            console.log(err)
        });
}

initalize();
