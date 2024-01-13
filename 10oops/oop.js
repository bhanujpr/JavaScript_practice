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
}