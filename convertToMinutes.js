// 2. Convert to minutes
// Users can give a time like 2:30 (which means 2 hours 30 minutes). 
// Write a function to convert this 2:30 to 150 minutes
// Try with different hours and minutes and cover all possible negative cases

let time = "2:30";

function convertToMinutes(time){
    let splitTime = time.toString().split(":");
    // console.log(splitTime); 
    let hours =parseInt(splitTime[0]);
    let minutes = parseInt(splitTime[1]);
    
    if(splitTime.length > 2 || typeof time != "string"){
        return `Invalid user input`;
    }
    else if(typeof hours === "number" && typeof minutes === "number"){
       let result = (hours * 60) + minutes;
       return `${result} minutes`;   
    } 
}
const output = convertToMinutes(time);
console.log(output);