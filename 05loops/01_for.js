//For

for (let index = 0; index < 10; index++) {
    const element = index;
    //console.log(element)
}


//loop in loop
// for (let i = 0; i <5; i++) {
//   for(let j=0;j<5;j++){
//     console.log(i,j)
//   }  
// }



//break and continue
for (let i = 0; i < 6; i++) {
    console.log(i)
    if(i==2){
        console.log("lets continue")
        continue
    }
    if(i==3){
        console.log("number 3 found")
        break;
    }
    
}