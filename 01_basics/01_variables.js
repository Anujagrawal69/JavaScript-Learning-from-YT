const accountId = 123456
let accountEmail = "rksanuj@gmail.com"; 
var accountPassword = "9191919" 
/*
prefer not to use 'var' because of scope problems. 
Problems like functional scope, block scope.
*/
accountCity = "Gwalior"

let accountState // if you declare a variable without assigning any value then default value will be 'undefined'


// accountId = 839291
accountEmail = "rksanuj678@gmail.com"
accountPassword = "anuj@123"
accountCity = "Bengluru" 

console.log(accountId);
// console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
