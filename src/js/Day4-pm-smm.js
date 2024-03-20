
//find the total using the loop and (maximum and minimum )

//To find the minimum and maximum number
import React from 'react'

const App = () => {

let numbers = [12, 14, 13, 11, 16, 8, 9]

//sum of the array numbers
let sum = 0;
  for (let i = 0; i <= 4; i++) {
      sum = sum + numbers[i];
  }
  console.log('Sum of numbers amoung array is ' + sum);

  // const sumOfNum = document.querySelector('.sum').innerHTML =  `<b>The sum of numbers amoung the array is ${sum}`;


//find the minimum amoung the number
const min = numbers.reduce((prev, curr)=>{
  return prev < curr ? prev : curr;
})
console.log(`The minimum number of amoung array is ${min} `);


// const minimum = document.querySelector('.minimum').innerHTML = `The minimum number amoung array is ${min}`


//Find the maximum amoung the number
const max = numbers.reduce((prev, curr)=>{
    return prev > curr ? prev : curr;
})
console.log(`maximum number amoung array is ${max}`);
// const maximum = document.querySelector('.maximum').innerHTML = `<b>Maximum number amoung array is ${max}<b>`;

  return (
    <div>

     <h1  className='text-3xl font-bold font-serif bg-black text-white p-6 m-2 text-center'>{`The sum of numbers amoung the array is ${sum}`}</h1>

      <h1 className=' text-3xl font-bold font-serif bg-black text-white p-6 m-2 text-center'>{`The minimum number amoung array is ${min}`}</h1>
      <h1  className=' text-3xl font-bold font-serif bg-black text-white p-6 m-2 text-center'>{`Maximum number amoung array is ${max}`} </h1>
    
     

    </div>
  )
}

export default App



