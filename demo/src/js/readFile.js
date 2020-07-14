import * as fs from 'fs';



let fileName = process.cwd() + "/src/js/data1.txt";
// fs.readFileSync(fileName, 'utf8', function (err, data) {
//     console.log('first logger');
    
//    if (err)
//       return console.log(err);
//    console.log('result read: ' + data);
// });
  
// console.log('readFile called'); 
var buffer = fs.readFileSync(fileName),
    data = buffer.toString(),
    result = data.replace('test', 'hahaha!');
console.log(result);