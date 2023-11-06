// 2. Convert string to arithmetic operation
// For example accept a string like "10 + 20"
// and return output as 30
// b. "20 - 10" //Output 10
// Only string input is allowed which you have to parse and get a number output
// eval is not allowed

let inputString = "10 + 20";

function convertStringToArithmetic(inputString){
    let copiedString = inputString;

     inputString = inputString.replace(/\s/g,"");
     inputString = inputString.replace(/([-+*%/])/g," ");

     let splitString = inputString.split(" ");
     console.log(splitString);

     if(splitString.length == "2"){
        for(let operator of copiedString){
            if(operator === "+"){
                result = parseInt(splitString[0]) + parseInt(splitString[1]);
            }
            else if(operator === "-"){
                result = parseInt(splitString[0]) - parseInt(splitString[1]);
            }
            else if(operator === "*"){
                result = parseInt(splitString[0]) * parseInt(splitString[1]);
            }
            else if(operator === "/"){
                result = parseInt(splitString[0]) / parseInt(splitString[1]);
            }
            else if( operator === "%"){
                result = parseInt(splitString[0]) % parseInt(splitString[1]);
            }
         }
        return result;
     }
     else{
        return `This program is only to solve 1 arithmetic operation. Please enter only 2 operands and 1 operator`;
     }

}
const output = convertStringToArithmetic(inputString);
console.log(output);



