//Learn about the loop, 'find fizzBuzz', pop(), push(), shift(), unshift(), remove(), replece()

 

// import React from 'react'


// const App = () => {
//   const person ={
//     name: 'ram',
//     age: 90,
//     nio : {li: 'hi'}
//   }

//   //Object distructing day-3 (revise- it means to use of single code in differten time)
//   const { name, nio: { li } } = person;

//   return (
//     <div>
//        <h1 className='text-red-700 font-bold uppercase text-4xl bg-black '>{name}</h1>
//        <p>{li}</p>
//     </div>
//   )
// }

// export default App



//While loop

// import React from 'react'
// const App = () => {

// let age = 1;
// while (age < 20) {
//   console.log('age is less');
//   console.log(age);
//   age++;

// }
// console.log('after while loop');



//   return (
//     <div></div>
//   )
// }

// export default App


// practice to find the even or odd
// import React from 'react'

// const App = () => {

//   let i = 1;
// while (i <= 10) {
//   if (i % 2 === 0) {
//     console.log(i + " is even");
//   } else {
//     console.log(i + " is odd");
//   }
//   i++;
// }

//   return (
//     <div>App</div>
//   )
// }

// export default App



//fizz buzz find using the loop
// import React from 'react'

// const App = () => {

// const array = [12, 13, 14, 15, 16, 9]
// for (let i = 0; i < array.length; i++) {
//     if(array[i] % 5 === 0 && array[i] % 3 === 0) {
//       console.log( array[i]+' fizz buzz');
//     }
//     else if (array[i]% 3 === 0){
//       console.log(array[i] + ' fizz');
//     }
//     else{
//       console.log(array[i]);
//     }
    
//   }
  


//   return (
//     <div>App</div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
 
//  const person = ['ram', 'shya', 'hari', 'sita'] 
//  const newPersion = ['jon', 'don'];

// //  const n = [11, 22].concat(person) 
// //  console.log(n);
//  console.log(person);
// // person[0] = 'dhsgjdsf';
// // person.pop();
// // person.push('sita')
// console.log(person.slice(0,3));



//   return (
//     <div>app</div>
//   )
// }

// export default App




// import React from 'react'

// const App = () => {
//   const numbers = [ 1, 12, 13, 14, 15]
//   // for (let n in numbers) {
//   //      console.log(n)
      
//   //   }

//   for (let n of numbers) {
//     n++;
//   }
  
//   return (
//     <div>App</div>
//   )
// }

// export default App