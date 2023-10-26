// 5. Group multiples from 1 to 10
// const arr1 = [34, 12, 10, 15, 7, 21, 81]
// Output = [{1: [34, 12, 10, 15, 7, 21, 81]}, { 2: [34, 12, 10]}, {3: [12, 15, 21, 81] }]

let arrayElements = [34,12,10,15,7,21,81, "true", "arun", false];

function groupMultiples(arrayElements){
    let multipleObjects = {};

    let numberArray = [];
    for (var i = 0; i < arrayElements.length; i++) {
        if (typeof arrayElements[i] === 'number') {
            numberArray.push(arrayElements[i]);
        }
    }
    console.log( numberArray);

    for(let i = 1; i <= 10; i++){
        let result = numberArray.filter(function(arrayElement){
            return arrayElement % i === 0;
        });
        multipleObjects[i] = result;   
    }

    return multipleObjects;
}

const output = groupMultiples(arrayElements);
console.log(output);