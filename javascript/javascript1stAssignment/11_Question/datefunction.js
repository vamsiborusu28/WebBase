/**
 Question

 11. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.
 */

print = function(str,val){
   console.log(`${str} :${val}`);
   
}

const date=new Date();
const year=date.getFullYear();
const month=date.getMonth();
const todayDate=date.getDate();
const day=date.getDay();
const hours=date.getHours();
const minutes=date.getMinutes();


const pastdate=new Date('1/1/1970');
const presentdate=new Date();


print("Today's year",year);
print("Today's month",month);
print("Today Date",todayDate);
print("Today Day Number",day);
print("Today Hours till now ",hours);
print("Today Minutes till now",minutes);


print("seconds Passed since january 1st 1970",Math.round((presentdate-pastdate)/1000));


/*
Output

Today's year :2023
Today's month :0
Today Date :12
Today Day Number :4
Today Hours till now  :10
Today Minutes till now :14
seconds Passed since january 1st 1970 :1673518487

*/