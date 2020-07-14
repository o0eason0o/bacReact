import chai from 'chai';
let expect = chai.expect;
import test from '../src/js/baccarat.js';

describe('baccrat', ()=>{
    it('test', ()=>{
        let result = test.calculate('12 34');
        console.log(result);
        
        // expect(test.calculate()).to.be.true;
    });
});