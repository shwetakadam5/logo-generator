const Shapes = require('./shapes');

class Square extends Shapes {
    constructor() {
        super();
    }

    render() {

        return 'Square';
    }

}

module.exports = Square;