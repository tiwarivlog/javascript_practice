let arr1 = [1,2,['nikhil','aman','atul'],{age:23,address:{city:'satna'}}];


console.log(arr1.shift());
console.log(arr1);
console.log(arr1.unshift(1));
console.log(arr1);
console.log(arr1.indexOf(1));
console.log(arr1[2].indexOf('aman'));
console.log(arr1[2].includes('nikhil'));



const evenNumbers = [0,2,4,6,8,15,18,17,20];
const animal = ['Elephant','horse','monkey','lion','lion',2,3,[34,30,'nikhil']]
const animal1 = ['Fox',[1,2,3,4]];

const sort1 = ['aman', 'radha','Aman' ,'Radha','WINTER'];

const slice1 = [1,2,9,8,6,4,3];

const splice1 = [2,45,89,'nikhil','aman'];

const index1 = animal.indexOf('lion');
const index2 = evenNumbers.indexOf(8);

const includesElement = animal.includes('horse');
const includesElement1 = animal.includes('Fox');


const reverse1 = animal.reverse();
// const reverse1 = animal[7].sort();







evenNumbers.shift();
console.log(evenNumbers);
evenNumbers.unshift(6);
evenNumbers.unshift(6);


const concat1 = evenNumbers.concat(animal,animal1);
const sort2 = sort1.sort();
const slice2 = slice1.slice(1,7);
const splice2 = splice1.splice(2,2,234,'nikhil');

console.log(evenNumbers);
console.log(concat1);
console.log(index1);
console.log(index2);
console.log(includesElement);
console.log(includesElement1);
console.log(reverse1);
console.log(sort2);
console.log(slice2);
console.log(splice2);
console.log(splice1);



