// const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")
// console.log(descriptor);

// // console.log(Math.PI);

const chai = {
    name : "gingerChai",
    price : 234,
    isAvailable : true,

    orderME : function(){
        console.log("nhi bani chai");
        
    }

}
console.log(Object.getOwnPropertyDescriptor(chai , "name"));


Object.defineProperty(chai , 'name' , {
    // writable : false ,
    enumerable : false,
})
console.log(Object.getOwnPropertyDescriptor(chai , "name"));


for (let [key , value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
          console.log(`${value} : ${key}`);
    }
  
    
}
