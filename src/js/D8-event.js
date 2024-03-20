

// about thr event and make the function and call it as used for the event


import React from 'react'

const App = () => {
  // const handleClick = () =>{
  //  console.log('hello jii!');
  // }

  const randomNum = (name, age)=>{
  //  const num =  (Math.floor(Math.random() * 100));
  // console.log(`random number is ${num}` );
  console.log(name, age);
  }

  // window.addEventListener('scroll', (e)=>{
  //   console.log('Scrone the page');
  // })

  window.addEventListener('click', (e)=>{
    alert('dont scrole')
  })

  return (
    <div className='p-3 space-y-2'>
    <input  
    // onMouseDown={()=>{
    //   console.log('mouse was down');
    // }}

    // onMouseOver={(e)=>{
    //   console.log('mouse is over');
    // }}

    // onChange={(e)=>{
    //   console.log(e.target.value);
    // }}

    // onKeyDown={(e)=>{
    //   console.log(e.key)
    // }}

    onKeyUpCapture={(e)=>{
      console.log(e.key);
    }}


   
    className='border-4 border-black w-56'  type='text' placeholder='Enter the Text' />
 <br></br> 
    <button

// onClick={handleClick()} // dont use this becaue it call auo before the click the button

// used to call the above function
onClick =  {()=>{
  randomNum('ram', 20);
  console.log('two line code');
}}

    // onClick={()=>{

    //   // call the above function
    //   // handleClick();
    //   randomNum();
    //   // console.log('ram is a good boy');
    //   // alert('please by alerted..!');
    // }}

     // onMouseEnter={()=>{
    //   console.log('enter the number');
    // }}

    className='p-3 bg-black text-white border-red-800 border-4 rounded'>Click me</button>

    <p 
    // onCopy={()=>{
    //   console.log('the text was copied');
    // }}


    >RAM is a common computing acronym that stands for random-access memory. Sometimes it's called PC memory or just memory. In essence, RAM is your computer or laptop's short-term memory. It's where the data is stored that your computer processor needs to run your applications and open your filesAM is a common computing acronym that stands for random-access memory. Sometimes it's called PC memory or just memory. 
    </p>

    </div> 
  )
}

export default App