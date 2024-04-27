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
            [ "input", "displayText", "Enter the text:", "", true, [] ],

        ];
        // Created a function to initialize app
        async function init() {

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


        }

        // Created a function to write README file
        async function writeToFile(fileName, data) {
            try {
                await fs.writeFile(fileName, data);
                console.log('Created logo.svg');

            } catch (err) {
                console.log(err);
                console.log('Oops. Something went wrong.');
            }
        }


        init();



    }
}

module.exports = Logoinquirer;