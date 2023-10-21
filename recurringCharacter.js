// 1. Create a function add the special character "@" at the end of each recurring character "c" in a string
// Input: "cat in the bag"
// Output: "c@t in the bag"

let givenString = "cat in the bag";
let stringLength = givenString.length;
// console.log(stringLength);

function replaceCharacter(givenString){

    let resultString="";
    let characterArray = givenString.split("");
    console.log(characterArray);

    for(let i = 0; i < stringLength; i++)
    {
        if(givenString[i] == "c")
        {
          resultString += givenString[i];
          resultString += "@";
          i++; 
        }
        else 
        {
            resultString += givenString[i];
        }
    }
    return resultString;
}

const stringAfterAddingCharacter = replaceCharacter(givenString);
console.log(stringAfterAddingCharacter);