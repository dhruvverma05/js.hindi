// Dates 
 
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log( typeof myDate);

// let myCreatedDate = new Date(2025,0,23)
// let myCreatedDate = new Date(2025,0,23,5,3)
let myCreatedDate = new Date("2025-01-23")
console.log(myCreatedDate.toLocaleString());


let myTimeStap = Date.now()
// console.log(myTimeStap);
// console.log(myCreatedDate.getTime());
// console.log( Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth() + 1);


newDate.tolocaleString('default',
    {  weekdays:"long"}
  
)
