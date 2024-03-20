


//find the total using the loop and (maximum and minimum )-----it is practice by own self which is done by using the ' Dom ' Manuplation



//To find the minimum and maximum number
import React from 'react'

const App = () => {

let numbers = [12, 14, 13, 11, 16, 8, 9]
const allNumbers = document.createElement('h1') 
allNumbers.innerText = 'Numbers = (12, 13, 14, 11, 16, 8, 9)';
const styleNum = document.body.appendChild(allNumbers);

 //style
 styleNum.style.backgroundColor = 'black';
 styleNum.style.color = 'white';
 styleNum.style.fontFamily = 'serif'
 styleNum.style.fontSize = '30px'
 styleNum.style.padding = '10px'
 styleNum.style.margin = '10px'
 styleNum.style.textAlign = 'center';


//sum of the array numbers
let sum = 0;
  for (let i = 0; i <= 4; i++) {
      sum = sum + numbers[i];
  }
  console.log('Sum of numbers amoung array is ' + sum);
  const sumOfNum = document.createElement('h1');
  sumOfNum.innerText = `The sum of above numbers = ${sum}`;
  const styleSum = document.body.appendChild(sumOfNum);

  //style
  styleSum.style.backgroundColor = 'black';
  styleSum.style.color = 'white';
  styleSum.style.fontFamily = 'serif'
  styleSum.style.fontSize = '30px'
  styleSum.style.padding = '10px'
  styleSum.style.margin = '10px'
  styleSum.style.textAlign = 'center';

  // const sumOfNum = document.querySelector('.sum').innerHTML =  `<b>The sum of numbers amoung the array is ${sum}`;


//find the minimum amoung the number
const min = numbers.reduce((prev, curr)=>{
  return prev < curr ? prev : curr;
})
console.log(`The minimum number of amoung array is ${min} `);
const minimum = document.createElement('h1')
minimum.innerText = `The minimum number amoung above numbers is ${min}`;
const styleMin = document.body.appendChild(minimum)

//style
styleMin.style.backgroundColor = 'black';
styleMin.style.color = 'white';
styleMin.style.fontFamily = 'serif';
styleMin.style.fontSize = '30px';
styleMin.style.padding = '10px';
styleMin.style.margin = '10px';
styleMin.style.textAlign = 'center';


// const minimum = document.querySelector('.minimum').innerHTML = `<b>The minimum number of amoung array is ${min}</b>`


//Find the maximum amoung the number
const max = numbers.reduce((prev, curr)=>{
    return prev > curr ? prev : curr;
})
console.log(`maximum number amoung array is ${max}`);

const maximum = document.createElement('h1')
maximum.innerText = `The Maximum number amoung above numbers is ${max}`;
const styleMax = document.body.appendChild(maximum)

//style
styleMax.style.backgroundColor = 'black';
styleMax.style.color = 'white';
styleMax.style.fontFamily = 'serif';
styleMax.style.fontSize = '30px';
styleMax.style.padding = '10px';
styleMax.style.margin = '10px';
styleMax.style.textAlign = 'center';

// const maximum = document.querySelector('.maximum').innerHTML = `<b>Maximum number amoung array is ${max} <b>`;

  return (
    <div>

     {/* <h1  className='sum text-3xl font-bold font-serif bg-black text-white p-6 m-2 text-center'></h1>

      <h1 className='minimum  text-3xl font-bold font-serif bg-black text-white p-6 m-2 text-center'></h1>
      <h1  className='maximum text-3xl font-bold font-serif bg-black text-white p-6 m-2 text-center'></h1> */}
    
     

    </div>
  )
}

export default App



