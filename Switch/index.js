const dayNumber = 5;

const userName = 'nikhil';

const userAge = 26;



// debugger

switch (dayNumber){
    case 0:
    console.log('Today is sunday');
    break
    case 1:
        console.log('Today is monday');
    break
    case 2:
    console.log('Today is tuesday');
    break
    case 3:
    console.log('Today is wednesday');
    break
    case 4:
    console.log('Today is thursday');
    break
    case 5:
    console.log('Today is friday');
    break
    case 6:
    console.log('Today is saturday');
    
    default:
    console.log('Please enter a valid number');
    
}


switch (true){

    case userAge<=5:
        console.log(`${userName} is a child`);
        break
    case userAge>=16 && userAge<=24:
        console.log(`${userName} is a college student`);
        break
    case userAge>=6 && userAge<=15:
        console.log(`${userName} is a school student`);
        break
    case userAge>=25 && userAge<=45:
        console.log(`${userName} is a working professional`);
        break

    default:
        console.log(`${userName} is a retiered person`);
   
}





console.log('Programm ended');
