
// let info = 'this is nikhil';
// info += ' tiwari';

// console.log(info.replace(info.charAt(3), 'r'));


const fruitsCollection = ['Apple','Banana','Grapes','Dates'];


fruitsCollection[2] = 'mango';
fruitsCollection[3] = 'coconut';
fruitsCollection[4] = 'grapes';
fruitsCollection[5] = null;
fruitsCollection[6] = 99;
fruitsCollection[7] = 3>5;
fruitsCollection[16] = 3>5;

console.log(fruitsCollection);
console.log(fruitsCollection[2]);
console.log(fruitsCollection[3]);
console.log(fruitsCollection[4]);
console.log(fruitsCollection[14]);
console.log(fruitsCollection.length);


const fruitInformation = ['apple','mango','banana','dates',{name:'nikhil',timeLimit:{age:78}},[1,[1,null,undefined,[2>3,[9>8]]],null,undefined]]

console.log(fruitInformation[4].timeLimit.age);
console.log(fruitInformation[5][0]);
console.log(fruitInformation[5][1][3][1]);
console.log(fruitInformation[9]);


const rainbowColour = ['Red','Orange','Yellow','Green' ,'Blue', 'Indigo' ,'Violet'];

const studentName = ['aman','nikhil','atul'];
studentName[studentName.length]='rishab';
studentName[studentName.length]='rishab';
studentName.push('deepak',2,null,undefined,'moolchand');
studentName.pop();
studentName.pop();

console.log(studentName);




const info = 'Helli i am nikhil';

const compare1 = [1,2,3,4,5];
const compare2 = compare1;

let compare3 =[1,null,undefined];
let compare4 =compare3; 
compare4.push('nikhil');





compare1.push('nikhil');
console.log(compare1);
console.log(compare2);
console.log(compare3);
console.log(compare4);

let num1 = 3;
let num2 = num1;
num2 = 5;
console.log(num1);
console.log(num2);



// console.log(info.replace(info[6], 'm'))
 
 
