/*
var name = 'Nero';
console.log(name);

var lastName = 'Siva';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture variables: 2

// var name = 'Nero';
// var age = 26;
// console.log(name + age); // => Nero26 - JavaScript converts the integer to a string
// console.log(age + age); // => 52 JavaScript figures out it is an integer and adds the two
//
// var job, isMarried; // declaring a variable
//
// console.log(job);
//
// job = 'teacher'; // assigning a variable
// isMarried = true;
//
// console.log(name + ' ' + age + ' ' + job + ' ' + isMarried); // => Nero 26 teacher married | all converted to a string by JavaScript
//
// age = 'thirty six'; // reassigning a variable
// job = 'student';
//
// console.log(name + ' is a ' + age + ' year old ' + job);
//
// var lastName = prompt('What is the last name?');
// console.log(lastName);
//
// alert(name);

// Lecture: Operators
var now = 2016;
var birthYear = 2017 - now;

birthYear = now - 26 * 2;
// 2017 -52
// 1964

console.log(birthYear);

var ageNero = 26;
var ageBrother = 27;

ageNero = ageBrother = (3 + 5) * 4 - 6;

ageNero++; // ageNero = ageNero + 1
ageBrother *= 2; // ageBrother = ageBrother * 2

console.log(ageNero);
console.log(ageBrother);
