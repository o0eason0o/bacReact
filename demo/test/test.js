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