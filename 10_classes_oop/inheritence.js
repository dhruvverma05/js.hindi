class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`user name is ${this.username}`);
        
    }
}
class teacher extends user{
    constructor (username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`new course is added by ${this.username}`);
        
    }

}


const chai = new teacher("chai" , "ssssdfcvgtresxc" , "11112345t")
chai.addCourse()

const masalaChai = new user ("dhruv")
masalaChai.logMe()

console.log(chai instanceof user);
