const Shapes = require('./shapes');

class Square extends Shapes {
    constructor(displayText, textColor, shapeColor) {
        super(displayText, textColor);
        this.squareXPosition = 50;
        this.squareYPosition = 25;
        this.squareWidth = 200;
        this.squareHeight = 200;
        this.squareStrokeColor = 'lightgrey';
        this.squareFillColor = shapeColor;
    }

    render() {

        return `<rect x='${this.squareXPosition}' y='${this.squareYPosition}' width='${this.squareWidth}' height='${this.squareHeight}' fill='${this.squareFillColor}'  stroke='${this.squareStrokeColor}' />`;

    }

}

module.exports = Square;