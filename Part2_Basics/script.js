/*var firstName = 'John';
console.log(firstName);
var lastName = 'Smith';
var age = 28;
var fullAge = true;
console.log(fullAge)

var job;
console.log(job);*/

/* Variable mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher'
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job +
', Is he married? ' + isMarried);

age = 'twenty eight';
job - 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job +
', Is he married? ' + isMarried);

var answer = prompt('What is the square root of 9')
console.log('The square root of 9 is' + answer)*/


/*************************************************
 Basic Operators 
 */

/***********************************
 * If/else statements
 

var firstName = 'John';
var civilStatus = 'married';
if (civilStatus === 'married') {
    console.log(firstName + 'is married');
} else {
    console.log("Let us pray for our dear friends")
}

// Boolean Statements does not require '===' operator

var isMarried = true;
if (isMarried){
    console.log(firstName + ' is married!');
} else {
    console.log("Let us pray for " + firstName);
}

*/

/****************************************** 
 *  Boolean Logic */
/*
var firstName = 'John';
var age = 25;

if (age < 13){
    console.log(firstName + ' is a boy')
} else if (age >= 13 && age < 20){
    console.log (firstName + ' is a teenager')
} else if (age >= 20 && age < 30){
    console.log (firstName + ' is a young man')
} else {
    console.log(firstName + ' is an adult')
}
*/

/********************************************
 * Switch Statement and Ternary Operator
 */
/*
var firstName = 'Terry';
var age = 16;
age >= 18 ? console.log(firstName + ' drinks beer.') :
console.log(firstName + ' drinks juice')
// Ternary Operator
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink)

// Switch Statement
var job = 'stripper';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' is a grab driver');
        break;
    case 'student':
        console.log(firstName + ' is a student');
        break;
    default:
        console.log(firstName + ' does something else');
}    

// Switch Statement from Boolean Logic
var age = 18;
switch (true){
    case age < 13:
        console.log(firstName + ' is a kid');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + 'is a young adult');
        break;
    case age >= 30:
        console.log(firstName + 'is a an adult');
        break;
    default:
        console.log('No Age was Given');
}
*/

/***********************************************
 * Truthy and Falsy Values
 */
/*
var height = 0;
if (height || height === 0){
    console.log('Variable is defined');
} else {
    console.log('Variable is not Defined');
}

// Type Coercion is with two ==
// Best Practice is with the strict ===

*/

/**********************************************
 * CODING CHALLENGE 2
 */
/*
var johnAverage, mikeAverage, maryAverage;
var johnAverage = (89+120+500)/3;
var mikeAverage = (89+120+500)/3;
var maryAverage = (89+120+700)/3;

if (johnAverage > mikeAverage && johnAverage > maryAverage){
    console.log('Wowie john won');
} else if(mikeAverage > johnAverage && mikeAverage > maryAverage){
    console.log('Wowie mike won');
} else if(maryAverage > johnAverage && maryAverage > mikeAverage){
    console.log('Wowie mary won');
} else if (maryAverage === johnAverage && maryAverage === mikeAverage && mikeAverage === johnAverage){
    console.log('Its a three way tie');
}
*/

/**************************************************************
 * 
 * Functions 
 */
/*
 function calculateAge(birthYear){
     return 2020 - birthYear;
 }

 var johnAge = calculateAge(1999);
 console.log('John Age is '+ johnAge);

 function yearUntilRetirement(year, firstName){
     var age = calculateAge(year);
     var retirement = 65 - age;
     console.log(firstName + ' retires in ' + retirement + ' years ');
 }

yearUntilRetirement(1999, 'Christopher');

*/

/*********************************************************
 * Function Statements and Expressions
 */
// function declaration
/*function whatDoYouDo(job,firstName){

}*/

// function expresseion
 var whatDoYouDo = function(job,firstName) {
    switch(job) {
        case 'teacher':
            return console.log(firstName + ' teaches kids how to code');
        case 'driver':
            return console.log(firstName + ' drives people');
        case 'designer':
            return console.log(firstName + ' draws designs');
        default:
            return console.log(firstName + ' is a politician');
    }
 }
 whatDoYouDo('teacher','dio brando');