class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username : ${this.username}`);
        
    }
    static createId(){
        return `123`
    }
}

const dhruv =  new user ("dhruv")
console.log(dhruv.createId())