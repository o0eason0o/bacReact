import * as fs from 'fs';



let fileName = process.cwd() + "/src/js/data1.txt",
    buffer = fs.readFileSync(fileName),
    data = buffer.toString(),
    // result = data.replace('test', 'hahaha!'),
    dataArray = data.split('\n\n\n'),
    finalJson;

// console.log('length ' + dataArray.length);

function parseData(dataSet, count){
    let result = {};
    for(let i = 0; i < count; i++){
        // console.log(i);
        let shoe = dataSet[i],
            hands = shoe.split('\n'),
            numb = hands.shift();
        console.log(hands);
        result[numb] = hands;
    }
    
    return result;
}

finalJson = parseData(dataArray, 10);

fs.appendFile('bacData.json', JSON.stringify(finalJson), function (err) {
    if (err) throw err;
    // console.log(Object.keys(finalJson).length);
    console.log('Saved!');
});


