let name = "Anuj Agrawal";
let repoCount = 6;

// console.log(name + " " + repoCount + " value"); // this way is old and we actually don't use this way of writing string

// In modern JS we've string interpolation to print strings
// console.log(`My name is ${name} and my repository count is ${repoCount}`);


const gameName = new String('Prince of Persia: The two thrones');
console.log(gameName[6]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase()); //it don't change the original string.

console.log(gameName.split(" "));
console.log(gameName.substring(0, 16))
