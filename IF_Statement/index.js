let userName = prompt('Enter your name');
let userGender = prompt('Enter your gender');
let userAge = parseInt(prompt('Enter your age'));

if(isNaN(userAge)){
    userAge = 0;

}


if(userName === null){
    userName= "Procoder";

}

if(userGender === "male" || userGender==="Male"){
    userGender= "He";

}

if(userGender === "female" || userGender==="Female"){
    userGender= "She";

}

if(userGender === null){
    userGender= "he/she";

}



console.log(`Name:${userName}`);
console.log(`Age:${userAge}`);
console.log(`Gender:${userGender}`);


//working professional

if(userAge>=25 && userAge<=45){
console.log(`${userName} is working professional`);
console.log(`and ${userGender} is working in IT`);
}


//Learning student

if(userAge >=18 && userAge<=24){
console.log(`${userName} is a student`);
console.log(`and ${userGender} is learning in cs`);
}

//working farmer 

if(userAge>=60){
    console.log(`${userName} is a kisaan`);
}

console.log('Programm ended!!');

