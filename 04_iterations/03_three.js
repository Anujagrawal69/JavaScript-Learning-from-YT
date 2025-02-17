const arr = ["one", "two", "three", "four", "five"]

// arr.forEach(function (item){
//     console.log(item);
// })



// arr.forEach((item)=>{
//     console.log(item);
// });



// function printMe(item){
//     console.log(item);
// }
// arr.forEach(printMe)



// forEach loop not only take one parameter instead it can have below parameter
// arr.forEach((item, index, array)=>{
//     console.log(item, index, array);  
// })




const myObj = [
    {
        language: "Java",
        ext: "java"
    },
    {
        language: "Python",
        ext: "py"
    },
    {
        language: "JavaScript",
        ext: "js"
    },
]

myObj.forEach((item)=>{
    console.log(`${item.language} has extension as ${item.ext}`);
})