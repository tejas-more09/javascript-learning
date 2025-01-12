const accountID = 384
let accountEmail = "tejas@google.com"
var accountPass = "12345"
accountCity = "Nashik"
let accountState 

// accountID = 463 :- changes are not allowed

accountEmail = "tejasmore@google.com"
accountPass = "12345784"
accountCity = "Nanded"

/*
prefer not to use var (scope " { } ")
because of issue in block scope and function scope
*/

console.log(accountID);
console.table([accountID ,accountEmail ,accountPass ,accountCity ,accountState])
