/**
 Question

17. Write a program which tells the number of days in a month.
 */
const todayDate=prompt("Enter Date in this Format YYYY-MM-DD");
const date=new Date(todayDate);
const month=(date.getMonth())+1;

if(month==2) alert('28/29 Days');
else if(month<=7 && month%2) alert('31 days');
else if(month<=7 && month%2===0) alert('30 days');
else if(month>7 && month%2===0) alert('31 days');
else if(month>7 && month%2) alert('30 days');



/*
Output

2022-08-20

31 days


*/