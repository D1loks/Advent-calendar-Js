const fs = require('node:fs');

function isSafe(array) {
    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 0; i < array.length - 1; i++) {
        const diff = array[i + 1] - array[i];
        if (diff > 3 || diff < -3 || diff === 0) {
            return false; 
        }
        if (diff < 0) isIncreasing = false;
        if (diff > 0) isDecreasing = false;
    }

    return isIncreasing || isDecreasing;
}

function isSafeAfterRemovingOneLevel(array) {
    for (let i = 0; i < array.length; i++) {
        const modifiedArray = [...array.slice(0, i), ...array.slice(i + 1)];
        
        if (isSafe(modifiedArray)) {
            return true;
        }
    }
    return false;
}

function partOne(array) {
    let safeCount = 0;
    let safeArrays = [];
    let allDubesArrays = [];

    for (let tempArray of array) {
        const uniqueSet = new Set(tempArray);
        if (uniqueSet.size !== tempArray.length) {
            console.log(`Array ${tempArray} contains duplicates. Skipping.`);
            allDubesArrays.push(tempArray);
            continue;
        }

        if (isSafe(tempArray)) {
            console.log(`Array ${tempArray} is safe.`);
            safeCount += 1;
            safeArrays.push(tempArray);
        } else {
            console.log(`Array ${tempArray} is unsafe.`);
            allDubesArrays.push(tempArray);
        }
    }

    console.log(`Number of safe reports: ${safeCount}`);
    return { safeArrays, allDubesArrays };
}

function partTwo(array) {
    const { safeArrays, allDubesArrays } = partOne(array);

    let safeCountAfterRemoval = safeArrays.length;

    for (let tempArray of allDubesArrays) {
        if (isSafeAfterRemovingOneLevel(tempArray)) {
            console.log(`Array ${tempArray} is safe after removing one level.`);
            safeCountAfterRemoval += 1;
        } else {
            console.log(`Array ${tempArray} remains unsafe even after removal.`);
        }
    }

    console.log(`Total safe reports (after considering removal): ${safeCountAfterRemoval}`);
}

try {
    const data = fs.readFileSync('./input2.txt', 'utf8');
    const array = data
        .split('\n')
        .filter(line => line.trim() !== '')
        .map(line => line.split(' ').map(Number));

    partOne(array)
    //partTwo(array); 
} catch (err) {
    console.error(err);
}
