//function name(){defination}
function sayMyName(){
    console.log("Hitesh")
}

// sayMyName//function reference
// sayMyName()//calling function

// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }
function addTwoNumber(number1,number2){
    let result= number1+number2;
    return result;
}
const result=addTwoNumber(3,4)
// console.log(result)




function logInUserMsg(username="sam"){
    // given default value
    // if(username===undefined){
        if(!username){
        console.log("please enerer a username")
        return
    }
    return `${username} just logged in`
}
const str=logInUserMsg("Bhanu")
const str1=logInUserMsg()
// console.log(str)
// console.log(str1)




// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200,300,400))



//using rest operator also called spread
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,200,3000,44,44,4,555))


const user={
    username:"Bhanu",
    price:100
}

function handleObject(anyobject){
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)