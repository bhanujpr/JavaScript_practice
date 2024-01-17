const name="Hello"
const repoCount=50

// console.log(name+repoCount+"Value")
// console.log(`${name} how are you value is ${repoCount}`)


const gameName = new String("Bhanu-pratap-singh")

// console.log(gameName)
// console.log(gameName.length)
// console.log(gameName.toUpperCase)
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('t'))

const newStr = gameName.substring(0,5)
// console.log(newStr)

const newStr2=gameName.slice(0,7);//can use negative indices
// console.log(newStr2)
// console.log(gameName)

const newStringOne="     Bhanu   ji  h"
// console.log(newStringOne)
console.log(newStringOne.trim())//dont change origina; value
// console.log(newStringOne)



const url="https://hites.com/hites%20choudhary"
// console.log(url.replace('%20','-'))//do not change original
// console.log(url.includes('ha'))
// console.log(url)
console.log(url.split('/'))