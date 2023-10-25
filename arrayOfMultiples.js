// 3. Array of Multiples
// Get the result of the array in multiples
// For example: [2, 5];
// Result: [2, 4, 6, 8, 10]

let givenArray = [2,5];

function ArrayOfMultiples(givenArray){
    let startNumber = givenArray[0];
    let numberRange = givenArray[1];
    let result = [];
    if(givenArray.includes(true,false) || givenArray.length > 2 || givenArray.length < 2){
        return `Please enter valid array elements`;
    }

    for(let i = 1; i <= numberRange; i++){
        if(startNumber < 1){
            return `The given array elements are invalid !!!`;
        }
        else if(givenArray.length == 2 && startNumber > 0){
          let eachMultiple =  startNumber * i; 
          result.push(eachMultiple); 
        }
    }
    return result;
}
const output = ArrayOfMultiples(givenArray);
console.log(output);