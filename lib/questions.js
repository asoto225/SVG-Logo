const questions = [
        // Text 
        {
            name: 'text',
            message: 'Enter a text for the logo(3 character maximum)',
            type: 'input',
            validate: (answer) => {
                if (answer.length > 3) {
                    return console.log('\n Text must be 3 characters or less! Please try again');
                }
                return true;
            }
        },

        {
            name: 'textColor',
            message: 'Enter a text color',
            type: 'input'
        },

        // Shape
        {
            name: 'shape',
            message: 'Select a shape for the logo',
            type: 'list',
            choices: ['Circle', 'Triangle', 'Square']
        },

        {
            name: 'shapeColor',
            message: 'Enter a shape color',
            type: 'input'
        },
    ]

module.exports = questions;