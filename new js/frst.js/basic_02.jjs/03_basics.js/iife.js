// immediately invoked function expression(IIFE)

(function one(){
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();

((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})('dhruv')


