//objects can be created using two ways
// 1. singleton -> // Object.create

// 2. object literals


//--------------------------object literals-------------------------//


// const JsUser = {} // this is the way to define an array in js
// console.log(typeof JsUser); // object


// const JsUser = {
//     name: "Anuj",
//     age: 22,
//     location: "Jaipur",
//     email: "rksanuj@gmail.com",
//     isLoggedIn: false,
//     loggedInDays: ["sunday", 'tuesday']
// }

// console.log(JsUser); // prints all the key-value pair in json formate
// console.log(JsUser.age); // 22 -> dot is used to take the values
// console.log(JsUser["age"]) // 22 -> brackets are used to extract the values but key should be given in string formate.

// because Js takes keys as string by default 
// we can also define object like this:

// const JsUser = {
//     name: "Anuj",
//     "full name": "Anuj Agrawal",
//     age: 22,
//     location: "Jaipur",
//     email: "rksanuj@gmail.com",
//     isLoggedIn: false,
//     loggedInDays: ["sunday", 'tuesday']
// }

// but now we can't access "full name" using dot operator. we can use it only by brackets
// console.log(JsUser["full name"]);


// here we can define symbol also.
const mySym = Symbol("key1")
const JsUser = {
    name: "Anuj",
    "full name": "Anuj Agrawal",
    [mySym]: "myValue1",  // we shouldn't use it as mySym: "myValue1" otherwise mySym will be taken as a string not a symbol
    age: 22,
    location: "Jaipur",
    email: "rksanuj@gmail.com",
    isLoggedIn: false,
    loggedInDays: ["sunday", 'tuesday']
}

// console.log(JsUser[mySym]); // here we don't put ["mySym"] like this because it is not a string. it is a symbol. 

// we can change values in an object by assigning directly.
// JsUser.age = 18 // this will change age.
// console.log(JsUser);

// if you that the object should not be change then you can freeze the object as:
// Object.freeze(JsUser);
// JsUser.age = 30 // this will not be happened and no error will come.
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this["full name"]}`);
}
JsUser.greeting()
JsUser.greetingTwo()