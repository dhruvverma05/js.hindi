//for eaach loops
// const looping=["js","ruby","cpp","py","java"]
// coding.forEach(  (item)=> {
//    // console.log(item);
    
    
// })
// //console.log(varlues);
const myNum=[1,2,3,4,5,6,7,8,9,10]
// const newNums =myNum.filter((num)=> num>4)
// console.log(newNums);


const newNumm=myNum.map((num)=>num*10)
    .map((num)=>num+1)
    .filter((num)=>num>=40)

console.log(newNumm);
