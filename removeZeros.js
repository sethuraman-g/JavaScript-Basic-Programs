// 5. Remove zeros either trailing / leading
// Input - "000000123423423000"
// removeZeros(input, "leading") // output 123423423000
// removeZeros(input, "trailing") // output 000000123423423

let input = "00000012342343000";
let condition = "leading";

function toRemoveZeros(input,condition){
    let result = 0;

    if(condition == "leading"){
        result = parseInt(input);
    }
    else if(condition == "trailing"){
        let newInput = input.split("").reverse().join("");
        let extractedInput = parseInt(newInput);
        result = extractedInput.toString().split("").reverse().join("");
    }
    return result;
}
const output = toRemoveZeros(input,condition);
console.log(output);

