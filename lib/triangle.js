const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(displayText, textColor, shapeColor) {
        super(displayText, textColor);
        this.trianglePoints = '150, 30 30, 200 260, 200';
        this.triangleStrokeColor = 'lightgrey';
        this.triangleFillColor = shapeColor;
    }
    render() {

        return `<polygon points='${this.trianglePoints}' fill='${this.triangleFillColor}' stroke='${this.triangleStrokeColor}'/>`;

    }

}

module.exports = Triangle;