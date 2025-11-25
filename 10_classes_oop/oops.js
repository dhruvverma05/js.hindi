// // const user = {
// //     username : "dhruv",
// //     loginCount : 8 ,
// //     signedIn : true,


//     getUserDetail :function(){
//         // console.log("got user detail");
//         console.log(this);
        
        
//     }
// }
// // console.log(user.username)
// // console.log(user.getUserDetail())
// console.log(this)



// const promiseOne = new Promise()  // new is a constructor function

function user(username , loginCount , isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}
const userOne = new user("Dhruv" , 12, true)
const userTwo = new user('chaiAurCode' , 11 , false)  
console.log(userOne);
console.log(userTwo);


// new keyword generate empty object 
// call a constructor function due to new
// which pack all argument in it and give it to you
// this keyword inject these
// and then you get what you want