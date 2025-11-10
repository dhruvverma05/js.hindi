//array specific loops
//for of loops

const arr=[1,2,3,4,6]

for (const num of arr) {
    // console.log(num);
    
    
}
const greetings= "hello world"
for (const greets of greetings) {
    // console.log(greets);
    
    
}
//maps
const map=new Map()
map.set('IN',"INDIA")
map.set('US',"AMERICA")
map.set('FR',"FRANCE")

console.log(map);

for (const[key,value]of map) {
    console.log(key);
    
    
}

const myObject={
    game1 :'nps',
    game2 :'freefire'
}

for (const [key,value] of myObject) {
    console.log(key);
        
}

