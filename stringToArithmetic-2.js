


function calculateNumbersInString(manipulateString){

    let duplicateString=manipulateString.replace(/\s/g,"");

    manipulateString=duplicateString.replace(/([-+*%/])/g, ' ').split(' ');

    let calculateNumbers=[]

    for(let index of manipulateString){
        if(index !== ''){
            calculateNumbers.push(Number(index));
        }
    }
    let calculateNumberLength=calculateNumbers.length;

    let iterator1=0,iterator2=1;

    for(let index=0;index<duplicateString.length;index++){

          if(duplicateString[index] === '*'){
              if(duplicateString[index+1] === '*'){
                 calculateNumbers[iterator2]=calculateNumbers[iterator1++] ** calculateNumbers[iterator2++];
              }
              else{
                calculateNumbers[iterator2]=calculateNumbers[iterator1++] * calculateNumbers[iterator2++];
              } 
          }
          else if(duplicateString[index] === '+'){
              calculateNumbers[iterator2]=calculateNumbers[iterator1++]+calculateNumbers[iterator2++];
          }
          else if(duplicateString[index] === '-'){
              calculateNumbers[iterator2]=calculateNumbers[iterator1++]-calculateNumbers[iterator2++];
          }
          else if(duplicateString[index] === '/'){
              calculateNumbers[iterator2]=calculateNumbers[iterator1++] / calculateNumbers[iterator2++];
          }
         else if(duplicateString[index] === '%'){
               calculateNumbers[iterator2]=calculateNumbers[iterator1++] % calculateNumbers[iterator2++];
         } 
    }
    return calculateNumbers[calculateNumberLength-1];
}

const inputString="20*20+10/410* 4";
console.log(calculateNumbersInString(inputString));