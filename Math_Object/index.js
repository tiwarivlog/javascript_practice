
//reminder operator

let reminder = 13;

console.log(reminder%2);

//Exponentiation Operator: 

console.log(reminder**4);

//addition operator 

console.log(reminder+1)

//substraction operator

console.log(reminder-1)

//multipiction operator

console.log(reminder*3)

//division operator

console.log(reminder/5)

// math object property

console.log(reminder*Math.PI)
console.log(reminder*Math.E)
console.log(reminder*Math.SQRT2)
console.log(reminder*Math.SQRT1_2)


//math object methods

console.log(Math.sqrt(25));
console.log(Math.pow(2,8));
console.log(Math.floor(2.8));
console.log(Math.floor(-1.2));
console.log(Math.ceil(2.2));
console.log(Math.ceil(-1.2));
console.log(Math.round(-1.4));
console.log(Math.round(-1.6));
console.log(Math.round(1.6));
console.log(Math.round(1.2));
console.log(Math.random()*5);

console.log(Math.pow(Math.random()*2,Math.floor(Math.random()*4)));

//assignment 

console.log(Math.floor((Math.random()*11) + 20));



// math keyword in javascript 

console.log(5/0);
console.log(-5/0);

let height = +prompt(`Enter height of rectangle`);


let width = +prompt(`Enter width of rectangle`);


console.log(height*width);

document.write(`${height*width} Rectangle area`);