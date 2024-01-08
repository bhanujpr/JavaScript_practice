//Singleton or using constructor

const tinderuser= new Object()
// console.log(tinderuser)

tinderuser.id="123abc"
tinderuser.name="Samm"
tinderuser.isLoggedIn=false;
// console.log(tinderuser)


const regularUser={
    email:"timepass@gmail.com",
    fullName:{
        firstName:"Bhanu",
        lastName:"Pratap"
    },
    Dob:"5thjan2023"
}

// console.log(regularUser.fullName.firstName)


const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
// const obj3={obj1,obj2} same array pronblem
// const obj3 = Object.assign({},obj1,obj2,{5:"e",6:"f"})//{} is target and all other are source
const obj3={...obj1,...obj2}//spread
// console.log(obj3)


const users=[
    {
        id:1,
        email:"one@gmail.com"
    },
    {
        id:2,
        email:"two@gmail"
    },
    {
        id:3,
        email:"thre"
    }
]
// console.log(users[1].email)


// console.log(tinderuser)
// console.log(Object.keys(tinderuser))//output as array and used in database
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))

// console.log(tinderuser.hasOwnProperty('isLoggedIn'))//property hai ya nhii



//Destructuring objects
const course ={
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}


const {courseInstructor:instructor}=course
console.log(instructor)

//example in react
// const navbar=({company})=>{

// }
// navbar(company="hites")

//API concepts: apna kaam dusre pe dalna
// values are in json(javascript object notation)
// {
//     "name":"hitesh"
//     "name":"hitesh"
//     "name":"hitesh"
//     "name":"hitesh"
//     "name":"hitesh"
// }