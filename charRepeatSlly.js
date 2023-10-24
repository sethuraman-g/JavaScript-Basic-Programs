// 4. Find the characters that are repeating the most simaltaneously 
// For example:
// charRepeating(“traaainngfornewbie”);
// Output: a
// since a has more repeating simaltaneously

let givenString = 'traaainngfornewbie';

function characterRepeating(givenString){
    let currentCounter = 0;
    let currentCharacter,previousCharacter,previousCounter = 0;

    if(typeof givenString !== "string")
    {
        return `Invalid input`;
    }

   for(let i = 0; i < givenString.length; i++){

        if(givenString.charAt(i) === givenString.charAt(i+1)){
            currentCharacter = givenString.charAt(i);
            currentCounter++;
        }
        else
        {
           if(currentCounter == 0 && previousCounter == 0){
               continue;
           }
           else if(currentCounter >= previousCounter){
               previousCounter = currentCounter;
               previousCharacter = currentCharacter;
               currentCharacter = "";
               currentCounter = 0;      
           }
           else{
               continue;
           }          
        }  
   }
   return previousCharacter;
}

const output = characterRepeating(givenString);
console.log(output);