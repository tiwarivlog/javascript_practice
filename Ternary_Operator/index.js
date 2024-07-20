const age = 55;
const gender = prompt('Please enter your gender');

// debugger
const genderResult = (gender.charAt(0)==='m'||gender.charAt(0)==='M') ? 'He' : 'she';
const ageResult = age>40 ? 'is working professional' :'is student';
const ageResult1 = 55>400 ? 'first is bigger than second' : 'second is bigger than first';


console.log(`${genderResult} ${ageResult}`);
console.log(`${ageResult1}`);

const multipleCondition = 0 ? 'nikhil':'moolchand' ? 10 : 0;