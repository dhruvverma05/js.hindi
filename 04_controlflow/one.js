// if statement 
// const isUserLoggedIn = true

// const temperature = 40

// if (temperature < 50){
//     console.log("less than 50");    
// }else{
//     console.log("greater than 50");
// }

// const score = 200

// if ( score > 100){
//     const power = "fly"
//     console.log(`user power ${power}`);
    
// }


// const balance = 1000

// if ( balance > 500) console.log("test");   // implicit scope

// if (balance < 500){
//     console.log("less than");
// }else if(balance < 750 ){
//     console.log("less than 750");
// }else if(balance < 900 ){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("allowed to buy courses");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
    
}

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

// console.log(val1);




//ternary operator
// condition ? true:false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80 ") : console.log("more than 80");
;


