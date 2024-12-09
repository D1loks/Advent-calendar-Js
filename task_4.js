const fs = require('node:fs');

function firstPart(data){
    const re = /XMAS/g;

    let reversedData = reverse(data);
    let reversedHorizontalMachedData = reversedData.match(re);

    let verticalData = data.split('\n');

    for(let column = 0;column <= verticalData.)
    let horizontalMachedData = data.match(re);
    
    let count = 0;
    for(let i in horizontalMachedData){
        count += 1;
    }
    for(let i in reversedHorizontalMachedData){
        count += 1;
    }
    console.log(count);
    console.log(verticalData)
}

function reverse(s){
    return s.split("").reverse().join("");
}

try {
    const data = fs.readFileSync('./input4.txt', 'utf8');
    firstPart(data)
    
} catch (err) {
    console.error(err);
}