// Constructor Shapes is imported.
const Shapes = require('./shapes');
const Circle = require('./circle');

// A testing suite for Shapes is created.
describe('Shapes', () => {

    describe('render', () => {

        // A test is created to check that render() of parent class Shapes throws an error if the child class does not implement it
        it('render() should throw error if the child class does not implement the render function', () => {
            class Oval extends Shapes {
                constructor() {
                    super();
                }
            }
            expect(() => new Oval().render()).toThrow('Child class must implement render() method.');
        });

        // A test is created to check that render() of parent class Shapes does not throw an error if the child class has implemented it
        it('render() should not throw error if the child implements the render function', () => {
            const circle = new Circle();
            expect(() => circle.render()).not.toThrow('Child class must implement render() method.');
        });

    });

});


