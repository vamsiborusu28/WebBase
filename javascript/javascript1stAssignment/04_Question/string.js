let str="LakshmanaSaiVamsiBorusu";

let subStr1="vamsi";

let subStr2="Vamsi";

if(str.includes(subStr1)){
    console.log(`${subStr1} exits in the String ${str}\n`);
}
else{
    console.log(`${subStr1} not exits in the String ${str}\n`);
}


if(str.includes(subStr2)){
    console.log(`${subStr2} exits in the String ${str}\n`); 
}
else{
    console.log(`${subStr2} not exits in the String ${str}\n`);
}


/*
Output 

vamsi not exits in the String LakshmanaSaiVamsiBorusu

Vamsi exits in the String LakshmanaSaiVamsiBorusu
*/