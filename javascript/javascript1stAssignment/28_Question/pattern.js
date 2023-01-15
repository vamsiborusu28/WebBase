/*
Question
28. Write a program to print the given patterns using the loops-
	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
	   *
	   **
	   ***
	
	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
	   ***
	   ***
	   ***

	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
	     *
	    ***
 	   *****
*/

const LPattern= function(n){
    let str="";
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            str+='*';
        }
        str+='\n';
    }
    console.log(str);
}

const squarePattern=function(n){
    let str="";
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            str+='*';
        }
        str+='\n';
    }
    console.log(str);
}


const pyramidPattern=function(n){
    let str="";
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n-i;j++){
            str+=" ";
        }

        for(let j=1;j<=2*i-1;j++){
            str+='*';
        }
        str+='\n';
    }
    console.log(str);
}


LPattern(5);
squarePattern(5);
pyramidPattern(5);