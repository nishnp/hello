const assert = require('assert');
const emission = require('../emmisions');
describe('Checking validations for different params', () => {
    it('Passing output in Capital Letters', () => {
        let shiva = emission.checkValidations("medium-diesel-car",15,"km","KG")
        assert.equal(shiva, false);
    });

    it('Passing proper values', () => {
        let shiva = emission.checkValidations("medium-diesel-car",15,"km","g")
        assert.equal(shiva, true);
    });

    it('Passing unit of distance in Capital Letters', () => {
        let shiva = emission.checkValidations("medium-diesel-car",15,"KM","g")
        assert.equal(shiva, false);
    });

    it('Passing unit of distance and output in Capital Letters', () => {
        let shiva = emission.checkValidations("medium-diesel-car",15,"KM","G")
        assert.equal(shiva, false);
    });

});

