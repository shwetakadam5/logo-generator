const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor() {
        super();
    }

    render() {

        return 'Triangle';
    }

}

module.exports = Triangle;