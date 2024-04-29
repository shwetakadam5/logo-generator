// Constructor Square is imported.
const Square = require('./square');

// A testing suite for Square is created.
describe('Square', () => {

    describe('render', () => {

        // A test is created to check that render() returns a valid square SVG component with the user input shape color blue through constructor
        it('render() should return the string for the corresponding svg section of circle with user given shape color', () => {
            const shape = new Square('TXT', 'white', 'blue');
            expect(shape.render()).toEqual("<rect x='50' y='25' width='200' height='200' fill='blue' stroke='lightgrey'/>");
        });

        // A test is created to check that render() returns a valid square SVG component with the user input shape color blue through explicit setting property
        it('render() should return the string for the corresponding svg section of circle with user given shape color', () => {
            const shape = new Square();
            shape.squareFillColor = 'blue';
            expect(shape.render()).toEqual("<rect x='50' y='25' width='200' height='200' fill='blue' stroke='lightgrey'/>");
        });

    });

});


