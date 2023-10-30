
const students = [
    {
      id: 0,
      name: "Arun",
      books: ["Wings of Fire", "Chakra"],
    },
    {
      id: 1,
      name: "Ashok",
      books: ["Chakra", "War and Peace", "The Shining"]
    },
    {
      id: 2,
      name: "Balu",
      books: ["Wings of Fire", "All about Cricket"],
    },
    {
      id: 3,
      name: "Cathi",
      books: ["Against the wind", "The Shining", "War and Peace"]
    },
  ];

  function commonInterestInBooks(students){

    let bookRecords = {};

    students.forEach(eachStudentRecord =>{

        eachStudentRecord.books.forEach(bookName => {

            if(bookRecords[bookName]){
              bookRecords[bookName].push(eachStudentRecord.name);    
            }
            else{
                bookRecords[bookName] = [eachStudentRecord.name];
            }
        })
    })

    return bookRecords;
  }

  console.log(commonInterestInBooks(students));





  
