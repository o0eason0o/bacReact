class Baccarat {

    constructor(){}

    calculate (str){
        let numbs = str.split('');
        return true;
    }

}

function calculate (str){
    const regex = /\s/gi,
        arr = str.replace(regex, '0').split('').map(x=> parseInt(x)),
        length = arr.length;
    let b, p;

    // length check
    if(length < 3 || length > 6) {
        throw new Error('length should be 4 - 6');
    }

    // TODO: input order mechanism
   



    return arr;
}


export default {calculate};


