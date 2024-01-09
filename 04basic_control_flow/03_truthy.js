//falsy values
// false,o,-0,BigInt 0n,"",null,undefined,NaN
//truthy values
//true,"0",'false'," ",[],{},function(){}



//Nullish coalescing Operator(??):null undefined

let val1;
// val1=5??10
// val1=undefined??10
// val1=null??10??20//first not null value le lega
val1=null??10//null ke basis pe safety check krta hai ki agar null hai toh agye handle krlengy database
