// 4. Merge two arrays and then sort the numbers from lowest to highest
// Input
// const ar1 = [1, 4, 6];
// const ar2 = [2, 5, 3];
// Output: [1, 2, 3, 4, 5, 6];

const array1 = [1,4,6];
const array2 = [2,5,3];

function getSortedArray(array1,array2){
    let resultantArray = array1.concat(array2);
    console.log(resultantArray);

    if(resultantArray.includes(true,false))
    {
        return `String and Boolean values are not accepted`;
    }
    else
    {
    let sortedArray = resultantArray.sort(function(a,b){
        return a - b;
    })
    return sortedArray;
    }
}

const mergedAndSortedArray = getSortedArray(array1,array2);
console.log(mergedAndSortedArray);