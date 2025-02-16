// below declaration doesn't have any difference
const tinderUser1 = new Object() // this is created by Object constructor
const tinderUser = {} // this is created by object literal, this is used majorly
// both are typeof object


// this is how we can set key-values in the object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }


// const regularUser = {
//     email: "some@gmail.com",
//     fullName: {
//         userFullName:{
//             firstName: 'Anuj',
//             lastName: 'Agrawal'
//         }
//     }
// }
// console.log(regularUser.fullName.userFullName.lastName); // Agrawal



const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}
// const resultobj = {obj1, obj2} // creates 2 objects-obj1, obj2 inside an object-resultobj. Hence, not recommended

const obj3 = {5: 'a', 6: 'b'}

// const obj4 = Object.assign(obj1, obj2, obj3)
// console.log(obj1); // this 
// console.log(obj4); // and this, both are same because obj2, obj3 will merge with obj1
// as obj1 is the target object. hence, the data will be changed in obj1. Hence, not recommended.
// console.log(obj1 === obj4) // returns true as both have same elements

// const obj4 = Object.assign({}, obj1, obj2, obj3) // here {} is the target object and inside this all 3 objects will be merged.
// console.log(obj4); 

// but above way also not recommended.
// below way likes array merging is recommended using spread operator.

// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

// console.log(Object.keys(tinderUser)); // return array of keys
// console.log(Object.values(tinderUser)); // return array of values
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // return true


const course = {
    courseName : "JavaScript in Hindi",
    courseInstructor: "Hitesh Choudhary", 
    price: 999
}
// now if you want to use a value from a object multiple times then you shouldn't use like:
course.courseInstructor; // this will creates redundancy

// instead use below:
// const {courseInstructor} = course  // the string courseInstructor can also be changed as below
const {courseInstructor: instructor} = course  

console.log(instructor);
