const user={
    username:"Bhanu",
    loginCount:9,
    signedIn:true,

    getUserDetails: function(){
        // console.log("Got user details")
        // console.log(this)
        console.log(`username:${this.username}`)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())

function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greet= function(){
        console.log(`Hello and welcome ${this.username}`)
    }
    return this
}

// const userOne = User("Bhanu",12,true)
// const userTwo = User("Chai",12,true)//ye userOne ki bi value override krdega to ye new keyword likhne se sahi hojyga kyu ki constructor function new instance dega



const userOne =new User("Bhanu",12,true)
userOne.greet()
const userTwo = new User("Chai",12,true)
// console.log(userOne)
//New-> jaise hi new keyword use krengy toh empty object create hoga usko instance kehty hai
// fir ek constructor function call hota hai jo argument pack krega dedega
//this keyword me sab inject hojyga
//fir sab miljyga 



console.log(userOne.constructor)
//go and look instance of method on google or mdn docs