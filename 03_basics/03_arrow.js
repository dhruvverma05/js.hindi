const user = {
    username : "dhruv",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
        
    }
}

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function one(){
//     let username = "dhruv"
//     console.log(this.username); 
// }
// one()


const chai = ()=>{
    let username = "dhruv"
    console.log(this); 
}
// chai()



// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5,7))


// const addTwo = (num1,num2) =>  (num1 + num2)
const addTwo = (num1,num2) => ({
    username: "dhruv"
})

console.log(addTwo(5,7))