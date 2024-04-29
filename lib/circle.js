const Shapes = require('./shapes');

class Circle extends Shapes {
    constructor(displayText, textColor, shapeColor) {
        super(displayText, textColor);
        this.circleXposition = 150;
        this.circleYposition = 125;
        this.circleRadius = 110;
        this.circleFillColor = shapeColor;
        if (shapeColor === 'white') {
            this.circleStrokeColor = 'black';
        } else {
            this.circleStrokeColor = shapeColor;
        }
    }

    render() {

        return `<circle cx='${this.circleXposition}' cy='${this.circleYposition}' r='${this.circleRadius}' fill='${this.circleFillColor}'  stroke='${this.circleStrokeColor}' ></circle>`;
    }

}

module.exports = Circle;

