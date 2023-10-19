// 8. Remove spaces in a string
// Input: "    fox i  n the b ox      "
// Output: "foxinthebox"

let str = "    fox i  n the b ox      ";

function removeSpaceInStr(str){
    let resultString = "";

    for(let i = 0; i < str.length; i++)
    {
        if(str[i] !== " ")
        {
            resultString += str[i];
        }
    }
    console.log(resultString);
}

removeSpaceInStr(str);