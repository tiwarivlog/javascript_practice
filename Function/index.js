

//function defination :--

function details(name,city,age){
    console.log("Hi");
    console.log(`I am ${name || "Nikhil"}`);
    console.log(`from ${city || "satna"}`);

    if(age>0 && age<100){
    console.log(`his age is ${age||25}`);
    }
    else{
    console.log("please enter postive value for age");
    }


    return 10>1;
    
}

//                    funtion call

// const functionResult= details();

// console.log(functionResult);


details("aman","Satna",23);
console.log("*************");
details("mukul" , "rewa",34);
console.log("*************");
details("sidhhant","sahdol",-90);
details();
console.log("*************");

