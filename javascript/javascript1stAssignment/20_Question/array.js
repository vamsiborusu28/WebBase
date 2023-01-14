/*
Question
20. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of your shopping cart if it has not been already added
    - remove 'Honey'
    - modify Tea to 'Green Tea'
*/

const shoppingCart=['Milk','Coffee','Tea','Honey'];

// Add 'Meat' in the begining of the cart

if(!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat');
    console.log(shoppingCart);
}

if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar');
    console.log(shoppingCart);
}

//  - remove 'Honey'
const pos=shoppingCart.indexOf('Honey');
if(pos!=-1){
    shoppingCart.splice(pos,1);
    console.log(shoppingCart);
}
const ind=shoppingCart.indexOf('Tea');
if(ind!=-1){
    shoppingCart[ind]='Green Tea';
    console.log(shoppingCart);
}



/**
 Output

 [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]
[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]
[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Sugar' ]
[ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]xs
 */