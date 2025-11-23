// var cm = 300
let am = 300



if (true) {
    let am = 10 
    const bm = 30
    // var cm = 40
    cm = 40

}


// console.log(am);
// console.log(bm);
// console.log(cm);



function one(){
    const username = "dhruv"

    function Two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);     // closure
    Two()
}
// one()



//  ++++++++++++++++++++++++++++interesting +++++++++

console.log(addOne(5))
function addOne(num){
    return num + 1
}



// const addTwo = function(num){    // expression when using variable for function
//     return num + 2
// }
// addTwo(6)


addTwo(6)
const addTwo = function(num){   
    return num + 2                         // error 
}
