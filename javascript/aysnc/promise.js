'use script'

/*
javscript have a property called event loop,By using Event Loop we can execute remaing code in the application without waiting for a particular code to run.
But we want to wait  for the partiuclar process need to be completed then promises are used.

Promises 
Primise have two states resolved rejected
promise resolve reject async await

https://restcountries.com/v2/all
*/


const walterWhite=(role) =>{
    return `Hi This Walter White I'm a ${role}\n`;
}

const jessie = () =>{
    return `This is Jessie Pinkman Let's Cook\n`;
}

const heisenberg =() =>{
    return new Promise((resolve,reject) =>{
        setTimeout(resolve(`Transition from Walterwhite to Heisenberg`),3000);

    })
}


const BB =async () =>{
  
    console.log(walterWhite('Chemistry Teacher'));
    console.log( await heisenberg());
    console.log(jessie());
}

BB();