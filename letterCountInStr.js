// 5. Create a function to count the number of letters in a string
// Input: "numentica ui internship"
// Output: 21

let string = "numentica ui internship";
let count = 0;

function lettersCountInStr(string){

    for(let i = 0; i < string.length; i++)
    {
        if(string[i] != " ")
        {
            count++;
        }
    }
    
    console.log(count);
}

lettersCountInStr(string);