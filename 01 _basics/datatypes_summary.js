// # primitive datatypes
// Types : String,Number,Boolean,Null,Undefined,symbol,bigInt

//dynamic typed lsngage
// You don’t have to declare the data type of a variable.



const score = 100
const isLoggedIn = false
let user;
const temOff = null


const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);

const bigNum = 11123455432123456543234567n  // n represents bigInt


//Refeence Types or (non primitive)
//Arrays,objects,functions


const heros = ["Batman", "Thor" , "Hulk"]
let object = {
    name: "Dhruv",
    age : "19",
}

const myFunction = function(){
    console.log("Hey");
    
}
myFunction()

// console.log(typeof bigNum);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof myFunction); // object function 



// ++++++++++++++++++++++++++++++++++++++++++++++++++
//stack (primitive) , Heap(Non - primitivr)

let myYoutubeName = "dhruvverma.com"

let anotherName = myYoutubeName.com
anotherName = "chai-peo-biscuit-khao"
// console.log(myYoutubeName);
// console.log(anotherName);

let userOne = {
    email : "jv1871@gamil.com",
    upi : "yjnud"
}
let userTwo = userOne
userTwo.email = "hitesh@gamil.com"
console.log(userOne.email);
console.log(userTwo.email);

