// IIFE -> Immediately Invoked Function Expression.
// this is the function that is called immediately after definition and this is done to prevent the effect of global scope pollution.

(function one(){
    // console.log("one function called");
})(); // this will call the one() function immediately. But the function should be wrapped in paranthesis. this is also known as NAMED IIFE

// above function has to be explicitly give the instruction as where to stop the function and this is done by a semi-colon, that is given at the end of ();
// it is necessary to give semi-colon otherwise below function can't be executed.
// below method also known as UNNAMED IIFE
(()=>{
    // console.log("function called");
})();

//we can also pass parameters inside this functions.
((name)=>{
    console.log(`hello ${name}`);
    
})("Anuj");