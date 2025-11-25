function multi5(num){
    return num * 5
}
multi5.power = 2
console.log(multi5(5));
console.log(multi5.power);
console.log(multi5.prototype);



function createUser(username , score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score ++ 
}
createUser.prototype.printme = function(){
    console.log(`Price is ${this.score}`);
}
const chai =new createUser("chai" , 25)
const tea =new createUser("tea" , 259)

chai.printme()
