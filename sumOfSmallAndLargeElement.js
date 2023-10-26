// 2. Return the sum of smallest and largest number in an array
// Example: [45, 2, 25, 11, 16]
// Here the output will be 2(smallest) + 45 (largest)
// Output will be 47

let arrayElements = [45,2,25,11,16,true,false,"sethu"];

function findSumOfSmallestAndLargestNumber(arrayElements){
    let extractedArray = [];
    for(let i = 0; i < arrayElements.length; i++){
        if(typeof arrayElements[i] === "number"){
            extractedArray.push(arrayElements[i]);
        }
    } 
    extractedArray.sort((a,b) => (a - b));
    console.log(extractedArray);
   
    let smallestNumber = extractedArray[0];
    let largestNumber = extractedArray[extractedArray.length-1];

    let sum = smallestNumber + largestNumber;
    return sum;
}

const output = findSumOfSmallestAndLargestNumber(arrayElements);
console.log(output);