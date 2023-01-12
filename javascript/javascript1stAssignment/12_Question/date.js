/*
Question

12. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm
*/

let date = new Date();


console.log(date.toISOString());
console.log(date.toLocaleString());

// YYYY-MM-DD HH:mm
let timeFormat = date.toISOString().slice(0, 19).replace('T', ' ');
console.log(timeFormat);

// DD-MM-YYYY HH:mm
let timeFormat2 = date.toLocaleString().slice(0, 19).replace(',', '');
console.log(timeFormat2);

// DD/MM/YYYY HH:mm
let timeFormat3 = date.toLocaleString().slice(0, 19).replace(',', '').replace('/' ,"-").replace(':', "-");
console.log(timeFormat3);


let timeformat4=date.toLocaleString().slice(0,19).replace(/\/g/,"-").replace(",",'').replace(/:g/,'-');
console.log(timeformat4);



/*
Why is the '/g' required when using string replace in JavaScript?

e.g. var myString = myString.replace(/%0D%0A/g,"<br />");

It isn't required, but by default string.replace in JavaScript will only replace the first matching value it finds. Adding the /g will mean that all of the matching values are replaced.

The "g" that you are talking about at the end of your regular expression is called a "modifier". The "g" represents the "global modifier". This means that your replace will replace all copies of the matched string with the replacement string you provide.

g - Global replace. Replace all instances of the matched string in the provided text.
i - Case insensitive replace. Replace all instances of the matched string, ignoring differences in case.
m - Multi-line replace. The regular expression should be tested for matches over multiple lines.

Example

//Replace the first lowercase t we find with X
'This is sparta!'.replace(/t/,'X');
//result: 'This is sparXa!'

//Replace the first letter t (upper or lower) with X
'This is sparta!'.replace(/t/i, 'X');
//result: 'Xhis is sparta!'

//Replace all the Ts in the text (upper or lower) with X
'This is sparta!'.replace(/t/gi, 'X' );
//result: 'Xhis is sparXa!

*/


/*

Output

2023-01-12T07:19:51.904Z for ISOString

12/01/2023, 12:49:51   for LocaleString

 - YYYY-MM-DD HH:mm
2023-01-12 07:19:51

- DD-MM-YYYY HH:mm
12/01/2023 12:49:5

12-01/2023 12-49:5

- DD/MM/YYYY HH:mm
12/01/2023 12:49:5

*/