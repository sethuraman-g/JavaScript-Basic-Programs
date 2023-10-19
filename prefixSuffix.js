// 7. Add Suffix or Prefix
// Input: addSuffixOrPrefix("arun", "mr", "prefix")
// Should outupt : Mr Arun
// Input: addSuffixOrPrefix("charles", "jr", "suffix")
// Should outupt : Charles Jr

let str1 = "arun", str2 = "mr", insertCondition = "prefix";

function addSuffixOrPrefix(str1,str2,insertCondition){
    let str3 = "";

    let newStr1 = str1.charAt(0).toUpperCase()+""+ str1.substring(1).toLowerCase();
    let newStr2 = str2.charAt(0).toUpperCase()+""+ str2.substring(1).toLowerCase();
    // console.log(newStr1); //Arun
    // console.log(newStr2); //Mr

    if(insertCondition == "prefix")
    {
        str3 = newStr2 + " " + newStr1;
        console.log(str3);
    }
    else if(insertCondition == "suffix")
    {
        str3 = newStr1 + " " + newStr2;
        console.log(str3);
    }
    else
    {
        console.log(`Insert the valid "prefix" or "suffix" condition`);
    }

}

addSuffixOrPrefix(str1,str2,insertCondition);