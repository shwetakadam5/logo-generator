// Constructor Square is imported.
const Square = require('./square');

// A testing suite for Square is created.
describe('Square', () => {

    describe('render', () => {

        it('should return the svg section for square', () => {
            const shape = new Square('TXT', 'white', 'blue');
            expect(shape.render()).toEqual("<rect x='50' y='25' width='200' height='200' fill='blue' stroke='lightgrey'/>");
        });

    });


});


