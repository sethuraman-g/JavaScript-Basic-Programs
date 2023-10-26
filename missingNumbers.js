// 1. Find the missing number / numbers
// Example: Given an array of numbers in random order, find the missing numbers
// [7, 10, 12, 9] // output [8, 11] since these are the numbers missing in 7, 9, 10, 12
// Note: The numbers will be given as input in any order.

let givenArray = [7,10,12,9,"arun",true,"array",false];

function findMissingNumbersInArray(givenArray){
    let newArray = [];
    for(let i = 0; i < givenArray.length; i++){
        if(typeof givenArray[i] === "number"){
            newArray.push(givenArray[i]);
        }
    }

    newArray.sort((a,b) => (a - b));

    let missedNumbersInArray = [];
    let initialNumber = newArray[0];
    let finalNumber = newArray[newArray.length-1];

    for(let i = initialNumber; i <= finalNumber; i++){
        if(newArray.indexOf(i) === -1){
            missedNumbersInArray.push(i);
        }
    }
    return missedNumbersInArray;
}

const output = findMissingNumbersInArray(givenArray);
console.log(output);