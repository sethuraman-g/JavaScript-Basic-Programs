// 6. Create a function to find the number that are common in the arrays passed
// Input: findCommon([1, 3, 33, 8], [76, 8, 13, 54])
// Output: [8]

let array1 = [1,3,33,8];
let array2 = [76,8,13,54];

function commonNumInArr(array1,array2){

    let uniqueEleIn2Arr = [];

    for(let i = 0; i < array1.length; i++)
    {
        for(let j = 0; j < array2.length; j++)
        {
            if(array1[i] == array2[j])
            {
                uniqueEleIn2Arr.push(array1[i]);
            }
        }
    }
    console.log(uniqueEleIn2Arr);
}

commonNumInArr(array1,array2);