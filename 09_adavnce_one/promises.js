// const promise =  setTimeout( function () {
// eOne  = new Promise(function (resolve , reject) {
//     //do an async task
//     //DB calls,cryptography,network
//     setTimeout(() => {
//         console.log("Async task is complete");
//         resolve()
//     },1000)
// })

// promiseOne.then( () => {
//     console.log('promise consumed');
    
// })


// new Promise (function( resolve , reject) {
//       setTimeout( () => {
//         console.log("Async task two");
//         resolve()
//     } ,1000)
// }).then(function () {
//     console.log("Async two completed");
    
// })


// const promiseThree =new Promise( function (resolve , reject) {
//     setTimeout( function () {
//         resolve({username : "dhruv" , age : "19"})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
    
// })
// const promiseFour =new Promise( function (resolve , reject) {
//     let error = false
//     if (!error) {
//         resolve({username : "dhruv" , pass : "1234" })
//     }else{
//         reject('something went wrong')
//     }
//     },1000)
// })
// promiseFour
// .then((user) => {
//     console.log((user));
//     return user.username
// })
// .then((username) => {
//     console.log(username);
// })
// .catch((error) =>{
//     console.log(error);
// }).finally(() =>{
//     console.log("finally the promise is either resolved aor rejected");
    
// })


const promiseFive = new Promise(function(resolve , reject) {
    setTimeout( () => {
        let error = false
          if (!error) {
        resolve({username : "dhruv" , pass : "1234" })
        }else{
        reject('something went wrong')
        }

      } ,1000)
    })

async function consume(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch  (error){
       console.log(error);
       
    }

}
consume()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data);
  
})
.catch((error) => console.log(error)
)
