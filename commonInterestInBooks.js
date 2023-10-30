//   Find the common interest in books for the students
//   Output
//   Wings of Fire - [‘Arun’, ‘Balu’]
//   Chakra - [‘Arun’, ‘Ashok’]
//   War and Peace - [‘Ashok’, ‘Cathi’],
//   All about Cricket- [‘Balu’],
//   Against the wind- [‘Cathi’]
//   The Shining - [‘Cathi’, ‘Ashok’]
//   Find the user who shares most interest with other users.
//   For example: Ashok since he shares book interest with Arun, Cathi. And also Arun since he shares interest with Balu and Ashok


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
    let firstBook = students.filter((student)=>(student.books.includes("Wings of Fire")))
                            .map((student)=>(student.name));

    let secondBook = students.filter((student)=>(student.books.includes("Chakra")))
                             .map((student)=>(student.name));

    let thirdBook = students.filter((student)=>(student.books.includes("War and Peace")))
                            .map((student)=>(student.name));

    let fourthBook = students.filter((student)=>(student.books.includes("All about Cricket")))
                             .map((student)=>(student.name));

    let fifthBook = students.filter((student)=>(student.books.includes("Against the wind")))
                            .map((student)=>(student.name));

    let sixthBook = students.filter((student)=>(student.books.includes("The Shining")))
                            .map((student)=>(student.name));

    console.log("Wings of Fire",firstBook);
    console.log("Chakra",secondBook);
    console.log("War and Peace",thirdBook);
    console.log("All about Cricket",fourthBook);
    console.log("Against the wind",fifthBook);
    console.log("The Shining",sixthBook);
 }
 commonInterestInBooks(students);
