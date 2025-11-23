const email = "hsmdjjjjjjjjjjjjjjj"   // assumption
if (email) {
    console.log("got email");
}else{
    console.log("does noy have");
}



// falsy value 
// false, 0 ,-0 , BigInt (0n) , "" , null , undefined , NaN


//truthy value 
// "0" , 'false' , " " , [] , {} ,function(){}

const obj = {}

if (Object.keys(obj).length===0) {
    console.log("object is empty");
    
}