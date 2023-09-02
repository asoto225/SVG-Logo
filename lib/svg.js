function setShape(response){
    if(response === 'Circle'){
        let userInput = new Circle (response.shapeColor, response.text, response.textColor)
        return userInput.render()
    }
    // if(response === 'Triangle'){
    //     let userInput = new Triangle (response.shapeColor, response.text, response.textColor)
    //     return userInput.render()
    // }
    // if(response === 'Square'){
    //     let userInput = new Square (response.shapeColor, response.text, response.textColor)
    //     return userInput.render()
    // }

};

class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
};

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">


            <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>

        </svg>`
    };
};
