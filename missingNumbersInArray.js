// 6. Find the missing numbers in an array
// Input: [68, 71, 69, 73]
// Output: missing numbers in range [68-73] is 70, 72

let array = [68,71,69,73];

function getMissingNumbers(array){

    array.sort();
    let resultant = [];

    let startingRange = array[0] , finalRange = array[array.length-1];

    for(let i = startingRange; i <= finalRange; i++)
    {
        if(array.indexOf(i) == -1)  //if the value is not found,it pushes to result array
        {
           resultant.push(i); 
        }
    }
    return resultant;
}

let result = getMissingNumbers(array);
console.log(result);
