/**
 Question
 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
 */

 const countries=['India','Japan','New Zealand','Singapore','China'];
 if(countries.includes('Ethiopia')){
    console.log('Ethiopia');
 }
 else{
    countries.push('Ethiopia');
    console.log(countries);
 }
