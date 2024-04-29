const Circle = require('./circle');

// A testing suite for Circle is created.
describe('Circle', () => {

    describe('render', () => {
        // A test is created to check that render() returns a valid circle SVG component with the user input shape color blue through constructor
        it('render() should return the string for the corresponding svg section of circle with user given shape color', () => {
            const shape = new Circle('TXT', 'white', 'blue');
            expect(shape.render()).toEqual("<circle cx='150' cy='125' r='110' fill='blue' stroke='lightgrey'></circle>");
        });

        // A test is created to check that render() returns a valid circle SVG component with the user input shape color blue through explicit setting property
        it('render() should return the string for the corresponding svg section of circle with user given shape color', () => {
            const shape = new Circle();
            shape.circleFillColor = 'blue';
            expect(shape.render()).toEqual("<circle cx='150' cy='125' r='110' fill='blue' stroke='lightgrey'></circle>");
        });
    });

});


