//Primitive:-call by value
//7 types:String,Number,Boolean,null,undefined,symbol,BigInt



const score=100
const scoreValue=100.3//both number

const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)


const bigNumber=33333333333333333n

//Reference(Non Primitive)
//Array,Objects,Functions

const heros=["Shaktiman","nagraj","doga"]

let obj={
    name:"Hello",
    age:22,
}

const myFun = function(){
    console.log("Hello world")
}
myFun()
console.log(typeof myFun())