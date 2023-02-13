


const newPromise=new Promise((resolve,reject) =>{
    setTimeout( () =>{const countries=['India'];

    if(countries.length>0){
        resolve('Task Completed');
    }
    else{
        reject('Task is Not Completed');
    }
    },3000);
}  
);


newPromise.then((result) =>{
    console.log(result);
}).catch((error) => {
    console.log(error);
});
