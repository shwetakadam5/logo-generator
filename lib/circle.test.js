const Circle = require('./circle');

// A testing suite for Square is created.
describe('Circle', () => {

    describe('render', () => {

        it('should return the svg section for circle', () => {
            const shape = new Circle('TXT', 'white', 'blue');
            expect(shape.render()).toEqual("<circle cx='150' cy='125' r='110' fill='blue' stroke='lightgrey'></circle>");
        });

    });


});


