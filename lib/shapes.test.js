// Constructor Shapes is imported.
const Shapes = require('./shapes');

// A testing suite for Shapes is created.
describe('Shapes', () => {

    describe('render', () => {

        it('should return throw error ', () => {
            class Oval extends Shapes {
                constructor() {
                    super();
                }
            }
            expect(() => new Oval().render()).toThrow('Child class must implement render() method.');
        });

    });


});


