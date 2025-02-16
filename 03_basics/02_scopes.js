// scopes same as java
// minor difference is with var and let, const
// we already discussed about var, let, const as var is not safe for scope.
// we can declare function inside a function
// if else inside if else and variables inside them have their own scope as java.

// interesting things-----------------------------------------------------


console.log(addOne(4)); // 5

function addOne(num){
    return num+1
}
console.log(addOne(5)); // 6


// console.log(addTwo(4)); // gives error as addTwo is stored in a variable and varible is defined after the calling statement hence error comes.
// if we called the reference after defining the expression then it will not give error as in 24 line did.

const addTwo = function(num){
    return num+2
}
console.log(addTwo(5)); // 7
