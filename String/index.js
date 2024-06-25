const message = 'Hello World! my name is nikhil';
const upperCase = message.toUpperCase();
const lowerCase = message.toLowerCase();

const faltuMessage = '  i am nikhil  .    ';
const finalMessage = faltuMessage.trim();

const chainMessage = faltuMessage.trim().toUpperCase();

const finalTrimStart = faltuMessage.trimStart();
const finalTrimEnd = faltuMessage.trimEnd();

//method without argument

console.log(upperCase);
console.log(lowerCase);
console.log(finalMessage);
console.log(chainMessage);
console.log(finalTrimStart);
console.log(finalTrimStart);


//methods with argument

const include = "I am nikhil";

const addString = " , i am from satna";

const lastFourDigit = '1234';


console.log(include.includes('nikhil'));

console.log(include.indexOf('nikhil'));

console.log(include.replace('nikhil', 'aman'));

console.log(include.replaceAll('i', 'I'));

console.log(include.concat(addString,' ',message));

console.log(lastFourDigit.padStart(16,'*'));

console.log(lastFourDigit.padEnd(16,'*'));

console.log(include.charAt(6));

console.log(include.charCodeAt(6));

console.log(include.split(' '));



//string template literal


const password = '2245';

const balance = 23456;

// const info = `my password is`.concat(' ',password);
const info = `my password is ${password.padStart(16,'*')} & my balance is $${balance}`;

console.log(info);




const balance1 = 1234567899876543;
const balance2 = balance1.toString();

const balance2Length = balance2.length;

const fourthChar = balance2.charAt(balance2Length-1);
const thirdChar = balance2.charAt(balance2Length-2);
const twoChar = balance2.charAt(balance2Length-3);
const oneChar = balance2.charAt(balance2Length-4);

// const concatLast = oneChar.concat('2345');

const lastFourthdig = `${oneChar}${twoChar}${thirdChar}${fourthChar}`;


console.log(lastFourthdig.padStart(16,'*'))

























