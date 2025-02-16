// const score = 200;
// console.log(score); // here score will be a number what not explicitly defined and configured automatically.

// const balance = new Number(300); // here balance will be a type of number object. (explicitly)
// console.log(balance.toString().length); // if converted into string using toString() method then obviously it will have all methods of string.

// console.log(balance.toFixed(2)); // gives fixed piont notation value after decimal.

// const num = 23.292
// console.log(num.toPrecision(3)); // 23.3 -> gives precise value upto 3 digit.

// const num2 = 234.232
// console.log(num2.toPrecision(3)); // 234 -> gives precise value upto 3 digit.

// const num3 = 2345.232
// console.log(num3.toPrecision(3)); // 2.35e+3 -> gives precise value upto 3 digit.

// const num4 = 10000000
// console.log(num4.toLocaleString('en-US')); // 10,000,000 -> this will give US standard

// const num5 = 10000000
// console.log(num5.toLocaleString('en-IN')); // 1,00,00,000 -> this will give Indian standard



/////////////////////////////////////////---MATHS---////////////////////////////////////

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-5)); // converts negative value into positive values. but not vice versa.

// // it has some variation
// console.log(Math.round(89.4)); // round of -> 89
// console.log(Math.floor(89.7)); // 89
// console.log(Math.ceil(89.4)); // 90 

// console.log(Math.sqrt(64)); // 8

// console.log(Math.min(4,6,8,2,9)); // 2
// console.log(Math.max(4,6,3,1,6,7)); // 7

// console.log(Math.random()); // by default give between 0 - 1
// console.log(Math.random()); // by default give between 0 - 1

// if you want a random number between 0-10
// console.log(Math.random()*10);
 
// if want between 1 - 10
// console.log((Math.random()*10)+1);

// if want absolute value then use floor
// console.log(Math.floor(Math.random()*10)+1);


// const max = 6
// const min = 1
// console.log(Math.floor(Math.random()*(max - min + 1)) + min); // 10 to 20

