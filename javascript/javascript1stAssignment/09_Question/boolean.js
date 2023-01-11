/*

Question

09. Boolean value is either true or false.
    - Write three JavaScript statement example which provide truthy value.
    - Write three JavaScript statement example which provide falsy value.
*/


//True Values

console.log("Truthy Values\n---------------------\n")

if("Vamsi"){
    console.log("String acts as true value\n");
}
if(1){
    console.log("Numbers acts as true value\n");

}
let arr=[]
if(arr){
    console.log("array acts as true value\n");
}
if(true){
    console.log("boolean true acts as truth value\n");
}

//False Values
console.log("Falsy Values\n---------------------\n")
if(''!=true){
    console.log("empty string acts as falsy value\n");
}
if(0!=true){
    console.log("0 acts as falsy value\n");
}
if(null!=true){
    console.log("null act as falsy value\n");
}
if(undefined!=true){
    console.log("undefined acts as falsy value\n");
}



/*
Output

Truthy Values
---------------------

String acts as true value

Numbers acts as true value

array acts as true value

boolean true acts as truth value

Falsy Values
---------------------

empty string acts as falsy value

0 acts as falsy value

null act as falsy value

undefined acts as falsy value
*/