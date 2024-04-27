class Shapes {
    constructor() {

        this.height = '';
        this.weight = '';
    }

    render() {
        throw new Error(`Child class must implement render() method.`);

    }


}

module.exports = Shapes;