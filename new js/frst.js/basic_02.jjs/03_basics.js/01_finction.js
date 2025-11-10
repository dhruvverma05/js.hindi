function sayMyName(){
    console.log("D");
    console.log("H");
    
    
}
//sayMyName()
//function addTwoNum(number1,number2){
  // console.log( number1+number2);
   
//}
 sayMyName()
 function addTwoNum(number1,number2){
    let result= number1+number2
    return result
 }


  const result=addTwoNum(3,4)
  //console.log('result: ',result);
  


function login(username){
    return `${username} just logged in `
}
//console.log(login("Dhruv"))
function calculateCartPrice(...num1){
  return num1
}
//console.log(calculateCartPrice(200,400,400));
const user ={
  usernmae:"dhruv",
  price:599
}
function handobj(anyobject){
  console.log(`user is ${anyobject.usernmae} and price is ${anyobject.price}`);
  
}
handobj({
  usernmae:"dhruv",
  price:399
})
