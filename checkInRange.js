// 4. Check if the number is in range
// For example: checkInRange([1, 10], 4) // true since 4 is in between 1 and 10
// checkInRange([10, 100], 8) // true false 8 is not in between 10 and 100

let givenArray = [1,10];
let inBetweenValue = 4;

function checkInRange(givenArray,inBetweenValue){
    givenArray.sort(function(a,b){
        return a - b;
    })
    let startingRange = givenArray[0];
    let endingRange = givenArray[givenArray.length-1];

    if(givenArray.length < 2 || givenArray.length > 2 || givenArray.includes(true,false)){
        return `Invalid array elements. Please enter only 2 elements`;
    }

    for(let i = startingRange; i <= endingRange; i++) {
        if(i == inBetweenValue){
            return `TRUE !!! Since ${inBetweenValue} is in between ${startingRange} and ${endingRange}`;
        }
        else if(inBetweenValue > endingRange || inBetweenValue < startingRange) {
            return `FALSE !!! ${inBetweenValue} is not in between ${startingRange} and ${endingRange}`;
        }
    }
}
const output = checkInRange(givenArray,inBetweenValue);
console.log(output);