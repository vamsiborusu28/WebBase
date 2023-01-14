/*

Question

18. Write a program which tells the number of days in a month, now consider leap year.


*/

const isLeapYear=function(year){
    if(year%4===0 || (year%100===0 && year%400===0)) return true;
    return false;
}

const Days = function(month,year){
      if(isLeapYear(year) && month===2){
        console.log('29 days');
        return;
      }
      if(month===2) console.log('28 Days');
      else if(month<=7 && month%2){
        console.log('31 days');
      }
      else if(month<=7 && month%2===1){
        console.log('30 days');
      }
      else if(month>7 && month%2==0) console.log('31 days');
      else if(month>7 && month%2) console.log('30 days');
      return;
    }
const today=prompt("Enter Today Date in format yyyy-mm-dd");

const date=new Date(today);



const year=date.getFullYear();
const month=date.getMonth()+1;
console.log(year,month);
console.log(typeof(year),typeof(month));
Days(month,year);



/*
Output

2000-02-28

29

2022-08-20

31



*/