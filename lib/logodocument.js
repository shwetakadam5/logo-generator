// TODO: Import your Header, TaskList, and TaskListItem
const Square = require('./square');
const Circle = require('./circle');
const Triangle = require('./triangle');
const Shapes = require(`./shapes`);

function createSVG(answers) {
    // TODO: Create the SVG file
    console.log('in CreateSVG function');
    console.log(answers);
    const circle = new Circle();


    // TODO: Modify the template below to include your title, Header, and TaskList
    return circle.render();
}

module.exports = { createSVG };
