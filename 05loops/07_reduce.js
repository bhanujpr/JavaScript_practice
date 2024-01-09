const arr=[1,2,3,4]
const initialValue=0

const sumWithInitialse = arr.reduce((acc,curr)=>{return acc+curr},initialValue)

console.log(sumWithInitialse)