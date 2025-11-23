const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc , cur) {
//     console.log(`acc ${acc} cur ${cur}`);
    
//     return acc + cur
// } , 0)


const myTotal = myNums.reduce( (acc,curr) => acc + curr , 0)
console.log(myTotal);


const shopping = [
    {
        itemName: "JS Course",
        price: 2999
    },
     {
        itemName: "Mobile course",
        price: 8776
    },
    {
        itemName: "py",
        price: 9999
    },
]
const priceToPay = shopping.reduce ( (acc , item) => acc + item.price ,0)
console.log(priceToPay);
