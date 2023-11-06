import usersDataBase from "./usersDataBase.json";


// copying the original database.
let allUsersDataBase = [...usersDataBase];


/* 1.Find the country which has the highest income. */
function getHighestIncomeCountry(allUsersDataBase){  

    let highestIncomeCountry = allUsersDataBase.sort((a, b) => b.income - a.income );

    return highestIncomeCountry[0].country +" has the highest income";

}


/* 2.Find the country which has the combined highest income. */
function getCombinedHighestIncomeCountry(allUsersDataBase){    
 
    let combinedIncome = {};

    allUsersDataBase.map(eachData => {
        if(combinedIncome[eachData.country]){
           combinedIncome[eachData.country] = combinedIncome[eachData.country] + eachData.income;
        }
        else{
            combinedIncome[eachData.country] = eachData.income;
        }
    })

    let highestIncome = 0;
    let countryName = "";

    for(value of Object.keys(combinedIncome)){
        if(combinedIncome[value] > highestIncome){
           highestIncome = combinedIncome[value];
           countryName = value; 
        }
    }
    return `${countryName} has the highest combined income`;
}


/*** 3.Get all the users info (complete info) who has the email which ends with .gov ***/
function toFindUsersInformationBasedOnMail(allUsersDataBase){

    let allUsersInformationBasedOnEmail = allUsersDataBase.filter(userEmail =>{
            return userEmail.email.toLowerCase().endsWith(".gov");
    })

    return allUsersInformationBasedOnEmail;

}


/*** 4.Find the country name which has the maximum combined income for Female ***/  
function toFindMaximumIncomeCombinedFemale(allUsersDataBase){
 
    let femaleCombinedIncome = allUsersDataBase.filter(userDataFemale => {
        return userDataFemale.gender.toLowerCase() === "female";
    })

    let femaleIncomeCountry = {};

    femaleCombinedIncome.map(eachUserFemale => {
        if(femaleIncomeCountry[eachUserFemale.country]){
            femaleIncomeCountry[eachUserFemale.country] = femaleIncomeCountry[eachUserFemale.country] + eachUserFemale.income;
        }
        else{
            femaleIncomeCountry[eachUserFemale.country] = eachUserFemale.income;
        }
    })

    let maximumIncome = 0;
    let highestFemaleIncomeCountry = "";

    for(value of Object.keys(femaleIncomeCountry)){
        if(femaleIncomeCountry[value] > maximumIncome){
            maximumIncome = femaleIncomeCountry[value];
            highestFemaleIncomeCountry = value; 
        }
    }
    return `${highestFemaleIncomeCountry} has the maximum combined income for female`;
}


//returning all functions by checking 
function toCheckAllFunction(allUsersDataBase){

    if(!allUsersDataBase.every((userData)=> 
        typeof userData.id === "number" && 
        typeof userData.first_name === "string" && 
        typeof userData.last_name === "string" && 
        typeof userData.country === "string" && 
        typeof userData.income === "number" && 
        typeof userData.email === "string" && 
        typeof userData.gender === "string" && 
        userData.income > 0))
    {
    console.log("Invalid Input");
    return false;
    }

        console.log(getHighestIncomeCountry(allUsersDataBase));
        console.log(getCombinedHighestIncomeCountry(allUsersDataBase));
        console.log(toFindUsersInformationBasedOnMail(allUsersDataBase));
        console.log(toFindMaximumIncomeCombinedFemale(allUsersDataBase));
    } 

toCheckAllFunction(allUsersDataBase);






//function to find paginated result

function getPaginatedResult(pageNumber,pageSize){

    let totalPage = Math.floor((allUsersDataBase.length)/pageSize); console.log(totalPage)

    if(pageNumber > totalPage || pageNumber <= 0 || pageSize <= 0){
    console.log("Invalid Page");
    }

    let startIndex = (pageNumber - 1) * pageSize;
    let endIndex = pageNumber * pageSize;

    result = allUsersDataBase.slice(startIndex, endIndex);
    return result;
  
}

console.log(getPaginatedResult(1,20));
 



