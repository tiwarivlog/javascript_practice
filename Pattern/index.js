

// debugger
const loop =8;
let star = "*";
let j = loop;
let sum = 1;

for(let q =1;q<=(loop-1);q++){
    sum =sum+2;
}

sum =sum-2;
  

for(let i=1;i<=(loop*2-1);i++){

    let space1 ="";

    if(i<=loop){
        for(let p =1; p<=i;p++){
        space1 = space1 + " ";
        }

       if(i===loop){
        j--;
       }

    }

    else {

        for(let k =1; k<=j; k++){
            space1 = space1 + " ";
        }
    }
   
   let space2 ="";

   if(i<loop){
   for(z=1;z<=sum;z++){
     space2 = space2 + " ";
   }
   
  }

  else if(i>loop){
    for(z=1;z<=sum;z++){
        space2 =space2 + " ";
    }
  }
    if(i===loop){
console.log(space1+star+space2);
    }
   else{
console.log(space1+star+space2+star);
   }


if(i<loop){
    
if(i===(loop-1)){
    sum = 1;
}
else {
    sum=sum-2;
}
}



else if(i>loop){
sum = sum +2;
}

if(i>loop){
    j--;
}

};

