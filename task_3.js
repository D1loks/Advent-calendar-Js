const fs = require('node:fs');

function firstPart(data){
    const re = /mul\(\d+,\s*\d+\)/g;
    let machedData = data.match(re);
    let mulList = getMultipliedMuls(machedData);
    let result = resultOfAddition(mulList);
    console.log(`First part result: ${result}`);
}

function resultOfAddition(mulList) {
    let resultOfAddition = 0
    for (let i = 0; i != mulList.length; i++){
        resultOfAddition += mulList[i];
    }
    return resultOfAddition;
}

function getMultipliedMuls(result){
    let mulList = [];
    for (let x = 0; x != result.length; x++){
        let firstParsedNumbers = result[x].match(/\d+/g);
        mulList.push(String(firstParsedNumbers[0]) * String(firstParsedNumbers[1]));
    }
    return mulList;
}

function secondPart(data){
    const re = /do\(\)|don't\(\)|mul\(\d+,\s*\d+\)/g;
    let machedData = data.match(re);
    //console.log(machedData);
    let skipMuls = false;
    let sortedMulsList = [];
    for(let i = 0;i != machedData.length; i++){
        if(machedData[i] != "do()" && machedData[i] != "don't()" && skipMuls == false){
            sortedMulsList.push(machedData[i]);
        } else if(machedData[i] == "do()" && skipMuls == true){
            skipMuls = false;
        } else if (machedData[i] == "don't()" && skipMuls == false){
            skipMuls = true;
        } else if (skipMuls == true){
            continue;
        }
    }
    let mulList = getMultipliedMuls(sortedMulsList);
    let result = resultOfAddition(mulList);
    console.log(`Second part result: ${result}`);
}

try {
    const data = fs.readFileSync('./input3.txt', 'utf8');
    firstPart(data);
    secondPart(data);
} catch (err) {
    console.error(err);
}