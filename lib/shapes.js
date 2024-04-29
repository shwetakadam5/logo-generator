class Shapes {
    constructor(displayText, textColor) {
        this.svgwidth = 300;
        this.svgheight = 250;
        this.textXPosition = 135;
        this.textYPosition = 125;
        this.fontFamily = "helvetica";
        this.fontSize = 15;
        this.displayText = displayText;
        this.textColor = textColor;

    }

    render() {
        throw new Error(`Child class must implement render() method.`);
    }

    renderText() {
        return `<text x='${this.textXPosition}' y='${this.textYPosition}' font-family='${this.fontFamily}' font-size='${this.fontSize}' stroke='${this.textColor}'>${this.displayText}</text>`;
    }




}

module.exports = Shapes;

