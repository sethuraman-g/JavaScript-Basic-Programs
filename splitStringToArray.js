// 2. Split an string into an array
// For example
// stringSplit(“numenticaui”, 2);
// Output [“nu”, “me”, “nt”, “ic”, “au”, “i];

let givenString = "numenticaui";
console.log(givenString);

let splitNumber = 2;

function getSplitStringToArray(givenString,splitNumber){
    let array = [];

    if(typeof(givenString) != "string")
    {
        return `The given string is invalid!!! Please enter a string type input`;
    }

    for(let i = 0; i < givenString.length; i += splitNumber) //(i = 2,4,6,8,10,...)
    {   //slice method used to get particular value.
        array.push(givenString.slice(i, i + splitNumber));  //(0,2) (2,4) (4,6) (6,8) (8,10)
    }
    return array;
}
const output = getSplitStringToArray(givenString,splitNumber);
console.log(output);