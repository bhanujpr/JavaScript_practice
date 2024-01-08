//date objects represent a single moment in time in platform independent format which is calculated from jan 1 1970

let myDate = new Date()
// console.log(myDate)
// console.log(typeof myDate)//object
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// let myCreatedDate= new Date(2023,0,23,5,3,34);
// let myCreatedDate= new Date("2023-01-14");
let myCreatedDate= new Date("01-14-2023");
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())


let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())//get time and compare with date.now

// console.log(Math.floor(Date.now()/1000))//Millisecond to second conversion and using math.floor to remove decimal values

let newDate= new Date()
// console.log(newDate)
// console.log(newDate.getDay())//newDate. dot lagaty hi sare function ajyengy


newDate.toLocaleDateString('default',{
    weekday:"long",
    //we can define here more
    timeZone:'',
})