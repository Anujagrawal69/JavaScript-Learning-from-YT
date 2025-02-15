// let score = "34abc"
// let score = null
// let score = undefined
// let score = true

// let value = Number(score)
// console.log(typeof(value))
// console.log(value);


// 33 -> number
// true -> 1 & false -> 0
// undefined -> NaN
// null -> 0
// "34abc" -> NaN


// let number = NaN

// console.log(typeof NaN) // NaN is considered as number type because it meant to be a number but it is not.


// let isLoggedIn = undefined
// let booleanLoggedIn = Boolean(isLoggedIn)
// console.log(booleanLoggedIn);

// 0 -> false & other than 0 -> true
// empty string "" -> false 
// "anuj" -> true
// null -> false
// undefined -> false



// let anotherOne = undefined
// let stringOne = String  (anotherOne)
// console.log(stringOne);
// console.log(typeof stringOne);

// 33 & true & null & undefined-> string





// *********************Operations********************

// let value = 34
// console.log(-value)   // this will output -ve value
// console.log(value-)   // this will give error

// console.log(3+3);  //add
// console.log(3-3); //subtract
// console.log(3*3);  //multiply
// console.log(2**3);  //power
// console.log(3/3);  // division
// console.log(3%3);  // modulo



// let str1 = "hello "
// let str2 = "world"
// let str3 = str1 + str2

// console.log(str3); //hello world

// console.log(2 + "2"); // 22 -> string
// console.log("2" + 2); // 22 -> string
// console.log(2 + 2 + "2");  // 42 -> string
// console.log(2 + "2" + "2"); // 222 -> string
// console.log("2" + 2 + 2); // 222 -> string

// console.log(6 + 2 / 3 % 4 * 10);  // don't use in this way
// console.log(6 + (2 / 3) % (4 * 10));  // correct way to use paranthesis


// console.log(+true);  // 1
// console.log(+false);  // 0
// console.log(false+);  // obviously gives compilation error

// console.log(+""); // 0
// console.log(+"anuj"); // NaN




// console.log(2>1); // true
// console.log(2<1); // false
// console.log(2>=1);  // true
// console.log(2<=1);  // false

// console.log(02>1);  // not allowed. but can be converted into octal
// console.log(0o2>1); // octal -> true

// console.log("a">1); // false
// console.log("">1); // false
// console.log("">=1); // false
// console.log(""==1); // false
// console.log(""<=1); // true
// console.log(""<1); // true
// console.log("anuj"<1); // false


// console.log(null == 0); // false
// console.log(null <= 0); // true
// console.log(null >= 0); // true
// console.log(null > 0); // false
// console.log(null < 0); // false
// because == is resolved differently than <=, >=, >, <
// null is resolved as 0 that why <= and >= gives true


// console.log(undefined > 0); // false 
// console.log(undefined >= 0); // false
// console.log(undefined < 0); // false
// console.log(undefined <= 0); // false
// console.log(undefined == 0); // false




// there is one more thing that is about strict check
// in javascript there is another operator that is === And it check strictly. Also ensure the data types.

// console.log(null === 0); //false  


// let bigNumber = 2232323233678902321222121789;  // output will be 2.2323232336789023e+27
// let bigNumber = 2232323233678902321222121789n;  // putting n at the last convert it into bigInt // and output will be the same 
// console.log(bigNumber);
