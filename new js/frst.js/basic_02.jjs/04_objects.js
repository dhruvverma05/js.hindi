 // const tinder=new Object() // singleton object

const tinder={}
tinder.id="123abc"
tinder.name="''sammy"
tinder.isLoggedIn= false

 console.log(tinder);


 const regularUser={
    email:"jjdhdhkkjdi",
    fullname:{
        username:{
            firstname:"dhruv",
            lastname:"verma"
        }

    }
 }
 const obj1={1:"a",2:"b"}
 const obj2={3:'c',4:"d"}
const ob3={...obj1,...obj2}
   //const ob3= Object.assign({},obj1,obj2)
 console.log(ob3);


 const course= {
    name:"js n hindi",
    price: "999",
    courseInstructr:"Hitesh"

 }
 
 const {courseInstructr:insrructor}=course
 console.log(insrructor);                   //destructure method

  //{
  //  "name":"hitesh",
    //"coursename":"js",
   // "price":"free"             //API IN FORM OF OBJECT
//}

 //API IN FORM OF ARRAYS
 [
    {},
    {},
    {}
 ]