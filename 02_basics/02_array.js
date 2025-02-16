let marvel_heros = ["thor", "ironman", "spiderman"]
let dc_heros = ["Batman", 'superman', 'flash']

// console.log(marvel_heros.push(dc_heros)); // 4 -> length
// console.log(marvel_heros); // [ 'thor', 'ironman', 'spiderman', [ 'Batman', 'superman', 'flash' ] ]

// console.log(marvel_heros.concat(dc_heros)) // creates new array ->  [ 'thor', 'ironman', 'spiderman', 'Batman', 'superman', 'flash' ]
// console.log(marvel_heros); // remains same

// we actually don't use concat because it only concats 2 array. But we've spread operator to join these arrays
// and we can join more than 2 arrays.

// let all_heros = [...dc_heros, ...marvel_heros] // this can have any amount of arrays.
// console.log(all_heros); // [ 'Batman', 'superman', 'flash', 'thor', 'ironman', 'spiderman' ]



// what if we've array1 inside an array2 and array3 inside array1. nested nested 
// let nums = [1,2,3,4,[5,6,7], 8, [6,7,[8,9,[10]]]]
// let nums_new = nums.flat(3) // this will flatten all the elements into a new array upto 3 nested array
// let nums_new = nums.flat() // this will do nothing
// let nums_new = nums.flat(Infinity) // go deeper into the nested arrays and resolve all and returns new array
// console.log(nums_new);


// console.log(Array.isArray("Anuj Agrawal")); // false
// console.log(Array.from("Anuj Agrawal")); // takes string as a parameter and converts into array ['A', 'n', 'u', 'j',' ', 'A', 'g', 'r','a', 'w', 'a', 'l']

// console.log(Array.from({name: "Anuj"})); // returns [] -> because we've to mention what to do for the parameter and how it should be resolved.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // will converts the values into an array
