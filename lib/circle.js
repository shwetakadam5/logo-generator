// Constructor Shapes is imported.
const Shapes = require('./shapes');

//Class constructor Circle that takes in 'display text', 'text color', and 'shape color' and is a child class of Shapes
class Circle extends Shapes {
    constructor(displayText, textColor, shapeColor) {
        // The constructor of the base class Shapes is invoked to set the common text properties.
        super(displayText, textColor);
        this.circleXposition = 150;
        this.circleYposition = 125;
        this.circleRadius = 110;
        this.circleStrokeColor = 'lightgrey';
        this.circleFillColor = shapeColor;
    }

    // Function that renders the circle shape component and the shape color provided by the user.
    render() {
        return `<circle cx='${this.circleXposition}' cy='${this.circleYposition}' r='${this.circleRadius}' fill='${this.circleFillColor}' stroke='${this.circleStrokeColor}'></circle>`;
    }

}

// Constructor Circle is exported from the file.
module.exports = Circle;

