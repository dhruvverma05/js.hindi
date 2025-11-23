// for of
const arr = [1,2,3,4,5,6]

for (const num of arr) {
    console.log(num);
    
}

const greeting = "hello world"

for (const greet of greeting) {
    console.log(` each char ${greet}`);
}

//maps

const map = new Map()
map.set('IN' , "INDIA")
map.set('USA' , "UNITED STATE OF AMERICA")
map.set('RUS' , "RUSSIA")
console.log(map);

for (const [key,value] of map) {
    console.log(key, value);
    
}

const myObj = {
    game1 : "nfs",
    game2 : "spiderman"
}
for (const [key] of myObj) {
    console.log(key);
    
}
