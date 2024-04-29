// TODO: Import your Header, TaskList, and TaskListItem
const Square = require('./square');
const Circle = require('./circle');
const Triangle = require('./triangle');
const Shapes = require(`./shapes`);

function createSVG(answers) {
    // TODO: Create the SVG file

    console.log('in CreateSVG function');
    console.log(answers);
    let logoShape;
    if (answers.shapeType === 'Circle') {
        logoShape = new Circle(answers.displayText, answers.displayTextColor, answers.shapeColor);
    } else if (answers.shapeType === 'Square') {
        logoShape = new Square(answers.displayText, answers.displayTextColor, answers.shapeColor);
    } else {
        logoShape = new Triangle(answers.displayText, answers.displayTextColor, answers.shapeColor);
    }

    return `<svg width='${logoShape.svgwidth}' height='${logoShape.svgheight}' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    ${logoShape.render()}
    ${logoShape.renderText()}
    </svg>`;

}

module.exports = { createSVG };
