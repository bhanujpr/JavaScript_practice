const marvel_heroes =["thor","ironman","Spiderman"]
const dc_heroes=["Superman","flash","batman"]


// marvel_heroes.push(dc_heroes)//take dc_heroes as single entry
// console.log(marvel_heroes)


// const allheroes = marvel_heroes.concat(dc_heroes)//concat merge two and return a new array
// console.log(allheroes)


const all_new_heroes = [...marvel_heroes,...dc_heroes]
// console.log(all_new_heroes)//this is spread operator can merge any number of arrays


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_anoterh_array = another_array.flat(Infinity)//enter all as a single entry
// console.log(real_anoterh_array)



// console.log(Array.isArray("Bhanu"))
// console.log(Array.isArray([1,2,3]))

// console.log(Array.from("hitesh"))
// console.log(Array.from({name:"Hitesh"}))

let a1=100
let a2=101
let a3=102

console.log(Array.of(a1,a2,a3))//convert to array