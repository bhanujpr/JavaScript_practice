const score = 400//js automaticall detects its datatype
// console.log(score)


const balance = new Number(100)
// console.log(balance)
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))//for value after decimal


const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3))//rounding off to 3digits

const hundreds=1000000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN'))


//MAth library ++++++++++++++++++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.6))
// console.log(Math.floor(4.6))
// console.log(Math.min(3,4,5,6,6,7))

// console.log(Math.random())
// console.log(Math.random()*10)//bw 0 to 10
// console.log((Math.random()*10)+1)//bw 1 to 10
console.log(Math.floor(Math.random()*10)+1)//bw 1 to 10

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)//between range min to max