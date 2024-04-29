// Included packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs/promises');

const { createSVG } = require('./logodocument');

class Logoinquirer {

    constructor() {
        console.log("Constructore invoked");
    }

    run() {
        // Created an array of questions for user input
        const questions = [
            [ "input", "displayText", "Enter the text:", "", true, [], (function (displayText) {
                // Regex only 3 character text
                return /^([A-Za-z0-9]{1,3})$/.test(displayText) ? true : "Please enter valid text with atleast 1 and upto 3 characters.";
            }) ],
            [ "input", "displayTextColor", "Enter the text color:", "", true, [], (function (displayTextColor) {
                //regular expression pattern matches both three-digit (#abc) and six-digit (#abcdef) hexadecimal color codes or regex to match color name
                const colorkeywords = [ "aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow" ];
                if (colorkeywords.includes(displayTextColor.toLowerCase()) || (/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(displayTextColor))) {
                    return true;
                } else {
                    return "Please enter valid color keywords or hexadecimal colors code.";
                }
            }) ],
            [ "list", "shapeType", "Select the Shape:", "", true, [ "Circle", "Triangle", "Square" ] ],
            [ "input", "shapeColor", "Enter the shape color:", "", true, [], (function (shapeColor) {
                //regular expression pattern matches both three-digit (#abc) and six-digit (#abcdef) hexadecimal color codes or regex to match color name
                const colorkeywords = [ "aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow" ];
                if (colorkeywords.includes(shapeColor.toLowerCase()) || (/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(shapeColor))) {
                    return true;
                } else {
                    return "Please enter valid color keywords or hexadecimal colors code.";
                }
            }) ],

        ];
        // Created a function to initialize app
        async function init() {
            try {
                const answer = await inquirer
                    .prompt(
                        questions.map((question) => {
                            return {
                                type: question[ 0 ],
                                name: question[ 1 ],
                                message: question[ 2 ],
                                default: question[ 3 ],
                                when: question[ 4 ],
                                choices: question[ 5 ],
                                validate: question[ 6 ],
                            }
                        }));

                writeToFile('./examples/logo.svg', createSVG(answer));
            } catch (err) {
                console.log(err);
                console.log("Oops. Something went wrong during logo creation.");
            }
        }

        // Created a function to write README file
        async function writeToFile(fileName, data) {
            try {
                await fs.writeFile(fileName, data);
                console.log('Created logo.svg');

            } catch (err) {
                console.log(err);
                console.log('Oops. Something went wrong during file reading/writing.');
            }
        }


        init();



    }
}

module.exports = Logoinquirer;