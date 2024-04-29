// Constructor Shapes is imported.
const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(displayText, textColor, shapeColor) {
        // The constructor of the base class Shapes is invoked to set the common text properties.
        super(displayText, textColor);
        this.trianglePoints = '150, 30 30, 200 260, 200';
        this.triangleStrokeColor = 'lightgrey';
        this.triangleFillColor = shapeColor;
    }

    // Function that renders the triangle shape component and the shape color provided by the user.
    render() {

        return `<polygon points='${this.trianglePoints}' fill='${this.triangleFillColor}' stroke='${this.triangleStrokeColor}'/>`;

    }

}

// Constructor Triangle is exported from the file.
module.exports = Triangle;