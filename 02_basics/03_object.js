// singleton
// Object.create

// object literls

const mySym = Symbol("key1")


const jsuser = {
    name: "dhruv",
    "age" : 18,
    [mySym] : "mykeys1",
    emai: "dhrv@12444",
    isLoggedIn : false,
    lastLoggedIn : ["Monday" , "Saturday"]
}
console.log(jsuser["name"]);
console.log(jsuser["age"]);
console.log( typeof jsuser[mySym]);


jsuser.age = "19"
// Object.freeze(jsuser)
jsuser.age = "32"
console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello js user");
    
}
jsuser.greetingTwo = function(){
    console.log(`hello js user , ${this.age}`);
    
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());





