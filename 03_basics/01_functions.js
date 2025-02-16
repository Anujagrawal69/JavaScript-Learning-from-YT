function print(){
    console.log("This method prints");
}

function add(num1, num2){
    return num1 + num2
}
// console.log(add(3,4));


// function greetUser(username){
//     return `Good Evening!, ${username}`
// }

// function greetUser(username = "User"){ // default value is "User"
//     return `Good Evening!, ${username}`
// }
// console.log(greetUser("Anuj Agrawal"));



// ... is taken as rest operator as well as spread operator. the thing that differentiate this operator in both of these two is the use case of this operator. Like how this operator is used in a particular place.

function calculateCartPrice(num1){
    return num1
}

// console.log(calculateCartPrice(300)); // easy -> 300
// console.log(calculateCartPrice(300, 200, 400)); // easy -> 300

// but if you use the ... operator:
function calculateCartAmount(...num1){ // it creates an array like in Java.
    return num1
}

// console.log(calculateCartAmount(10,20,30));

function calculateCartAmount2(val1, val2, ...arr){ // first arg taken as val1, second arg taken as val2 and rest converted into array.

}


const user = {
    username: "Anuj",
    salary: 2000
}
function userDetails(anyObject){
    console.log(`username is ${anyObject.username} and salary is ${anyObject.salary}`);
}
// userDetails(user)
userDetails({
    username: "Shubham",
    salary: 3000
})

