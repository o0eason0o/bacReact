import baccarat from './baccarat.js';

class Shoe {

    constructor(shoeTitle){
        if(typeof shoeTitle !== 'string') {
            throw new Error('shoeTitle must be a string');
        }

        this.shoeTitle = shoeTitle;
        this.hands = [];
        // player banker tie
        this.p = 0;
        this.b = 0;
        this.t = 0;
        // anchor win lose
        this.anchorBanker = true;
        this.aWin = 0;
        this.aLose = 0;

    }

    calculate(hand) {
        let regex = /[\s\-]/gi,
            parsedHand = hand.slice().replace(regex, ''),
            result = baccarat.calculate(parsedHand),
            winner = result.slice(-1);
        this.hands.push(hand);

        if(winner === 'B'){
            // banker win count
            this.b += 1;
            // anchor count
            if(this.anchorBanker) {
                this.aWin += 1;
            } else {
                this.aLose += 1;
            }
        } else if (winner === 'P'){
            // player win count
            this.p += 1;
            // anchor count
            if(this.anchorBanker) {
                this.aLose += 1;
            } else {
                this.aWin += 1;
            }
        } else {
            this.t += 1;
        }

        if(parsedHand.length === 5) {
            // console.log(`hand ${parsedHand}. anchor switch to ${this.anchorBanker? "B" : "P"}`);
            this.anchorBanker = !this.anchorBanker;
        }

        return result;
    };

    stats(){
        const hands = this.hands.length,
            p = this.p,
            b = this.b,
            t = this.t,
            aWin = this.aWin,
            aLose = this.aLose,
            result = {
                hands,
                p,
                pRate: percent(p, hands),
                b,
                bRate: percent(b, hands),
                t,
                tRate: percent(t, hands),
                aWin,
                aWinRate: percent(aWin, hands),
                aLose,
                aLoseRate: percent(aLose, hands)
            };
        return result;
    }

}

function percent(count, total){
    return ((count/total) * 100).toFixed(2) + '%';
}

export default Shoe;