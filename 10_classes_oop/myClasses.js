//ES6 

// class user {
//     constructor(username , email , password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName (){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("dhruv" , "ddgdjdjdidjdj" , "1234567")
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());


/// behind the scene

function user (username,email,password){
    this.username = username;
     this.email = email;
    this.password = password
}
user.prototype.encryptPassword = function(){
      return `${this.password}abc`
}
const tea = new user("tea" , "esdfgtrdfgtrf" , "12345678")
console.log(tea.encryptPassword());


