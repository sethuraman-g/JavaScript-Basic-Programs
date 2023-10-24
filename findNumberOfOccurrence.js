// 1. Write a javascript function to return number of occurance of 
//a particular word in a sentence
// For example:
// findNumberOfOccurance(“be kind whenever possible. kindness is what matters”, “kind”);
// Will return an output of 2 ( 2 occurance of kind in the string )

let string = "be kind whenever possible. kindness is what matters".split(" ");
let findWord = "kind";

function findNumberOfOccurance(string,findWord){
    let regex = new RegExp(findWord);
    let wordCount = 0;
    for(let i = 0; i < string.length; i++)
    {
        if(regex.test(string[i])) //test() used to match particular string in given string.
        {
            wordCount++;
        }
    }
    return wordCount;
}
const output = findNumberOfOccurance(string,findWord);
console.log(output);
