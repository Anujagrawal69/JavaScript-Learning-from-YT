// let arr = [2,56,23, "hello", "bhai", 12]; // heterogenuous type
// console.log(arr) // return all the elements of the array
// console.log(arr[0]) // 2
// console.log(arr.length); // 6
// console.log(typeof(arr)); // object


let arr = new Array(34 ,12 ,56 , 11 , 6, 8, 20);
// console.log(arr);
// console.log(arr[2]);
// arr.push(50)
// console.log(arr.push(75)); // insert 75 at the end and returns the length of array
// arr.pop() // remove last element and returns it.

// arr.unshift(80) // insert value at the start, returns new length of array and shifts all the values by 1 place to right.
// arr.shift() // removes first element from the array and returns it.

// console.log(arr.includes(20)); // returns true if 20 exists in array else return false.
// console.log(arr.indexOf(9)); // return -1 if don't exists else returns the index

// let myArr = arr.join(); // 34,12,56,11,6,8,20 -> in string formate
// let myArr = arr.join('+'); // 34+12+56+11+6+8+20 -> means separator can be given inside method
// let myArr = arr.join('-->'); // 34-->12-->56-->11-->6-->8-->20 -> in string formate

console.log("A " + arr);

let myArr = arr.slice(1, 4)
console.log(myArr);
console.log("B " + arr);

let myArr2 = arr.splice(1,4)
console.log(myArr2);
console.log("C " + arr);

