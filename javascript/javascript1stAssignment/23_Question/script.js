/*
Question
23. Write a program to check that the number given by the user is a prime number or not.
*/

const isPrime=function(num){
    if(num<=1) return false;
    for(let i=2;i*i<=num;i++){
        if(num%i==0) return false;
        
    }
    return true;
}


console.log(isPrime(100));



console.log(isPrime(101));



console.log(isPrime(103));


console.log(isPrime(109));

console.log(isPrime(121));
