
const one=()=>{
    console.log('This is one');
}

const callback=()=>{
console.log("This is Callback Function");
}
const two=() => {
    
    console.log('This is Two');
    setTimeout(callback,0);

}

const three=() => {
    //setInterval(callback,500);
    console.log("This is Three");
}


one();
two();
three();