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
// var now = 2016;
// var birthYear = 2017 - now;
//
// birthYear = now - 26 * 2;
// // 2017 -52
// // 1964
//
// console.log(birthYear);
//
// var ageNero = 26;
// var ageBrother = 27;
//
// ageNero = ageBrother = (3 + 5) * 4 - 6;
//
// ageNero++; // ageNero = ageNero + 1
// ageBrother *= 2; // ageBrother = ageBrother * 2
//
// console.log(ageNero);
// console.log(ageBrother);

// Lecture 4 : if/else
//
// var name = 'Nero';
// var age = 26;
// var isTall = 'no';
//
// if (isTall === 'yes') {
//   console.log(name + ' is tall!');
// } else {
//   console.log(name + ' is not tall');
// }

// Lecture: Boolean logic and switch

// var age = 25;
//
// if (age < 20) {
//   console.log('Nero is a teenager');
// } else if (age > 20 && age < 30) {
//   console.log('Nero is a young man');
// } else {
//   console.log('Nero is a man');
// }
//
// var job = 'student';
//
// job = prompt('What does Nero do?');
//
// switch (job) {
//   case 'student':
//     console.log('Nero is a makers student');
//     break;
//   case 'driver':
//     console.log('Nero drives a cab in Lisbon');
//     break;
//   case 'cop':
//     console.log('Nero helps fight crime');
//     break;
//   default:
//     console.log('Nero does something else');
// }

// Coding challenge
//
// console.log('Hello players, welcome to the game!');
// player_1_age = prompt('Player one, age:');
// player_1_height = prompt('Player one, height');
//
// player_2_age = prompt('Player two, age:');
// player_2_height = prompt('Player two, height:');
//
// player_1_score = player_1_height + 5 * player_1_age;
// player_2_score = player_2_height + 5 * player_2_age;
//
// if (player_1_score > player_2_score) {
//   console.log('Player 1 wins');
// } else if (player_1_score < player_2_score) {
//   console.log('player 2 wins');
// } else {
//   console.log('Draw');
// }

// Lecture: functions
//
// function calculateAge(yearOfBirth) {
//   var age = 2017 - yearOfBirth;
//   return age;
// }
//
// var birthYearNero = prompt('Year of birth please');
//
// console.log('Your age is ' + calculateAge(birthYearNero));
//
// function yearsUntilRetirement(name, yearOfBirth) {
//   var age = calculateAge(yearOfBirth);
//   var retirement = 65 - age;
//   if (retirement >= 0) {
//     console.log(name + ' has ' + retirement + ' years to retire.');
//   } else {
//     console.log(name + ' has already retired.');
//   }
// }
//
// yearsUntilRetirement('Nero', 1991);
// yearsUntilRetirement('The Queen', 1927);

// Lecture: Statements and expressions

// function statments:
// function someFun(par) {
//   //code
// }
//
// statement = performs an action
//

// function expressions
// var someFun = function(par) {
//   //code
// }
//
// e.g. if(x===5) {
//   //do something
// } // nothing is stored, doesnt produce a variable or immediate product
//
// expression produces a value/ some outcome
// e.g. 3 + 4
// var x = 3;

// Lecture: Arrays;

// var names = ['Nero', 'Beckham', 'Ronaldo'];
// var years = new Array(1991, 1975, 1985);
//
// console.log(names[0]);
// names[1] = 'Messi';
// console.log(names);
//
// names.push('Suarez'); //add to end
// console.log(names);
// names.unshift('Neymar'); //add to beginning
// console.log(names);
// names.pop(); //removes last value
// console.log(names);
// names.shift(); //removes first
// console.log(names);
// var zeroth = names.indexOf('Nero');
// console.log(zeroth);
//
// if (names.indexOf('Nero') === 0) {
//   console.log('My name is Nero');
// } else {
//   console.log('My name is not Nero');
// }

// Lecture: Objects (Key-value pairs in no particular order)
// var nero = {
//   name: 'Nero',
//   lastName: 'Siva',
//   yearOfBirth: 1991,
//   isMarried: false,
//   job: 'student'
// };
// // object literal
//
// console.log(nero.name);
// console.log(nero['lastName']);
//
// var xyz = 'isMarried';
// console.log(nero[xyz]); //xyz = isMarried
//
// nero.job = 'Searching for a job'; //data mutation
// console.log(nero.job);
// nero['job'] = 'Programmer';
// console.log(nero.job);
//
// console.log(nero);
//
// var jane = new Object();
// jane.name = 'Jane';
// jane.lastName = 'Smith';
// jane['yearOfBirth'] = 1969;
// jane['job'] = 'retired';
// jane.isMarried = true;
//
// console.log(jane);

// Lecture: Objects and methods

// var nero = {
//   name: 'Nero',
//   lastName: 'Siva',
//   yearOfBirth: 1991,
//   isMarried: false,
//   job: 'student',
//   colours: ['Blue', 'black', 'red'],
//   calculateAge: function(yearOfBirth) {
//     // same as var calculateAge function(yearOfBirth)
//     return 2017 - yearOfBirth;
//   }
// };
//
// console.log(nero);
// console.log(nero.job);
// console.log(nero.colours[0]);

// v1.0
// var nero = {
//   name: 'Nero',
//   lastName: 'Siva',
//   yearOfBirth: 1991,
//   isMarried: false,
//   job: 'student',
//   colours: ['Blue', 'black', 'red'],
//   calculateAge: function() {
//     // same as var calculateAge function(yearOfBirth)
//     return 2017 - this.yearOfBirth;
//   }
// };
//
// console.log(nero.calculateAge());
//
// var age = nero.calculateAge();
// nero.age = age; // giving nero object and age

// v2.0
// var nero = {
//   name: 'Nero',
//   lastName: 'Siva',
//   yearOfBirth: 1991,
//   isMarried: false,
//   job: 'student',
//   colours: ['Blue', 'black', 'red'],
//   calculateAge: function() {
//     // same as var calculateAge function(yearOfBirth)
//     //return 2017 - this.yearOfBirth;
//     this.age = 2017 - this.yearOfBirth;
//   }
// };
//
// nero.calculateAge();
// console.log(nero);
// console.log(nero.age);

// Lecture: loops and iterators
// for loops
// for (var i = 0; i < 10; i++) {
//   // start, end, increment. i = i + 1
//   console.log(i);
// }
//
// var names = ['Beckham', 'Neymar', 'Ronaldo', 'Messi'];
//
// for (var i = names.length - 1; i >= 0; i--) {
//   console.log(names[i]);
// }

// while loops
// var i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }
// for (var i = 1; i <= 5; i++) {
//   console.log(i);
//   if (i === 3) {
//     break;
//   }
// }

// for (var i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i); // will print 1,2,4,5
// }

// Coding challenge 2

// var years = [2000, 1992, 1920];
//
// function printFullAge(years) {
//   var ages = [];
//   var fullAges = [];
//   for (var i = 0; i < years.length; i++) {
//     ages[i] = 2017 - years[i];
//   }
//
//   for (i = 0; i < ages.length; i++) {
//     if (ages[i] >= 18) {
//       console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' and over 18');
//       fullAges.push(true);
//     } else {
//       console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' and under 18');
//       fullAges.push(false);
//     }
//   }
//   return fullAges;
// }
//
// var full_1 = printFullAge(years);
// var full_2 = printFullAge([2012, 1900, 1999]);

// Lecture
