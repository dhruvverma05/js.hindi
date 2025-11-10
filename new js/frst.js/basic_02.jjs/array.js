const marvel_heros = [ "thor", "IronMan","SPIDERMAN"]
const dc_heros = ["Superman","flah"]

 const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_array= anotherarray.flat(Infinity)
console.log(real_array);
console.log(Array.isArray("dhruv"));
console.log(Array.from("dhruv"));
console.log(Array.from({name : "hiesh"}))

const score1=100
const score2=200
const score3=300
console.log(Array.of(score1,score2,score3));

