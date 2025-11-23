//for each

const coding = ["js" , "java" ,"cpp" , "rb"]

// coding.forEach( function(item){
//     console.log(item);
    
// })


// coding.forEach( (val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach( (item,index , arr) => {
    console.log(item,index , arr);
    
})

const myCoding = [
    {
languageName : "javascript",
languagefile : "js"
    },
    {
    languageName : "javascript",
    languagefile : "js"
    },
    {
    languageName : "javascript",
    languagefile : "js"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})