import chai from 'chai';
import baccarat from '../src/js/baccarat.js';
import * as mockData from '../src/js/bacData.json';

const data = mockData['default'],
    expect = chai.expect;

describe('baccrat', ()=>{
    it('should calculate hands and return result', ()=>{
        let keys = Object.keys(data);
        for(let i = 0; i < keys.length; i++){
            let eachShoe = data[keys[i]];
            console.log(`testing ${keys[i]}`);
            eachShoe.forEach((hand)=>{
                let cleanHand = hand.split(',').join(''),
                    cards = cleanHand.slice(0, -3),
                    result = cleanHand.slice(-3);
                // console.log(hand);
                expect(baccarat.calculate(cards)).to.equal(result);                
                // console.log(cards + result);
            });
        }
    });

});


import Shoe from '../src/js/shoe.js';

describe('shoe', ()=>{

    it('works', ()=>{
        let shoe = new Shoe('test');
        console.log(shoe.shoeTitle);
        shoe.calculate('0807');
        shoe.calculate('0807');
        shoe.calculate('0809');
        shoe.calculate('0808');


        // console.log(shoe.p/shoe.hands.length)
        // console.log(shoe.p);            
        // console.log(shoe.hands.length);            
        console.log(shoe.stats());

    });
});

describe('shoe', ()=>{
    it('show my states', ()=>{
        let keys = Object.keys(data);
        for(let i = 0; i < keys.length; i++){
            let eachShoe = data[keys[i]],
                game = new Shoe(keys[i]);

            console.log(`testing ${keys[i]}`);

            eachShoe.forEach((hand)=>{
                let cleanHand = hand.split(',').join(''),
                    cards = cleanHand.slice(0, -3),
                    result = cleanHand.slice(-3);

                game.calculate(cards);
            });
            // game.stats();
            console.log(game.stats());
        }
    });

});