
// symbol data type is used to create the unique values 


let a = Symbol(4);
let b = Symbol(4);
console.log(a ==b); // false

// console.log(Symbol(4));

console.log(typeof a); // symbol
console.log(typeof b); // symbol