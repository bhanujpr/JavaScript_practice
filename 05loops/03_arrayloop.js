//these are array specific loops
//for of

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num)
// }

const greet="Hello World!"
// for (const g of greet) {
//     console.log(g)
// }

//Maps
const map= new Map()
map.set('IN',"India")
map.set('IN1',"India1")
map.set('IN2',"India2")
// console.log(map)
// for (const key of map) {
//     console.log(key)
// }
// for (const [key,value] of map) {
//     console.log(key)
//     console.log(value)
// }

const myObj={
    'game1':'NFS',
    'game2':'Spiderman'
}

// for (const it of myObj) {
//     console.log(it)
// }
//objects are not iterable by for of loop
//we can use for in loop 
for (const key in myObj) {
  // console.log(`${key} value is ${myObj[key]}`)
}




//FOr in loop in array print only print array keys or u can indexes not their values
prog=["aa","bb","cc","dd"]
for (const key in prog) {
    // console.log(key)
}//output 0 1 2 3


for (const key in map) {
    // console.log(key)
}//not iterable maps so no output