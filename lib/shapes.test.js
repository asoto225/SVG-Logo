const { describe } = require('yargs');
const { Circle, Triangle, Square } = require('./shapes');

describe('Shapes', () => {
    test('should return a circle', () => {
            const circle = new Circle();
            expect(circle).toBe(circle);
        });
    });