class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
};

class Circle extends Shape {
    constructor(shapeColor, textColor, text){
    super(shapeColor, textColor, text)}
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
<text x="150" y="125" text-anchor="middle" font-size="60" fill="${this.textColor}">${this.text}</text>
</svg>`;
    };
};

class Triangle extends Shape {
    constructor(shapeColor, textColor, text){
    super(shapeColor, textColor, text)}
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
<text x="150" y="125" text-anchor="middle" font-size="60" fill="${this.textColor}">${this.text}</text>
</svg>`;
    };
};

class Square extends Shape {
    constructor(shapeColor, textColor, text){
    super(shapeColor, textColor, text)}
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect width="190" height="190" fill="${this.shapeColor}"/>
<text x="150" y="125" text-anchor="middle" font-size="60" fill="${this.textColor}">${this.text}</text>
</svg>`;
    };
};

module.exports = { Circle, Triangle, Square }