/**
 * function calculate: calculate each hand and return winner
 * @param {String} hands string of each hand, length should be 6
 *                       player: first 3, banker: last 3
 *                       exp: '015413', '10-45-', '2580', '07224'
 */

function calculate (hands){
    const regex = /[\s\-]/gi,
        arr = hands.replace(regex, '').split('').map(x=> parseInt(x)),
        length = arr.length;
    let b, p, bTotal, pTotal,
        pStart = arr[0] + arr[1],
        pBase = parseInt(pStart.toString().slice(-1)),
        result;
    // length check
    if(length < 4 || length > 6) {
        throw new Error('length should be 4 - 6');
    }

    // TODO: input order mechanism
    if(length === 4) {
        pTotal = pBase;
        bTotal = arr[2] + arr[3];
    } else if (length === 6) {
        pTotal = pBase + arr[2];
        bTotal = arr[3] + arr[4] + arr[5];
    } else {
        // five cards
        if(pBase < 6) {
            pTotal = pBase + arr[2];
            bTotal = arr[3] + arr[4];
        } else {
            pTotal = pBase;
            bTotal = arr[2] + arr[3] + arr[4]; 
        }
    }

    p = pTotal.toString().slice(-1);
    b = bTotal.toString().slice(-1);

    // console.log(p);
    // console.log(b);
    result = p + b;
    result += p > b ? 'P' : p === b ? 'T' : 'B';
    return result;
}


export default {calculate};


