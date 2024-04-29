const Triangle = require('./triangle');

// A testing suite for Square is created.
describe('Triangle', () => {

    describe('render', () => {

        it('should return the svg section for triangle', () => {
            const shape = new Triangle('TXT', 'white', 'blue');
            expect(shape.render()).toEqual("<polygon points='150, 30 30, 200 260, 200' fill='blue' stroke='lightgrey'/>");
        });

    });


});


