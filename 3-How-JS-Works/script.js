///////////////////////////////////////
// Lecture: Hoisting

// //usually do this
// function calculateAge(year) {
//   console.log(2017 - year);
// }
// calculateAge(1965);

// but can do this

// calculateAge(1965);
// function calculateAge(year) {
//   console.log(2017 - year);
// };
// calculate age function is stored in the variable calculateAge
// this is hoisting. In the creation phase of the execution context

// calculateAge(1965);
// function calculateAge(year) {
//   console.log(2017 - year);
// }
//
// //retirement(1990); // does not work because it says retirement is not a function
//
// var retirement = function(year) {
//   // this is a function expression not function declaraion. Hoisting only works for a function declaration
//   console.log(65 - (2017 - year));
// };
// retirement(1990);
//
// //hoisting in variables:
// console.log(age); // will say undefined. In the creation phase, JS scans all code and assigns all variables to undefined...then defines them depending on...
// var age = 25;
// console.log(age);
//
// if you just had and not the above
// console.log(age)
// its says age is not defined because it is not undefined
// console.log(age);
// var age = 23; //age variable is stored in the global execution context object
//
// function foo() { // foo gets its own execution context object
//   console.log(age);
//   var age = 65; // different objects defined in the execution context object of the foo function
//   console.log(age);
// }
//
// foo();
// console.log(age);
// prints
// 65
// 23
// firstly age and age can exist because they are defined in different contexts
//
//
//

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword
