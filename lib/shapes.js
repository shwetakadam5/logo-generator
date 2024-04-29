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

    render() {
        throw new Error(`Child class must implement render() method.`);
    }

    renderText() {
        return `<text x='${this.textXPosition}' y='${this.textYPosition}' text-anchor='${this.textAnchor}' font-family='${this.fontFamily}' font-size='${this.fontSize}' fill='${this.textFillColor}' stroke='${this.textStrokeColor}'>${this.displayText}</text>`;


    }


}

module.exports = Shapes;

