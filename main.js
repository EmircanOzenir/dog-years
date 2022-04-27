//Step1
//  Created a variable named myAge and set it equal to my age as a number.

var myAge = 26;

//Step2
//  Created a variable named earlyYears and save it to value 2. This saved value may change.

var earlyYears = 2;

//Step3
// Multiplied the value saved to earlyYears by 10.5 and reassigned it to earlyYears.

var earlyYears =  earlyYears * 10.5;

//Step4
//  Subtracted 2 from myAge. Set the result equal to a variable called laterYears.

var laterYears = myAge - 2;

//Step5
//  Multiplied laterYears by 4 and calculated the number of dog years accounted for by my later years.

laterYears = laterYears*4;

//Step6
//  checked earlyYears and laterYears.

console.log(`Early years: ${earlyYears} , Later Years: ${laterYears}`);

//Step7
//  Added earlyYears and laterYears, and stored that in a variable named myAgeInDogYears.

var myAgeInDogYears = earlyYears + laterYears;

//Step8
//  Used string method. Wrote my name as a string, called its built in method toLowerCase()and stored the result in variable called myName.

var myName = 'Emircan'.toLowerCase();

//Step9
//  Consoled the result and used string interpolation to display the values.

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);