//Import the logodocument
const logoDocument = require('./logodocument');

// A testing suite for LogoDocument is created.
describe('LogoDocument', () => {

    // A test is created to check that createSVG() returns the entire SVG string based on user input. 
    describe('createSVG', () => {

        // Test for SVG : Circle
        it('It should return a svg string with text and shape provided by user for Circle', () => {

            const answers = {
                displayText: 'TXT',
                displayTextColor: 'white',
                shapeType: 'Circle',
                shapeColor: 'blue'
            }
            const svgStr = `<svg width='300' height='250' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx='150' cy='125' r='110' fill='blue' stroke='lightgrey'></circle><text x='150' y='150' text-anchor='middle' font-family='helvetica' font-size='50' fill='white' stroke='lightgrey'>TXT</text></svg>`;
            expect(logoDocument.createSVG(answers)).toBe(svgStr);
        });

        // Test for SVG : Square
        it('It should return a svg string with text and shape provided by user for Square', () => {

            const answers = {
                displayText: 'TXT',
                displayTextColor: 'white',
                shapeType: 'Square',
                shapeColor: 'blue'
            }
            const svgStr = `<svg width='300' height='250' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect x='50' y='25' width='200' height='200' fill='blue' stroke='lightgrey'/><text x='150' y='150' text-anchor='middle' font-family='helvetica' font-size='50' fill='white' stroke='lightgrey'>TXT</text></svg>`;
            expect(logoDocument.createSVG(answers)).toBe(svgStr);
        });


        // Test for SVG : Triangle
        it('It should return a svg string with text and shape provided by user for Triangle', () => {

            const answers = {
                displayText: 'TXT',
                displayTextColor: 'white',
                shapeType: 'Triangle',
                shapeColor: 'blue'
            }
            const svgStr = `<svg width='300' height='250' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points='150, 30 30, 200 260, 200' fill='blue' stroke='lightgrey'/><text x='150' y='150' text-anchor='middle' font-family='helvetica' font-size='50' fill='white' stroke='lightgrey'>TXT</text></svg>`;
            expect(logoDocument.createSVG(answers)).toBe(svgStr);
        });

    });

});



