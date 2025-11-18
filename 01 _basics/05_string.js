const name = "dhruv"
const repoCount = 50 

// console.log(name + repoCount);

console.log(` Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Dhruv-dv-drv")
// console.log(gameName [2]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt("2"));
console.log(gameName.indexOf("v"));
console.log(gameName.slice(-2,4));

const sub = gameName.substring(0,4)
console.log(sub);

const newStringOne = "   dhruv   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https:/dhruv.com/dhruv%20"
console.log((url.replace('%20' , "-")));
console.log((url.includes('%20')));

console.log(gameName.split('-'));





