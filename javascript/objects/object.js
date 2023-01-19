/*
Different ways to create objects in javascript
*/



// 1st way

const restuarent={

    name:'SpiceWings',
    owner:'Vamsi Borusu',
    established:'20/08/2024',
    menu:{
        staters:['Lemon Chicken','Chicken65','Dragon Chicken','Kabab'],
        mainCourse:['Chicken Biriyani','Mutton Biriyani','Butter Naans'],
        desserts:['Icecream','Juices','Milkshakes']
    },

    details(){
        console.log(`
 Hi Welcome to ${this.name} this is the place where ${this.owner}'s crew  serves to     fantastic dishes since ${this.established} in wide range of varieties from\n starters: ${this.menu.staters.join(" ")} \n to deserts: ${this.menu.desserts.join(" ")}
        `)
    }
}

restuarent.details();


//2nd Way using object Constructer
//Example const objectName=new Object();

const Account=new Object(
{
    name:'vamsiborusu',
    accNo:'UNIB70010234',
    balance:5000,
    IFSCCODE:'UNIB1704',
    branchName:'GVPT',
    trans:[],
    accountDetails(){
        console.log(
            `
            Account Holder Name:${this.name}\n
            Account NO:${this.accNo}\n
            IFSC Code:${this.IFSCCODE}\n
            Branch Name:${this.branchName}\n
            Account Balance:${this.balance}\n
            Transaction Details: ${this.trans.join(" ")}
            `
        );
    },

    deposit(amount){
        this.balance+=amount;
        this.trans.push(amount);
    },
    withdraw(amount){
        if(this.balance-amount<0){
            console.log('Cant Possible to WithDraw');
            return;
        }
        this.balance-=amount;
        this.trans.push(-amount);
    }

});

Account.accountDetails();


Account.deposit(100);
Account.deposit(300);
Account.deposit(500);
Account.deposit(350);

Account.withdraw(300);
Account.withdraw(100);
Account.withdraw(500);
Account.withdraw(350);


Account.accountDetails();



// Using a constructer function


function car(model,price,milege){
    this.model=model;
    this.price=price;
    this.milege=milege;
}

const tata=new car('Nexon',2000000,'20/ltr');
console.log(tata);

const suzuki=new car('Dzire',1000000,'30/ltr');
console.log(suzuki);