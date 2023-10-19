// 3. Interchange an array to the next item in array
// Input : interChange([10, 20, 30, 40, 50], 2)
// Output: [10, 30, 20, 40, 50]

let arrayEle = [10,20,30,40,50];
let arrIndex = 2;

function interChangeArrVal(arrayEle,arrIndex){
    let temp = arrayEle[arrIndex-1]; 
    
    if(arrIndex == arrayEle.length){         // 5 == 5 , if length & index are same
        arrayEle[arrIndex-1] = arrayEle[0];  //50 = 10
        arrayEle[0] = temp;                  //10 = 50
    }

    else{
        arrayEle[arrIndex-1] = arrayEle[arrIndex]; 
        arrayEle[arrIndex] = temp;                  
    } 
    return arrayEle;
}

interChangeArrVal(arrayEle,arrIndex);

console.log(arrayEle);

