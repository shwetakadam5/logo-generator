const Triangle = require('./triangle');

// A testing suite for Triangle is created.
describe('Triangle', () => {

    describe('render', () => {

        // A test is created to check that render() returns a valid Triangle SVG component with the user input shape color blue through constructor
        it('render() should return the string for the corresponding svg section of circle with user given shape color', () => {
            const shape = new Triangle('TXT', 'white', 'blue');
            expect(shape.render()).toEqual("<polygon points='150, 30 30, 200 260, 200' fill='blue' stroke='lightgrey'/>");
        });

        // A test is created to check that render() returns a valid Triangle SVG component with the user input shape color blue through explicit setting property
        it('render() should return the string for the corresponding svg section of circle with user given shape color', () => {
            const shape = new Triangle();
            shape.triangleFillColor = 'blue';
            expect(shape.render()).toEqual("<polygon points='150, 30 30, 200 260, 200' fill='blue' stroke='lightgrey'/>");
        });

    });

});


