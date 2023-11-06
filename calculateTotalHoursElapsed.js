/*
3. Calculate total hours passed between two time
Accepted input format example "9:00 AM"
Ex: calculateTotalHoursElapsed("9:00 AM", "10:00 AM") //Output 1 Hour
Ex: calculateTotalHoursElapsed("9:00 AM", "3:12 PM") // Output 6 Hour 12 minutes
*/

let startingTime = "4:00 aM";
let endingTime = "5:00 aM";

function calculateTotalHoursElapsed(startingTime,endingTime){
    let startTime = startingTime.toString().replace(/\s/g,"");
    let meridiemTime1 = startTime.slice([startTime.length-2]).toUpperCase();
    
    let endTime = endingTime.toString().replace(/\s/g,"");
    let meridiemTime2 = endTime.slice([endTime.length-2]).toUpperCase();

    let splitStartingTime = startTime.slice(0,startTime.length-2).split(":");
    let splitEndingtime = endTime.slice(0,endingTime.length-2).split(":");

    let startingHour = parseInt(splitStartingTime[0]);
    let endingHour = parseInt(splitEndingtime[0]);
    let startingMinute = parseInt(splitStartingTime[1]);
    let endingMinute = parseInt(splitEndingtime[1]);
    
    let hour = 0, minute = 0;
    if(meridiemTime1 == "AM" && meridiemTime2 == "AM"){
        if(startingHour < endingHour){
            hour = endingHour - startingHour;
            minute = endingMinute + startingMinute;
        }else{
            hour = (startingHour - endingHour) + 12;
            minute = startingMinute + endingMinute;
        }
    }
    else if(meridiemTime1 == "PM" && meridiemTime2 == "PM"){
        if(startingHour < endingHour){
            hour = endingHour - startingHour;
            minute = endingMinute + startingMinute;
        }else{
            hour = (startingHour - endingHour) + 12;
            minute = startingMinute + endingMinute;
        }
    }
    else if(meridiemTime1 == "AM" && meridiemTime2 == "PM"){
        if(startingHour > endingHour){
            hour = (12 - startingHour) + endingHour;
            minute = startingMinute + endingMinute;
        } 
        else{
            hour = (12 + endingHour) - startingHour;
            minute = startingMinute + endingMinute;
        }
    }
    else if(meridiemTime1 == "PM" && meridiemTime2 == "AM"){
        if(startingHour > endingHour){
            hour = (12 - startingHour) + endingHour;
            minute = startingMinute + endingMinute;
        } 
        else{
            hour = (12 + endingHour) - startingHour;
            minute = startingMinute + endingMinute;
        }
    }

    let result = `${hour} Hour ${minute} Minutes`;
    return result;

}

console.log(calculateTotalHoursElapsed("9:00 AM","10:00 AM"));// 1 Hour 0 Minutes
console.log(calculateTotalHoursElapsed("9:00 AM", "3:12 PM"));// 6 Hour 12 Minutes
console.log(calculateTotalHoursElapsed("5:00 AM","10:10 PM"));// 17 Hour 10 Minutes
console.log(calculateTotalHoursElapsed("4:00 PM","1:10 AM"));// 9 Hour 10 Minutes
console.log(calculateTotalHoursElapsed("9:00 PM","3:12 PM")); // 18 Hour 12 Minutes

