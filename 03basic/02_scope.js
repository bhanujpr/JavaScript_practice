var c=300
let a=300
let b=300

if(true){
    let a=10
    const b=20
    var c=30
}

// console.log(a)//give error
// console.log(b)//give error
// console.log(c)//give value 30 

{
    // block scope
}

//global scope



function one(){
    const username="hites"

    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
//closure inner function can access parent elements
// one()




//agar addone ko declare se phle use krogy toh chl jyga
// function addOne(num){
//     return num+1
// }

// function addTwo = function(num){
//     return num+2
// }//expression type can hold anything like json variables functions
//agar isko phle use krogy declaration se toh error dega called hoisting or execution context