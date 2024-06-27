const userAge1 = 25;


// and operator 
console.log((userAge1>10)&&(userAge1>20));
console.log((userAge1<10)&&(userAge1>20));

//or operator 
console.log((userAge1<10)||(userAge1<=25));
console.log((userAge1<10)||(userAge1<=5));



//not operator
console.log(userAge1!=35);


//truthy and falsy values

const orResult = 0||2;
const andResult = 0&&2;


console.log(orResult);
console.log(andResult);
console.log(Boolean(andResult));
console.log(Boolean(orResult));



//Q AND A

const andResult2 = '' && 'Hello'
const orResult2 = '' || 'Hello'

const andResult3 = 'Hello' && null;
const orResult3 =  'Hello' && null;

const andResult4 = 'Hello' && 8+4;
const orResult4 =  'Hello' && 1+2*8/3;

const andResult5 = 'Hello' && console.log('hello');
const orResult5 =  'Hello' && 9+5;


// not operator

const notResult = 6;
console.log(!(notResult> 6));
console.log(!(notResult===6));


console.log(!!notResult);



