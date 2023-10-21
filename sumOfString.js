// 5. Calculate the sum of comma limited string
// Input: "1.5, 2, 44, 66, 12, 90"
// Output: 215.5

const givenString = "1.5,2,44,66,12,90";

function getSumOfString(givenString1){

    let splitString = givenString1.split(",");
    console.log(splitString);
    
    let sumOfString = splitString.reduce(function(acc,val){
        return parseFloat(acc) + parseFloat(val);
    });

    return sumOfString;
}

const resultSumOfString = getSumOfString(givenString);
console.log(resultSumOfString);

