//Arrays
//arrays share shallow copy and single reference points

const myArr=[0,1,2,3,4]
// console.log(typeof myArr)//object
const myArr2 = new Array(1,2,2,3,4)

// console.log(myArr.toString())
// console.log(myArr)
// console.log(myArr2)

//Array Methods


// myArr.push(6)
// myArr.push(6)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9)//shift all value and add it at first point
// myArr.shift()//removes 1st 
// console.log(myArr)

// console.log(myArr.includes(9))//false
// console.log(myArr.indexOf(9))//-1 not exist

const newArr = myArr.join()//string type
console.log(myArr)
console.log(typeof newArr)
// console.log(typeof myArr)

//Slice Splice
// console.log("A ",myArr);
// const myn1 = myArr.slice(1,3)//1 2
// console.log(myArr)
// console.log(myn1)
// console.log(myArr)
// const myn2 = myArr.splice(1,3)// 1 2 3 but also removes 123 from original array
// console.log(myArr)
// console.log(myn2)