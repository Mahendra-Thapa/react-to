

//Learn about the distructing of array and object , Concept of class and function component and constructor, (alert, confirm, and promt) 

// //distruct of the array and object
// import React from 'react'

// const App = () => {

// //simple to distruct which is important for now learning 
// // const numbers = [22, 13, 14];
// // const [a, b, c] = numbers; we can set any name in the array for assigning the value of the above data but in object vice-versa (which means we need to write their value)
// // console.log(a, b, c);

// const per ={
//   id: 6,
//   name: 'Ram'
// }
// const {name} = per;
// console.log(name);


// //   const car = {
// //     id: 4,
// //     name: 'tesla'
// //   }
// //   const {id , name : ji} = car;

// //  console.log(id)
// //  console.log(ji);

// //   const persons = [
// //     {id: 1, name: 'Ram', age: 90},
// //     {id: 2, name: 'sita', age: 70}
// //   ]

//   // const [a, b] = persons;
//   // console.log(a);

//   // for distruct the object from the array
//   // const [{  age}, name] = persons;
//   // console.log(name);



//   //Concept of nested array

//   const persons = [
//     {
//       id: 1,
//       habits: [
//         {
//           morningHabits: {
//             morning: 'play badminton'
//           }
//         }
//       ]    
//     }
//   ];


//   // const [{ habits: [{ morningHabits: { morning } }] }] = persons;
//   // console.log(morning);

//   // same as above but some differnet method
//     // const [person] = persons;
//   // const { habits } = person;
//   // const [nio] = habits;
//   // const { morningHabits } = nio;
//   // const { morning } = morningHabits;
//   // console.log(morning);


  
//   return (
//     <div>App</div>
//   )
// }

// export default App




//Concept of class and function component and constructor 

import React from 'react'

class person {
  //no need to write const and another while assigning
 age = 90;

 //function
 person1 () {       
  console.log('Hello')
 }
}

//it is also called instens property and method
class bank {
//use constructor for the asign the name by user 
constructor(name){
  this.bankName = name;
}

  // bankName = 'Prabhu';
  // balance = 0;
  // deposite() {
  //   this.balance += 90;
  // }
}

const App = () => {

  // it is used for the person class
//   const m = new person();
//  console.log(m.age);
//  m.person1();


//  // it's for the bank class
//  const bank1 = new bank();
//  bank1.deposite();
//  console.log(bank1.balance)

//  //it call the all method same as it
//  console.log(bank1.bankName);
//  const bank2 = new bank();
//  console.log(bank2.bankName);
//  const bank3 = new bank();
//  console.log(bank3.bankName);

 //Use constructor for solve the above problem of similar name of bank
 const bank1 = new bank('prabhu')
 const bank2 = new bank('Global bank')
 console.log(bank1.bankName);
 console.log(bank2.bankName);

 

  return (
    <div>App</div>
  )
}

export default App



// import React from 'react'

// // alert('this is dangerous..')
// // window.confirm('need to be confirm');

// // const nio = window.confirm('need to be confirm')
// // console.log(nio);

// // const input = prompt('Get the input value form')
// // console.log(input);


// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App
