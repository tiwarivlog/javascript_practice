const numbers1 = [1,2, ['nikhil','atul'],{age:25,city:{city1:'satna',city2:'bilaspur'}}];


numbers1[4] = 'universe';
numbers1[3].place = 'MadhyaPradesh';

numbers1[2][0] = 'MadhyaPradesh';
numbers1[2][1] = 'MadhyaPradesh';

console.log(numbers1);
console.log(numbers1[3].city.city2);
console.log(numbers1[2][0]);

const number2 = numbers1.reverse();

console.log(number2);

const ticTieToe = [

    ['X',null,null],
    [null,null,'O'],
    ['O',null,'X']
]

console.log(ticTieToe[1][2]);