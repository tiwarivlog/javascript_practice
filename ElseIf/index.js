let userName = prompt('Enter your name') || 'procoddr';
let userAge = +prompt('Enter your age');
let userGender = prompt('Enter your gender') || 'he/she';


console.log(userName);
console.log(userAge);
console.log(userGender);

// debugger

if(!userAge){
    userAge = 22;
    console.log(`userage : ${userAge}`);
} else if(userAge>0){ 
    console.log(`userage : ${userAge}`);
} else {
    console.log(`Please enter a valid age`);
}


// if(userAge>=18 && userAge<=24){
//     console.log(`${userName} is college student.\"age is ${userAge}.\"`);
// }else if(userAge>=5 && userAge<=16){
//     console.log(`${userName} is school student.\"age is ${userAge}.\"`);
// }else if(userAge>=24 && userAge<=63){
//     console.log(`${userName} is working professional.\"age is ${userAge}.\"`);
// }else if(userAge>63){
//     console.log(`${userName} is retired.\"age is ${userAge}.\"`);
// }else {
//     console.log(`Please enter valid number`);
// }

console.log("programm ended");

