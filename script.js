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

var name = 'Nero';
var age = 26;
console.log(name + age); // => Nero26 - JavaScript converts the integer to a string
console.log(age + age); // => 52 JavaScript figures out it is an integer and adds the two

var job, isMarried; // declaring a variable

console.log(job);

job = 'teacher'; // assigning a variable
isMarried = true;

console.log(name + ' ' + age + ' ' + job + ' ' + isMarried); // => Nero 26 teacher married | all converted to a string by JavaScript

age = 'thirty six'; // reassigning a variable
job = 'student';

console.log(name + ' is a ' + age + ' year old ' + job);
