// Self Invoking Functions

// The self-invoking functions are JavaScript functions that execute immediately as they are defined.


// a self-invoking function is also called immediately invoked function expression (IIFE).

// we can use this only one time



// Syntax :
/*
(function () {
    function body
 })();
 
 */

 // simple  Example
 
 
//  (function(){
//     console.log("Hello");
//  })()
 
 // function with Parameter and arguments
 
// (function(name, age){
//     console.log("Name : " + name);
//     console.log("Age : " +  age);
// })("dhanush", 19)


// Self Invoking function using arrow function

// ((name, age) => {
//     console.log("Name : " + name );
//     console.log("Age : " + age );
// })("ram", 20)
 


//nested self invoking functions

// ((name, age) => {
// console.log("First self Invoking Function");

//     (() => {
//     console.log("Nested  self Invoking function"); 
//     })()   
    
// })()


// self invoking function with  return value 

// normal function with return value

function hello(){
    return "My name is someName"
}

let name = hello();

console.log(name);



// self invoking function with return value

let output = (function(){
    return 'self invoking function with return value'
})()
console.log(output);



// self invoking function with function name

(function funName(){
    console.log("Function with name");
})()


(function() {
    console.log("Hello world");
})()
