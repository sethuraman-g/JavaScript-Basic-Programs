/*
Fetch api is used to fetch the data from the url by passing
the request to the server and it validates the link
and again sends the response to user.

fetch provides the promise 
Promise handle in 3ways. fulfilled,pending,rejected
promise should result in 2 ways. 1).then() = used to print the results.
                                 2).catch() = used to print the error.
*/

/*   fetch using promise  */
const url = "https://jsonplaceholder.typicode.com/todos/1";

fetch(url)

.then(response => response.json())
.then(data => console.log(data))

.catch(error => console.log("Invalid Link"));

/*   fetch using async and await  */
async function getData(){
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    return data;
}
const resultData = getData();
console.log(resultData);

