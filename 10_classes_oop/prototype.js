// let myName = "dhruv     "

// console.log(myName.truelength);


let myHeros = ['thor' , "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderpower : function(){
        console.log(`spider power ${this.spiderman}`);   
    }

}
Object.prototype.hitesh = function(){
    console.log("hitesh is present in all objects");
    
}
Array.prototype.heyhitesh = function(){
    console.log("hitesh say hello");
    
}
// heroPower.hitesh()
myHeros.hitesh()
myHeros.heyhitesh()
// heroPower.heyhitesh()



// Inheritence

const user = {
    name : "chai",
    email : "chai@google.com"
}


const teacher = {
    makeVideo : true ,

}
const teachingSupport = {
    isAvailable : false
}
const TASupport = {
    assignment : "js",
    fullTime : true,
    __proto__ :teachingSupport
}

teacher.__proto__ = user


// modern syntax

Object.setPrototypeOf(teachingSupport,teacher)

let anotherUserName = "chaiAurCode"
String.prototype.truelength = function() {
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}
anotherUserName.truelength()
"dhruv".truelength()