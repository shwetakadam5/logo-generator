const Shapes = require('./shapes');

class Circle extends Shapes {
    constructor() {
        super();
    }

    render() {

        return 'circle';
    }

}

module.exports = Circle;