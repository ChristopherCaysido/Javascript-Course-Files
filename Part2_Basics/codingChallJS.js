var markHeight, markMass, johnHeight, johnMass;
markMass = 55 * 1000;
markHeight = 59;
johnHeight = 57;
johnMass = 70 * 1000;

var johnBMI = johnMass / (johnHeight**2);
var markBMI = markMass / (markHeight**2);

var biggerBMI = johnBMI > markBMI;
console.log("John BMI" + johnBMI);
console.log('Mark BMI' + markBMI);
console.log("Is John's BMI bigger than Mark's?" + biggerBMI);

