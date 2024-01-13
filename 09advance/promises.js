// The promises object represent the eventual completion(or failure) of an object asynchronous operations and its resulting value
// It has three states
// 1)pending
// 2)fulfilled
// 3)rejected



// const promiseOne = new Promise(callback leta hai)


const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //Db calls,cryptography,network
setTimeout(function(){
    console.log('Async task is complete');
    resolve()
},1000)
})


promiseOne.then(function(){
    console.log('Promise Consumed')
})





new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task 2')
        resolve()
    },1000)
}).then(function(){
    console.log('Async task 2 resolved')
})



const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:'chai@gmail'})
    })
})
promiseThree.then(function(user){
    console.log(user)
})




const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
    let error=true
    if(!error){
        resolve({username:"bhanu",password:"12355"})
    }
    else{
        reject('Error:Something went wrong')
    }
},1000)
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"Javascript",password:"123"})
        }else{
            reject('ERROR:JS went wrong')
        }
    },1000)
})


async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
consumePromiseFive()


// async function getAllUsers(){
    
//    try{
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//    }catch(error){
//     console.log("E:error")
//    }
// }
// getAllUsers()

 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response)=>{
    return response.json()
 })
 .then((data)=>console.log(data))
 .catch((error)=>console.log(error))