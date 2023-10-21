// 2. Replace any numbers in a string to a character passed to the function
// Input: replaceNumbers("arun@123", "d");
// Output: arun@ddd

let string = "arun@123";
let replacingCharacter = "d";

function replacingNumbersToCharacter(string,replacingCharacter){

    let resultantString = ""; 

    for(let i = 0; i < string.length; i++)
    {
        if(string[i] >= 0 && string[i] <= 9)
        {
          resultantString += replacingCharacter;
        } else {
            resultantString += string[i];
        }
    }
    return resultantString;
}

const result = replacingNumbersToCharacter(string,replacingCharacter);
console.log(result);