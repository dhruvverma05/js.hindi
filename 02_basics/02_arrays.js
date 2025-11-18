const marvelHeros = ["Spiderman","Ironman","kaluman"]
const dcHeros = ["Superman","Batman","Flash"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);

// marvelHeros.concat(dcHeros)
// console.log(marvelHeros.concat(dcHeros));\

const allNwHr = [...marvelHeros,...dcHeros]  // spread
console.log(allNwHr);


const anotherArr = [1,2,3,[2,3,5,6],[3,6,,6,5],9,[5,7]]

const realAnotherArr = anotherArr.flat(Infinity)
console.log(realAnotherArr);


console.log((Array.isArray("dhruv"))
);

console.log(Array.from("dhruv"));

//interesting case
console.log(Array.from({name:"dhruv"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

