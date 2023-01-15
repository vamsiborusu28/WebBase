/**
 Question
 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

 */

 const isPrime=function(n){
    if(n==1) return false;
    for(let i=2;i*i<=n;i++){
        if(n%i==0){
            if(n%(n/i)==0) return false;
        }
    }
    return true;
 }


 for(let i=1;i<=100;i++){
    if(isPrime(i)) console.log(i);
    //console.log(`${i} : ${ isPrime(i) ? 'Prime':'Not prime' }\n `);
 }



 /*
 Output
 2
3
5
7
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97
 */