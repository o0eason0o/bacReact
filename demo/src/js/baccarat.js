class Baccarat {

    constructor(){}

    calculate (str){
        let numbs = str.split('');
        return true;
    }

}

function calculate (str){
    const regex = /[\s\-]/gi,
        arr = str.replace(regex, '0').split('').map(x=> parseInt(x)),
        length = arr.length;
    let b, p,
        pBase = arr[0] + arr[1],
        result;

    // length check
    if(length < 4 || length > 6) {
        throw new Error('length should be 4 - 6');
    }

    // TODO: input order mechanism
    if(length === 4) {
        p = pBase;
        b = arr[2] + arr[3];
    } else if (length === 6) {
        p = pBase + arr[2];
        b = arr[3] + arr[4] + arr[5];
    } else {
        // five cards
        if(pBase < 6) {
            p = pBase + arr[2];
            b = arr[3] + arr[4];
        } else {
            p = pBase;
            b = arr[2] + arr[3] + arr[4]; 
        }
    }

    console.log(p);
    console.log(b);
    result = ''+p+b;
    result += p > b ? 'P' : 'B';
    return result;
}


export default {calculate};


