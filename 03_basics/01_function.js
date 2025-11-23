

function sayMyname(){
    console.log("h");
    console.log("i");
    console.log("j");
}
// sayMyname()


// function addTwoNum(number1,number2){ // parameters
//    console.log( number1+number2);
   
// }
function addTwoNum(number1,number2){ // parameters
//    let result = ( number1+number2);
//     return result
        return number1 + number2
}

const result = addTwoNum(3, 4) // arguments
// console.log("result " , result);


function loginUserMessage(username = "mamu"){
    if(username === undefined){
        console.log("PLEASE ENTER USER NAME")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("dhruv"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,800,6097,50000000))


function calculateCartPrice(val1,val2,...num2){
    return num2
}
console.log(calculateCartPrice(200,400,800,6097,50000000))

const user= {
    username: "dhruv",
    price : "99999999999"
}

function hadleobject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// hadleobject(user)

// handleobject({
//     username : "dhruv",
//     price : "2"
// })

const myArr = [200,400,100,600]

function returnSecond(getArr){
    return getArr[3]
}
console.log(returnSecond(myArr));
console.log(returnSecond([200,400,100,600]));
