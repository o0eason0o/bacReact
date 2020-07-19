import baccarat from './baccarat.js';

class Shoe {

    constructor(shoeTitle){
        if(typeof shoeTitle !== 'string') {
            throw new Error('shoeTitle must be a string');
        }

        this.shoeTitle = shoeTitle;
        this.hands = [];
        this.p = 0;
        this.b = 0;
        this.t = 0;
    }

    calculate(hand) {
        let result = baccarat.calculate(hand),
            winner = result.slice(-1);

        this.hands.push(hand);
        if(winner === 'B'){
            this.b += 1;
        } else if (winner === 'P'){
            this.p += 1;
        } else {
            this.t += 1;
        }
        return result;
    };

    stats(){
        const hands = this.hands.length,
            p = this.p,
            b = this.b,
            t = this.t,
            result = {
                hands,
                p,
                pRate: percent(p, hands),
                b,
                bRate: percent(b, hands),
                t,
                tRate: percent(t, hands)
            };
        return result;
    }

}

function percent(count, total){
    return ((count/total) * 100).toFixed(2) + '%';
}

export default Shoe;