// Imported required classes 
const Square = require('./square');
const Circle = require('./circle');
const Triangle = require('./triangle');

// Function accepts the user input and returns the SVG string created based on the inputs.
function createSVG(answers) {

    let logoShape;

    if (answers.shapeType === 'Circle') {
        logoShape = new Circle(answers.displayText, answers.displayTextColor, answers.shapeColor);
    } else if (answers.shapeType === 'Square') {
        logoShape = new Square(answers.displayText, answers.displayTextColor, answers.shapeColor);
    } else {
        logoShape = new Triangle(answers.displayText, answers.displayTextColor, answers.shapeColor);
    }

    return `<svg width='${logoShape.svgwidth}' height='${logoShape.svgheight}' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">${logoShape.render()}${logoShape.renderText()}</svg>`;

}
// Function createSVG is exported from the file.
module.exports = { createSVG };
