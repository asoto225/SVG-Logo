class Shape {
    constructor() {
        this.shapeColor = "";
    }
    setColor(colorVar) {
        this.shapeColor = colorVar;
    };
};

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    };
};

class Triangle extends Shape {
    render() {
        return `<polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>`;
    };
};

class Square extends Shape {
    render() {
        return `<rect width="190" height="190" fill="${this.shapeColor}"/>`;
    };
};

module.exports = { Circle, Triangle, Square }