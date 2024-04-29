// Constructor Shapes is imported.
const Shapes = require('./shapes');

class Square extends Shapes {
    constructor(displayText, textColor, shapeColor) {
        // The constructor of the base class Shapes is invoked to set the common text properties.
        super(displayText, textColor);
        this.squareXPosition = 50;
        this.squareYPosition = 25;
        this.squareWidth = 200;
        this.squareHeight = 200;
        this.squareStrokeColor = 'lightgrey';
        this.squareFillColor = shapeColor;
    }

    // Function that renders the square shape component and the shape color provided by the user.
    render() {

        return `<rect x='${this.squareXPosition}' y='${this.squareYPosition}' width='${this.squareWidth}' height='${this.squareHeight}' fill='${this.squareFillColor}' stroke='${this.squareStrokeColor}'/>`;

    }

}

// Constructor Square is exported from the file.
module.exports = Square;