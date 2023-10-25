// 1. Format phone mobileNumber
// Convert a ten digit mobileNumber into US phone formatting
// For example: 9840164723 to "(984)016-473"
// Throw error if it's not a valid phone mobileNumber

let mobileNumber = 9840164723;

 function convert10DigitmobileNumberToUsmobileNumber(mobileNumber){
    let convert = mobileNumber.toString();

    let result = ""; 
        if(typeof mobileNumber === "number" && convert.length === 10){
           result += "(" + convert.substring(0,3) + ")" +
           convert.substring(3,6) + "-" +
           convert.substring(6,convert.length);
        }  
        else{
            return `It is not a valid phone mobileNumber`;
        } 
    return result;
}

 const output = convert10DigitmobileNumberToUsmobileNumber(mobileNumber);
 console.log(output);