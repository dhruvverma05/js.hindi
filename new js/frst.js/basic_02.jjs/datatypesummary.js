// primitve
// 7 types: string,number,boolean,null,undefined,symbol,BigInt.

const scoreValue= 100
const isLoggedIn= false
const outsiders= null;
let userEmail;
const id= Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId);



// reference type(non primitive):
// array,objects,functions.
const heros=["Dhruv","Ajay"]
 let myObj = {
    name:"hitesh",
    age :22,
}
const myFunction = function() {
    console.log("hello world");  
}
console.log(typeof myFunction );

