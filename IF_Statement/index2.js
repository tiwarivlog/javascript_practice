let Price1 = +prompt('please enter user price of apple');
let Price2 = +prompt('please enter user price of banana');


if(Price1 === 0 && Price2=== 0){

    console.log('Apple and banana prices can not be zero')
}

if(Price1 === 0 && (Price2>0&&Price2<=100)){

    console.log('Apple price can not be zero')
    console.log('Banana price is normal')
}
if(Price1 === 0 && (Price2>100)){

    console.log('Apple price can not be zero')
    console.log('Banana price is high')
}

if((Price1>0&&Price1<=100) && Price2 === 0){

    console.log('Apple price is normal')
    console.log('banana price can not be zero')
}
if((Price1>100) && Price2 === 0){

    console.log('Apple price is high')
    console.log('banana price can not be zero')
}

if((Price1>0&&Price1<=100) && (Price2>0&&Price2<=100)){

    console.log('Apple price is normal')
    console.log('banana price is normal')
}

if(Price1>100 && Price2>100){

    console.log('Apple price is high')
    console.log('banana price is high')
}



console.log('Programm ended!!!');
