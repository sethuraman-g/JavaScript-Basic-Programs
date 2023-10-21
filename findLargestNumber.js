// 3. Find the largest number in an array according to input
// Input: findLargest([3, 4, 5, 6, 88], 2)
 // Note here the second argument is 2, so the function to find the second largest number in array
// findLargest([3, 4, 5, 6, 88], 4) 
// Note here the second argument is 4, so the function to find the fourth largest number in array

let array = [3,4,5,6,88];
let largestElement = parseInt(-2);

let arrayLength = array.length;

function findLargest(array,largestElement){

    let sortedArray = array.sort(function(a,b){
        return a - b;
    })
    
    if(largestElement > arrayLength || largestElement < 1)
    {
        return `The array contains only ${arrayLength} elements and negative values are not`;
    }
    else
    {
    let userLargestNumber = array[arrayLength-largestElement];
    return userLargestNumber;
    }

}

let resultArray = findLargest(array,largestElement);
console.log(resultArray);