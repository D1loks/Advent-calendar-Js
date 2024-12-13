const fs = require('node:fs');

function firstPart(data) {
    const word = "XMAS";
    const reversedWord = "SAMX";
    const re = new RegExp(word, "g");
    const resersedRe = new RegExp(reversedWord, "g");

    let totalMatches = 0;
    
    totalMatches += matchData(data, re);
    totalMatches += matchData(data, resersedRe);
    totalMatches += matchData(w(data), re);
    totalMatches += matchData(w(data), resersedRe);
    console.log(totalMatches);

    boba(data);
}
function w(data){
    const formedData = data.split("\n");
    let newData = ""
    //console.log(formedData)
    for(let x = 0;x != formedData.length; x++){
        for(let y = 0; y != formedData[x].length; y++){
            newData += formedData[y][x];
        }
        newData += "\n"
    }
    return newData;
}

function matchData(data, redex) {
    const countOfMatchedData = data.match(redex).length;
    return countOfMatchedData;
}

function boba(data){
    const formedData = data.split("\n");
    for(let i = 0; i != formedData.length; i++){

    }
    console.log(formedData.length)
}

try {
    const data = fs.readFileSync('./input4.txt', 'utf8');
    firstPart(data);
} catch (err) {
    console.error(err);
}
