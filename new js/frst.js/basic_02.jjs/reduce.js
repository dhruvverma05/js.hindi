const myNum=[1,2,3]
const myTotal = myNum.reduce(function(acc,currbel){
    return acc + currbel
},0)
console.log(myTotal);
