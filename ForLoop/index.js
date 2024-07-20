console.log('program has started');

// var name1 = 'nikhil';

// var arr1 =name1.split("");

// var arr2 = arr1.reverse();

// var arr3 = arr2.join();

// var arr4 = arr3.replaceAll(',','')

// console.log(arr4);



// debugger

var arr1 = ['nikhil','vishal','aman'];

for (let i = 0; i<=2;i++){
console.log(`${'Coder '+arr1[i]}`);
}

console.log('program ended');

var arr2 =[];

for (let i =0; i<=10; i++){

    if(i%2===1){
        console.log(arr2.push(i));
    }
}

console.log(arr2);


// var pailaindrom = 'deed';

// var string1 = pailaindrom.toString();

// var split1 = string1.split("");

// var reverse1 = split1.reverse();

// var joinToString = reverse1.join();



// var removeAllSpace = joinToString.replaceAll(",",'');

// var string2 = removeAllSpace.toString();

// console.log(string1);
// console.log(string2);



// if(string1 == string2){
//     console.log(`${string1} is pailndrom`);
// }

sum = 0;
for(let i =0; i<=20;i++){
    if(i%2===0){
        
     sum =sum +i;   
    }
}
console.log(sum);




for(let i = 3 ; i<=30;i++)
    {
    if(i%3===0){
        console.log(i);
    }
}


const Number1 = [1,2,3,4,0,0,0,4,5,1,0,0,0,1,2,3];

const Number2 =[];

for(let i =0; i<=(Number1.length-1);i++){

    if(Number1[i]!==0){
        console.log(Number2.unshift(Number1[i]));
    }
    
    else {
        console.log(Number2.push(Number1[i]));
    }
}

console.log(Number2);

// pattern question:--

let alphabet = [];

for (let i = 65; i<=90;i++){
     
    console.log(alphabet.push(String.fromCharCode(i)));
  
}


console.log(alphabet);


let innerNum = 5;

for(let i=1; i<=5;i++){

let star ='*';
let space ="";


   for(let j=innerNum;j>0;j--){
    space = space + " "
    }

console.log(`${space}${star.repeat(i)}`);
 innerNum--   

}

// debugger


const input = 10;
let j = 1
let l = input;

for (let i = 1; i<=(input*2-1);i++){
     let star ='*';
     let space = "";

     if(i<=input){
        for(let k=1;k<=l;k++){
       space = space + " ";
     }
    }
     else{
        for(let p =1; p<=l;p++){
            space = space + " ";
        }
     }

    if(i<=input){
     console.log(`${space}${star.repeat(j)}`);
     if(i!=input){j = j+2;
     l--;
     }
     else{
        j=j-2;
        l++

     }
    }


    else{
     console.log(`${space}${star.repeat(j)}`);
     j = j-2;
     l++;
    }
}





