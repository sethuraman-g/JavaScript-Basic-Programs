// 6. Find the sum of even numbers in an array. find all the even numbers in an array and add them
// For example
// findEvenSum([38, 3, 2, 8, 31])
// output -  48

let givenArray = [38,3,2,8,31];

function findSumOfEvenNumbersInAnArray(givenArray){
    let sum = 0;
    for(let i = 0; i < givenArray.length; i++)
    {
        if(givenArray[i] % 2 === 0)
        {
            sum += givenArray[i];
        }
        if(typeof(givenArray[i]) !== "number")
        {
            return `Please enter only numeric values...!`;
        }
    }
    return sum;
}

const output = findSumOfEvenNumbersInAnArray(givenArray);
console.log(output);