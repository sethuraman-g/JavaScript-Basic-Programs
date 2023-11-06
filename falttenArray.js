// 1. Write a function to flatten an array of arrays. 
//The resulting array should contain all the currentValueues of the input array, without nesting.
// flatten([1, [2, [3, [4, [5, 6]]]]]) &   Output => [1, 2, 3, 4, 5, 6]
// Avoid using Array.flatten or any other utility function that will help with flattening 
// the array directly. You can use map, filter or reduce or for loops

const arrayValues =[1,[2,[3,[4,[5,6]]]]];

function flattenArray(arrayValues){

    let flattenedArray = arrayValues.reduce((accumulator,currentValue) => 

        Array.isArray(currentValue) ? 

        accumulator.concat(flattenArray(currentValue)) :

        accumulator.concat(currentValue),[]) 
        
    return flattenedArray;
}

let output = flattenArray(arrayValues);
console.log(output);
