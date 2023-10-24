// 3. Given an array, filter out the invalid items
// For example:
// filterOut([“a”, “d”, 1, true, “cd”, 33], “number”);
// Output [“a”, “d”, true, “cd”];
// filterOut([“a”, “d”, 1, true, “cd”, 33], “boolean”);
// Output [“a”, “d”, 1, “cd”, 33];
// filterOut([“a”, “d”, 1, true, “cd”, 33], “string”);
// Output [1, true, 33];


let array = ["a","d",1,true,"cd",33];
let removeType = "number";

function filterOut(array,removeType){
    let resultantArray = [];

    for(let i = 0; i < array.length; i++)
    {
        if(typeof(array[i]) !== removeType)
        {
            resultantArray.push(array[i]);
        }
    }
    return resultantArray;

}
const output = filterOut(array,removeType);
console.log(output);

