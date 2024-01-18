//this keyword tells about current context

// const user={
//     userName:"Hitesh",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.userName},welcome to website`)
//         console.log(this)
//     }
// }

// user.welcomeMessage()
// user.userName="Bhanu"
// user.welcomeMessage()
// console.log(this) context is {}


// function chai(){
//     let username="bhanu"
//     console.log(this.username)
// }

// chai()


// const chai=function(){
//     let username="bhanu"
//     console.log(this.username)
// }
// chai()



// const chai=()=>{
//     let username="Bhanu"
//     console.log(this)
// }
// chai()



// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
//explicity return


const addTwo=(num1,num2)=>num1+num2//implicit return
//we can not return object in implicit return we have to use curly braces
//curly braces use kiya to return use krna hai