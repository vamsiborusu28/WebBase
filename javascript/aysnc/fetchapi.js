// Fetch API


/*
If Fetch is not working in vscode
try npm install node-fetch
then after installing fetch include below line at start of the file fetch API is used .
import fetch from "node-fetch";
*/


const url="https://restcountries.com/v2/all";

fetch(url)
.then((response) => {response.json()})
.then((data) => {console.log(data)})
.catch((error) => {console.log(error)});