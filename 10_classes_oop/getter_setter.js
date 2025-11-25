class user {
    constructor(email , password){
        this.email = email
        this.password = password
        }
    get email (){
    return this._email.toUpperCase()
    }
    set email(value){
    this._email = value
}

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }

}
const dhruv = new user ("234r5tgfd33ed" , "dhruv")
console.log(dhruv.password);
console.log(dhruv.email);
