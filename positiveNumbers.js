// 1. Create a function that receives an array 
//and push the positive numbers to a new array and return this new array
// Input: [-14, 4, 5, -2, 76]
// Output: [4, 5, 76]


let array = [-14,4,5,-2,76];

var posNumInArr = [];

function positiveNumbers(array){
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] > 0)
        {
            posNumInArr.push(array[i]);
        }
    }
    return posNumInArr;
}

positiveNumbers(array);

console.log(posNumInArr);