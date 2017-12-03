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

yearsUntilRetirement('Nero', 1991);
yearsUntilRetirement('The Queen', 1927);
