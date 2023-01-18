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