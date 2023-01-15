/**
 Question

 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

 */


 const calculator ={

    add(a,b){ return a+b;
    },
    subtract(a,b) {
        return a-b;
    },
    multiply(a,b){
        return a*b;
    },
    division(a,b){
        return a/b;
    }
 };
console.log(`
 Addition is :${calculator.add(100,200)}\n
 Subtarction is :${calculator.subtract(250,-450)}\n
 Multiplication is :${calculator.multiply(100,12)}\n
 Division is :${calculator.division(100,5)}\n
`) 




/*

Output


 Addition is :300

 Subtarction is :700

 Multiplication is :1200

 Division is :20

*/
