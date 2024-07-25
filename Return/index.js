function addiction (a,b){
    let c = a*b;
    return c;
}

function substraction(a,b){
    let c = a-b;
    return c;
}

function arrayCreation(num){

    let array1 = [];
    
    for(i=1;i<=num;i++){
       array1.push(i);
    };
    return array1;
}

function upperCaseText(text){
    return text.toUpperCase();

}

const addictionResult1= addiction(500,2);
const addictionResult2 = substraction(substraction(100,30),substraction(50,30));
const addictionResult3 = arrayCreation(10);
const addictionResult4 = upperCaseText("nikhil");

console.log(addictionResult1);
console.log(addictionResult2);
console.log(addictionResult3);
console.log(addictionResult4);



