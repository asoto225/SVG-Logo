const { Circle, Triangle, Square } = require('./shapes');

describe('Shapes', () => {
    test('should return a triangle', () => {
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="100, 15 200, 200 0, 200" fill="blue"/>
<text x="150" y="125" text-anchor="middle" font-size="60" fill="red">abc</text>
</svg>`
            const triangle = new Triangle('blue', 'red', 'abc');
            expect(triangle.render()).toBe(svg);
        });
    });