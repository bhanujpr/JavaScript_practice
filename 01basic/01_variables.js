const accountId=11123
let accountEmail="bhanurajawat@gmail.com"
var accountPassword="12345"//scope problem never use this
accountCity="Jaipur"//this is possible but not to use
let accountState//undefined yet not set

// accountID=2   Not allowed because it is constant
// console.log(accountId)
accountEmail="aaa@gmail.com"
accountPassword="232323"
accountCity="Bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])