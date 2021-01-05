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

/*
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
 */

 /*********************************************************
  * Arrays
  */
/*
  var names = ['Dick','Johnson','Willy'];
  var years = new Array(1988,1920,1911)
console.log(names[0],names[1]);

/* Selecting the element and then changing the value of the element

names[0] = 'Andrew';
console.log(names[0]);
*/
/* CODING CHALLENGE 3 TIP CALCULATOR
Bills were 124, 48, 268 dollars

Tip is 20% when bill is less than 50 dollars
Tip is 15 percent when bill is between 50 and 200
Tip is 10 percent when bill is over 200

Output would be 2 arrays. 
The first array are the computed tips
The second array are the tips + bill

*/
/*
var bills = [124, 48, 268];
var tips = [];
var totalCost = [];
var tipRate = 0;
var n = 0;

function calculateTIP(bills){
    if(bills < 50){
        tipRate = 0.2;
        tips.push(tipRate * bills);
        totalCost.push((tipRate + 1) * bills);
    } else if (bills> 50 && bills < 200){
        tipRate = 0.15;
        tips.push(tipRate * bills);
        totalCost.push((tipRate + 1) * bills);
    } else {
        tipRate = 0.10;
        tips.push(tipRate * bills);
        totalCost.push((tipRate + 1) * bills);
    }
}

calculateTIP(bills[0]);
calculateTIP(bills[1]);
calculateTIP(bills[2]);
console.log(tips,totalCost);
*/

/****************************************
 *Objects and Properties
 */
/* One way of initializing an object */

//  var john = {
//      firstName: 'John',
//      lastName: 'Smith',
//      birthYear: 1990,
//      family: ['Andrew', 'Mark', 'Risu'],
//      job:'Pediatrician',
//      isMarried:false
//  };

 /* getting data from an object */

//  console.log(john.firstname);
//  console.log(john['birthYear']);
//  var x = 'job'
//  console.log(john[x]);

 /* Another way of Declaring an Object
 new Object() syntax*/

//  var Jane = new Object();
//  jane = {
//      firstName:'Janelyn',
//      lastName:'Marcus',
//      birthYear: 1999,
//      family:[john, 'Mark', 'Risu'],
//      job:'Neuroscientist',
//     isMarried:false
//  };

 /* You can also set information in a propery of an object */

// jane.firstName = 'Jane';
// console.log(jane.firstName);

/*****************************************
 * Object Methods
 * Functions in Objects is a Method
 */

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Andrew', 'Mark', 'Risu'],
//     job:'Pediatrician',
//     isMarried:false,
//     calcAge: function(birthYear){
//         return 2020 - this.birthYear; // 'this' syntax can call itself
//     }
// };

// // You can set properties using object methods


// console.log(john.calcAge(john.birthYear));

/******************************
 * CODING CHALLENGE 3
 */

 // John and Mark BMI Comparison
 // Create Objects with their full name, mass and height
 // Add a method for each object to calculate the BMI
 // Console log the highest bmi with respective BMI

// var john = {
//     fullName:'John Joe',
//     height: 153,
//     mass:6700,
//     bmi:0,
//     calculateBMI:function(h,m){
//         this.bmi = m/(h*h);
//     },
// }

// var mark = {
//     fullName:'Mark Hamil',
//     height: 175,
//     mass:7900,
//     bmi:0,
//     calculateBMI:function(h,m){
//         this.bmi = m/(h*h);
//     }
// }


// john.calculateBMI(john.height,john.mass);
// mark.calculateBMI(mark.height,mark.mass);

// console.log(john.bmi);
// console.log(mark.bmi);
// function compareBMI(name1,name2,bmi1,bmi2,){
//     if(bmi1>bmi2){
//         console.log(name1+' has the greater BMI which is ' + bmi1);
//     } else if(bmi2 > bmi1){
//         console.log(name2.fullName+' has the greater BMI which is ' + bmi1);
//     } else if (bmi2 === bmi1){
//         console.log('They have equal BMI');
//     };
// }

// compareBMI(john.fullName,mark.fullName,john.bmi,mark.bmi);

/*************************************************
 * Loops
 */

for (var i = 0; i < 10; i++){
    console.log(i + '\n');
}
// i = 0, 0 < 10 true, log i to console, i++

























