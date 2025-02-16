// before we learn about arrow function let me tell you that "this" keyword is used to refer current context same as java. But "this" keyword have some other meaning too in js. As if we call "this" keyword alone in a method then what happens see:

function test(){
    console.log(this);
    
}
// test()

//this will give you:  below values
/*
{ <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
} 
}
*/

// but if you call "this" keyword inside any if else statement then nothing will happen.

if(true){
    // console.log(this); // print empty braces.
}


// Arrow function

// one way of defining function--------

function One(){
    console.log("first way");
}



// second way of defining function ---------------
// also known as expression, as variables holds the function

const second = function(){
    console.log("second way");
}


// third way -------------

const third = () => {
    console.log("third way");
}
// third()


// fourth way

// const fourth = (num1, num2) => num1 + num2 
// this method is known as implicit function call. As num1 + num2 has to be written without braces. We can use paranthesis but not braces. As if braces is used then return keyword is necessary to write.

// const fourth = (num1, num2) => (num1 + num2)
// const fourth = (num1, num2) => {return num1 + num2}
// console.log(fourth(4,6)); // 10


// but what if we've to return object then we've to write braces
// const fourth = (num1, num2) => { username: "Anuj Agrawal"}
// console.log(fourth(4,6)); // undefined -> as we shouldn't do the above thing. wrap the return object into paranthesis.

const fourth = (num1, num2) => ({ username: "Anuj Agrawal"})
console.log(fourth(2,4)); // { username: 'Anuj Agrawal' }
