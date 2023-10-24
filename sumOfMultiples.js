// 5. Find sum of multiples
// For example
// findSum(5, 5) should return 5+10+15+20+25=75
// findSum(8, 3) should return 8+16+24=48

let tableNumber = 8;
let tableRange = 3;

function findSumOfMultiples(tableNumber,tableRange){
    let sum = 0;

    if(tableNumber <= 0 || tableRange <= 0)
    {
        return `Invalid user inputs...`;
    }

    for(let i = 1; i <= tableRange; i++)
    {
        sum += tableNumber * i;
    }
    return sum;
}

const output = findSumOfMultiples(tableNumber,tableRange);
console.log(output);
