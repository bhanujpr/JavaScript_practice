//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)


(function chai(){
    // named iife
    console.log(`DB CONNECTED`)
})();//use semicolon vrna problem hogi
//Ab automatically run hojyga
// ()first parenthesis jaha function likhengy ()second for execution


// why iife??
// global scope ke pollution ke karan problem hoti hai toh us pollution ko hatane ke liye iife use kiya
//for writing two or more iife use semicolon at end

//simple iife
((name)=>{console.log(`Db Connected ${name}`)})('Bhanu');