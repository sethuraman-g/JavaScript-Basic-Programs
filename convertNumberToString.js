// 8. Convert number to strings
// for example: convertNumberToString(1)
// output “one”
// convertNumberToString(98)
// output “nineeight”

let number = 98;
let numberToString = number.toString().split("");//converts the number to string and splits
console.log(numberToString);

let array = ["zero","one","two","three","four","five","six","seven","eight","nine"];

function convertNumberToString(number){
    let result = "";
    if(number < 0 || typeof(number) == "boolean")
    {
        return `Boolean & Negative values are invalid !!!`;
    }

    for(let i = 0 ; i < numberToString.length; i++)
    {
        let eachNumber = numberToString[i];
        result += array[eachNumber];    
    }
    return result;
}

const output = convertNumberToString(number);
console.log(output);

