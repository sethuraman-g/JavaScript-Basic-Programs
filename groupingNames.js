// 8. Group names according to the initial character
// Input: ["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"]
// Output
// ["arun", "aadhir", "aariketh"]
// ["balu"]
// ["cathy"]
// ["krish", "kamal"]

let arrayNames = ["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"];

function getNamesInOrder(arrayNames){
    let groups = {};

    let eachCharacter = arrayNames.map(element => element[0]);
    console.log(eachCharacter);

    let characterFilter  = eachCharacter.filter((element,id) => {
        return eachCharacter.indexOf(element) == id;
    });
    console.log(characterFilter);

    characterFilter.forEach(element => {
        groups[element] = [];
    })

    characterFilter.forEach(character => {
        for(let name of arrayNames)
        {
            if(name[0] == character)
            {
                groups[character].push(name);
            }
        }
    })
    return Object.values(groups);
}

const result = getNamesInOrder(arrayNames);
console.log(result);