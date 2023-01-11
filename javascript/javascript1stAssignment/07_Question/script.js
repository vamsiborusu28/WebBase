/*
Question

07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

*/

let educomps=["Ineuron","LearnCodeOnline","pw skills","GeekForGeeks","pw skills"];

const firstIndex=educomps.indexOf("pw skills");
console.log(firstIndex);


const pos=educomps.lastIndexOf("pw skills");
console.log(pos);



/*
Output 

2
4
*/