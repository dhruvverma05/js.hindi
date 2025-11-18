const tinderUser = new Object()

tinderUser.id = "12231111112"
tinderUser.name = "dhruv"
tinderUser.email = "223444321dxcvbgvcxz"

// console.log(tinderUser);


const regularUser = {
    email : "sum@123",
    fullname : {
        username : {
            firstname : "dhruv",
            lastname : "verma"
        }
    }
}

// console.log(regularUser.fullname.username.firstname);

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "a",
    4: "b",
}

// const obj3 = {obj1 ,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id : 1,
        email :"73tdgdhdjs"
    },
    {
        id : 1,
        email :"73tdgdhdjs"
    },
    {
        id : 1,
        email :"73tdgdhdjs"
    }
]

console.log(users[1].email)



// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('email'));



const course = {
    coursename : "jshindi",
    price : "999",
    codeinstructor : "hitseh"
}

// course.codeinstructor

const {codeinstructor : instructor } = course
// destructuring 
console.log(instructor);

// {                                         
//     "name" : "dhruv",                   JSON
//     "js" : "js hindi",
//     "price" : "free"
// }


[
    {},
    {},
    {}
]



