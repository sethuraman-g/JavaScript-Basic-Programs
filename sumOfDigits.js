// 2. Create a function to find the sum of digits in a number
// Input: 96472
// Output: 28 (9+6+4+7+2)

let num = 96472;
var rem,sum=0;

function sumOfDigits(num){

    if(num <= 0){
        console.log(`Please enter the positive number`);
    }

    while(num > 0)
    {
        rem = num % 10;
        sum = sum + rem;
        num = Math.floor(num / 10);   //Math.floor rounds the value.
    }
    return sum;
}

sumOfDigits(num);

console.log(sum);