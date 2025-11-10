// singleton

//object literals
const mySmb=Symbol("key1")

const jsUser= {
    
    name:"Dhruv",
    [mySmb]:"mykey1",
    age: 18,                // non singleton object
    location:"Rampur",
    email:"dv1871889",
    isLoggedIn:false




}

console.log(jsUser.email);
console.log(mySmb);
jsUser.email ="dv1871889"
 //Object.freeze(jsUser) 
jsUser.email="hddfiiikskk"
console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello world");
    
}
jsUser.greetingTwo=function(){
    console.log(`hello js user, ${this.name}`);

}

console.log(jsUser.greeting);
console.log(jsUser.greetingTwo); 
