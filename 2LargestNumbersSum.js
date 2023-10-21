// 7. Return the sum of two largest numbers
// Input: [32, 66, 80, 120, 45]
// Output: 200

let givenArray = [32,66,80,120,45];
let givenArrayLength = givenArray.length;

function getSumOfTwoLargestNumbers(givenArray){

    if(givenArrayLength < 2)
    {
        return `Enter more than 2 elements`;
    }

    let sortedArray = givenArray.sort(function(a,b){
        return a - b;
    });

    let sumOf2LargestNumbers = sortedArray[givenArrayLength-1] + sortedArray[givenArrayLength-2];
    return sumOf2LargestNumbers;

}

const sumOf2Largest = getSumOfTwoLargestNumbers(givenArray);
console.log(sumOf2Largest);