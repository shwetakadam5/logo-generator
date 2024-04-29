// const Square = require('./square');
// const Circle = require('./circle');
// const Triangle = require('./triangle');
// const Shapes = require('./shapes');

const logoDocument = require('./logodocument');

// A testing suite for Square is created.
describe('LogoDocument', () => {

    describe('createSVG', () => {

        it('should return a svg for circle', () => {

            const answers = {
                displayText: 'TXT',
                displayTextColor: 'white',
                shapeType: 'Circle',
                shapeColor: 'blue'
            }
            const svgStr = `<svg width='300' height='250' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx='150' cy='125' r='110' fill='blue' stroke='lightgrey'></circle><text x='150' y='150' text-anchor='middle' font-family='helvetica' font-size='50' fill='white' stroke='lightgrey'>TXT</text></svg>`;
            expect(logoDocument.createSVG(answers)).toBe(svgStr);
        });

    });


});



