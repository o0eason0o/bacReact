import chai from 'chai';
let expect = chai.expect;
import baccarat from '../src/js/baccarat.js';
import * as mockData from '../src/js/bacData.json';

const data = mockData['default'];


describe('baccrat', ()=>{
    it('test', ()=>{
        let keys = Object.keys(data);
        for(let i = 0; i < keys.length; i++){
            let shoe = data[keys[i]];
            console.log(keys[i]);
            shoe.forEach((hand)=>{
                let cleanHand = hand.split(',').join(''),
                    cards = cleanHand.slice(0, -3),
                    result = cleanHand.slice(-3);

                expect(baccarat.calculate(cards)).to.equal(result);                
                console.log(cards + result);
            });


        }


        // let result = baccarat.calculate('35-35-');
        // console.log(result);
        
    });
});