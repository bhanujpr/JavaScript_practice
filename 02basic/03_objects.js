//ways to declare objects:
// Singleton:using constructor object.create
//literals




//object literals

const mySym=Symbol("key1")

const JsUser={
    name:"Hitesh",
    age:19,
    // mySym:"Mykey1",//not used as symbol
    [mySym]:"myekey1",
    location:"Jaipur",
    email:"Hites@kuchbhi",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])


// overriding values//
// JsUser.email="Newmail@gmail.com"
// console.log(JsUser.email)
// Object.freeze(JsUser)
// JsUser.email="New111mail@gmail.com"
// console.log(JsUser.email)


JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`);
}
// console.log(JsUser.greeting)//return undefined

console.log(JsUser.greeting())//
console.log(JsUser.greeting2())//