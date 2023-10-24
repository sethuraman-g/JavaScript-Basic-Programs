// 7. Repeat string
// For example
// repeat(“arun”, 3);
// output “arunarunarun”;

let string = "arun";
let count = 3;

function repeatString(string,count){
    let repeatedString = "";

    if(typeof(string) != "string" || count < 1)
    {
        return `The given string is invalid !!!`;
    }
    
    for(let i = 0; i < count; i++)
    {
        repeatedString += string;
    }
    return repeatedString;
}
const output = repeatString(string,count);
console.log(output);