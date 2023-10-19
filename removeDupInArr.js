// 4. Function to remove duplicates in array
// Input: [-10, 29, 4, -4, 16, 29, -10]
// Output: [-10, 29, 4, -4, 16];

let arrayElements = [-10,29,4,-4,16,29,-10];


function removeDuplicates(arrayElements){

    let newArray = [];

    for(let i of arrayElements)
    {
       if(newArray.indexOf(i) == -1)
       {
        newArray.push(i);
       } 
    }

    console.log(newArray);
}

removeDuplicates(arrayElements);

