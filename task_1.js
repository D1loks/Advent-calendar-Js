const fs = require('node:fs');

function calculateTotalDifference(set1, set2) {
  let twoNumbersList = [];
  let sorted_list1 = set1.sort()
  let sorded_list2 = set2.sort()
  for(let i in sorted_list1){
    twoNumbersList.push(Math.abs(sorted_list1[i] - sorded_list2[i]))
    console.log(twoNumbersList)
  }
  let sum = 0
  for(let i in twoNumbersList){
    sum += twoNumbersList[i]
  }
  console.log(sum);
}

function Buben(set1, set2){
  let resultsList = []; 
  let bobic = 0; 

  while (set1.length > 0) {
    let count = 0; 
    for (let i in set2) { 
      if (set1[bobic] == set2[i]) { 
        count += 1; 
      }
    }
    let lil_peep = set1[bobic] * count; 
    resultsList.push(lil_peep); 

    set1.shift(); 
  }
  let sum = 0
  for(let i in resultsList){
    sum += resultsList[i]
  }
  console.log(sum);

}

try {
  const data = fs.readFileSync('./input1.txt', 'utf8');
  let [set1, set2] = data.split('\n').reduce((acc, el) => {
    const newNumbers = el.split(' ');
    if (newNumbers.length < 2) return acc;
    acc[0].push(parseInt(newNumbers[0]));
    acc[1].push(parseInt(newNumbers.pop()));
    return acc;
    }, [[], []]);

    calculateTotalDifference(set1, set2)
    Buben(set1, set2)
} catch (err) {
  console.error(err);
}
