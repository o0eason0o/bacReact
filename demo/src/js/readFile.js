import * as fs from 'fs';

let fileName = process.cwd() + "/src/js/data1.txt",
    buffer = fs.readFileSync(fileName),
    data = buffer.toString(),
    dataArray = data.split('\n\n\n'),
    finalJson;
// console.log('length ' + dataArray.length);

function parseData(dataSet, count){
    let result = {},
        counter = count || dataSet.length;
    for(let i = 0; i < counter; i++){
        let shoe = dataSet[i],
            hands = shoe.split('\n'),
            numb = hands.shift();
        result[numb] = hands;
    }
    return result;
}

finalJson = parseData(dataArray, 3);
// finalJson = parseData(dataArray);

fs.appendFile('bacData.json', JSON.stringify(finalJson), function (err) {
    if (err) throw err;
    console.log('Saved!');
});


