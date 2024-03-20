
//use to make the object and acces the object value in the html by the html code or in the document

// const App = () => {

//   const age = [];

//   return (
//     <div>

//       {age > 20 ? <h1>alskdsalk</h1> : <h1>iiiiiiiiii</h1>}
//       {age && <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam recusandae iste molestiae tenetur suscipit tempore labore minima voluptate hic pariatur!</p>}

//     </div>
//   )
// }
// export default App

//--------------------------------------------------------

//Object in javascript

// const App = () => {
// const p = () =>{

// }

// const newObj = new Object(); //Making object by using it also
// newObj.title = 'hari';
// newObj.price = 20000;

// const person = {
//   name: 'ram',
//   age: 20,
//   eat: () =>{

//   }
// }

// console.log(newObj);
// console.log(person);

//   return (
//     <div>

//     </div>
//   )
// }

// export default App

//---------------------------------------------------------
// practice for print the object  in the document or in HTML  and function in object is access directly in the HTML

// import React from "react";

// const App = () => {
//   const person = {
//     firstName: "Mahendra",
//     lastName: "Thapa",
//     age: 21,
//     isAdmin: true,
//     fullName: () => {
//         //  return `${this.age}`  //it (this keyword) is not possible in arrow function
//     },

//     totalName: function () {
//         return `${this.firstName} ${this.lastName}`
//     }
//   };


//   console.log(person);

//   return (
//     <div>
      

//       {/* <h1>{person.age} </h1>
//       <h1>{person.firstName}</h1>

//       <h1>{person.isAdmin.toString()}</h1>  */}
//       {/* toString is used for show the boolean value  */}
        
//         {/* <h1>{person}</h1> --Object is not possible to run directly*/}

//         {/* Practice to make an sentance using an above object */}
//         <h1> {`First name of a persion is ${person.firstName} . Last name of a perison is ${person.lastName}. Age of a perison is ${person.age}. Is persion admin = ${person.isAdmin.toString()}`}</h1>
        
//         {/* crashed
//         <h1>{person.fullName()}</h1>  */}


//         {/* //run */}
//         <h1 >{person.totalName()}</h1>
//         </div>

//   );
// };

// export default App;

//---------------------------------------------------------


// const App = () => {

//   const person = {
//     firstName: 'ram',
//     lastName: 'sharma',
//     age: 90,
//     isAdmin: true,
//     eat: () => {

//     }

//   };
// console.log(person)
//   let a;

//   // a = {
//   //   title: 'ram'
//   // }

//   return (
//     <div>

//       {/* {<h1>{a.title}</h1>} */}

//       {/* <h1>{person}</h1> */}

//     </div>
//   )
// }
// export default App


import React from 'react'

const App = () => {

    const movie1 = {
        Title: "The Lion King",
        Year: "2019",
        Runtime: "118 min",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
      };
      const movie2 = {
        Title: "Mowgli: Legend of the Jungle",
        Year: "2018",
        Runtime: "104 min",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
      };
  return (
    <div className='p-4 flex '>
      <section className='p-4 h-96 w-96 font-serif font-bold  text-white  bg-cover bg-[url("https://t4.ftcdn.net/jpg/06/20/20/07/240_F_620200797_I0ZYJrUdM1vRWsQMbQUOkFTPyL4wisYY.jpg")] '>
       
      <h1 className='text-2xl pt-56 font '> {movie1.Title}</h1>
     
      <h1 className='mx-12' >{movie1.Year}</h1>
      <h1 className=' mx-10 ' >{movie1.Runtime}</h1>
      </section>

      <section className='  font-bold font-serif mx-4 h-96 w-96 bg-cover bg-[url("https://www.desktopbackground.org/p/2015/05/05/943526_9-the-jungle-book-hd-wallpapers_3840x2160_h.jpg")]'>
      <h1 className='text-2xl  mt-64 w-72 px-4 text-yellow-600'>{movie2.Title}</h1>
      <h1 className= '  px-24 text-yellow-600'>{movie2.Year}</h1>
      <h1 className='px-20 text-yellow-600'>{movie2.Runtime}</h1>

      
      </section>


    </div>
  )
}

export default App
