const user = {
    firstName: 'Adarsh',
    lastName: 'Singh',
    pata: {
      city: 'Bangalore',
      pinCode: 876876,
      state: 'Karnataka',
      moreDetails: {
        population: 9798897897,
        area: '787 sq km',
      },
    },
    age: 15,
    isGraduate: false,
  }
   


  delete user.firstName;
  Object.seal(user);

  delete user.pata;
  user.lapata=18;



  user.lastName = 'Nikhil';
  Object.freeze(user);
  user.lastName = 'atul';

  delete user.lastName;
  user.nikhil =45;



  console.log(user);
  console.log('isGraduate' in user);

  
//  user= {};

  let userName = 'Nikhil';

  let details = { userName:'aman'};
   details = { userName:'amul'};
