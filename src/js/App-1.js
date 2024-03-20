// in hader file

// import React from 'react'


// const Header = () => {
//   return (
//     <div>
//        <h1>Hader is done</h1>

//     </div>
//   ) 
// }

// export default Header

//--------------------------------------------


//in data.js file

//directly export
// export const person ={
//     name : 'ram',
//     age : '30'
// }

// const person ={
//     name : 'ram',
//     age : '30'
// }
// const showAlert = ()=>{
//     alert('This is a alert function')
// }
// // for single
// // export default person

// //for array / multiple
// export default [person, showAlert]

//for onject
// export default {a:personalbar, b:showAlert}

// ----------------------------------------


//in homepage 

// import React from 'react'

// const HomePage = () => {
//   return (
//     <>
//         <h1>It is a home page </h1>
     
//     </>
//   )
// }

// export default HomePage


//-------------------------------------------

import React from 'react'
import Header from "./Cmponents/Header";
import HomePage from "./Pages/HomePage";

// for single
// import person from './Dummy.js/data';

//for array
// import jio from './Dummy.js/data.js'


const App = () => {

//for single
//  console.log(person)

// for multyple
// console.log(jio)

//for directly
// console.log(person)

  return (
    <div>
    
      <Header />
      <h1>{'This is a main app pages'}</h1>
      <HomePage />
   
    </div>
  )
}

export default App