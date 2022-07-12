// console.log(firstName)
// ReferenceError: Cannot access 'firstName' before initialization
// we cannot call let variable before its declaration...
let firstName="Prashannjeet"
console.log(firstName)

// We can re-define let variable....
firstName='Shobha'
console.log(firstName)

// Now using Const Variable......
const father='Parimal'
console.log(father)

// TypeError: Assignment to constant variable.
// father='paul'
// console.log(father)

// Var variable..........
// if we use var and call variable before its declaration it shows undefined
// console.log(mother)
var mother='Sobha'
console.log(mother)
// Re-defining var is possible....
mother='paul'
console.log(mother)
