//Class constructor Shapes is the parent class which takes in display text and text color that are common to all the child classes.
class Shapes {
    constructor(displayText, textColor) {
        this.svgwidth = 300;
        this.svgheight = 250;
        this.textXPosition = 150;
        this.textYPosition = 150;
        this.fontFamily = "helvetica";
        this.textAnchor = 'middle';
        this.fontSize = 50;
        this.textStrokeColor = 'lightgrey'
        this.displayText = displayText;
        this.textFillColor = textColor;

    }

    // Function that enforces that all child classes must implement the render method by throwing an error if not.
    render() {
        throw new Error(`Child class must implement render() method.`);
    }

    // Function that renders the text component of the SVG
    renderText() {
        return `<text x='${this.textXPosition}' y='${this.textYPosition}' text-anchor='${this.textAnchor}' font-family='${this.fontFamily}' font-size='${this.fontSize}' fill='${this.textFillColor}' stroke='${this.textStrokeColor}'>${this.displayText}</text>`;


    }


}

// Constructor Shapes is exported from the file.
module.exports = Shapes;

