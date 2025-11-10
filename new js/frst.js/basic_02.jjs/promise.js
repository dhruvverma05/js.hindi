const promiseOne= new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log("promise is done");
        resolve()
         },1000)
})
promiseOne.then(function(){
    console.log("promise is consumed");
    
})
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai", email: "chai@123"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"dhruv", password : "123"})
        }else{
            reject('error: "something wrong"')
        }

    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=> console.log( "its ended"))


const promiseFive= new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"dhruv", password : "123"})
        }else{
            reject('error: "something wrong"')
        }

    },1000)
})
async function consumepromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);    
    }
}
consumepromiseFive()


