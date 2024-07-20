const fruites = ['mango','apple','banana'];

const myFruites = fruites;

myFruites.splice(1,0,'aman','nikhil');


myFruites.push('Dates');
myFruites.push('Grapes');

console.log(fruites);

const ages = {
    age1:25,
    age2:28,
    age3:29
}

const adultAge = ages;

adultAge.age4 =45;

console.log(ages);
console.log(adultAge);






const userName1 = 'Nikhil';

let userName2 = userName1;
 userName2 = 'aman';

console.log(userName1);
console.log(userName2);



const user1 = {name:'nikhil',age:30};

//spread operator
const user2 = {...user1};


// classical method use for assigning two different variabales.

// Object.assign(user2,user1);




// user2.name='aman';
console.log(user2);


// Object.assign(user1 , userName1);


const peopele = ['vikas','shruti','sikha','abhyutha'];

const peopleFromMp = [];

const peopeles1 = [].concat(peopele);
peopeles1.push('sanatara','ramji');

const peopeles2= peopele.slice();




const peopleFromMp1 = [...peopele]
peopleFromMp1[5] = undefined;

peopleFromMp1.splice(1,0,'nikhil','aman');

Object.assign(peopleFromMp,peopele);
peopleFromMp[4] = null;

console.log(peopleFromMp);
console.log(peopleFromMp1);
console.log(peopele);

console.log(peopeles1);
console.log(peopeles2);

const wood1 = {name1:'banayan',name2:'mango',details:{totalTree:200,firstTree:20},name3:'coconut'};


const wood2 = {...wood1};

const wood3 = JSON.parse(JSON.stringify(wood1));


console.log(wood2);
console.log(wood3);

//shallow copy