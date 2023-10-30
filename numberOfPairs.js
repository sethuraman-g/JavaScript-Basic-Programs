// 2. Find number of pairs in an array which has the sum provided as a parameter
// For example:// const arr1 = [4, 2, 5, 6, 8, 1]; const sum = 6;
// numberOfPairs(arr1, sum); Pais that matches are [4, 2] => 6. [5, 1] => 6.So output 2

const arrayElements = [4,2,5,6,8,1,"sethu",true,7,-1,-2];
let sum = 6;

function findNumberOfPairs(arrayElements,sum){
    let arrayValues = [];
    for(let i = 0; i < arrayElements.length; i++){
        if(typeof arrayElements[i] === "number"){
            arrayValues.push(arrayElements[i]);
        }
    }
    console.log(arrayValues);

    let count = 0, pairs=[];
    for(let i = 0 ; i < arrayValues.length; i++){
        for(let j = i + 1; j < arrayValues.length; j++){
            if(arrayValues[i] + arrayValues[j] == sum){
                pairs.push([arrayValues[i],arrayValues[j]])
                count++;
            }
        }
    }
    console.log(pairs);
    return count;
}
let output = findNumberOfPairs(arrayElements,sum);
console.log(output);