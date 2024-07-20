
console.log('coding start');


let arr = [1,2,3,0,0,0,0,3,4,0,0];
let arr1 =[];
let i = 0;

do{ 
    if(arr[i]!==0)
        {    
        console.log(arr1.unshift(arr[i]));
        }

        else{
        console.log(arr1.push(arr[i]));
        }
    i++
}while(i<=(arr.length-1))

console.log(arr1);
console.log('coding end');

//--------------------

// debugger

let k = 4;



do{
  
    let p =0
    let star ="*";
    do{
    star =star + " *";
    p++;
    
    }while(p<3);



console.log(star)
k--;


}while(k>=1);


