
//Learn about the foreach, filter, find and map 


// import React from 'react'

// const App = () => {

//   // const num = [12, 13, 14, 15, 16, 17, 18];
//   // num.splice(3, 1) // it is used for delet the number from the array
//   // console.log(num)


//   const users = [
//     {id:1, name: 'ram', age: 90, gender: 'male'},
//     {id:2, name: 'sita', age: 70, gender: 'female'},
//     {id:3, name: 'hari', age: 40, gender: 'male'},
//     {id:4, name: 'radha', age: 50, gender: 'female'}
//   ];


//   //for each can not br rendered in document or website
//   let ages = 0;
// users.forEach((user, i ) => {
//  ages = ages + user.age;
// });
// console.log(ages);

// const carts = [
//   { id: 1, name: 'clothes', qty: 2, price: 9000 },
//   { id: 2, name: 'bags', qty: 3, price: 6000 },
// ];

// let total = 0
// carts.forEach((prc, i) => {
//   total = total  + (prc.qty * prc.price) ;
// });
// console.log(total);

//   return (
//     <div>App</div>
//   )
// }

// export default App





//--------------------------------------------------------

// import React from 'react'

// const App = () => {

//   const users = [
//         {id:1, name: 'ram', age: 90, gender: 'male'},
//         {id:2, name: 'sita', age: 70, gender: 'female'},
//         {id:3, name: 'hari', age: 40, gender: 'male'},
//         {id:4, name: 'radha', age: 50, gender: 'female'}
//       ];

//       //find method --> it is used to find the valuse from the array

//       // const findRam = users.find((user)=>{
//       //       return user.id ===  3;
//       // });
//       // console.log(findRam);

//       //filter --> it filter the value form the array

//       // const findRam = users.filter((user)=>{
//       //         return (user.age > 30 && user.age < 60) 
//       //   });
//       //   console.log(findRam);

//   return (
//     <div>App</div>
//   )
// }

// export default App

//-------------------------------------------------
const App = () => {

    const numbers = [11, 22, 33, 44];
  
    const users = [
      { id: 1, name: 'ram', age: 90, gender: 'male' },
      { id: 2, name: 'rita', age: 70, gender: 'female' },
      { id: 3, name: 'hari', age: 60, gender: 'male' },
      { id: 4, name: 'sita', age: 50, gender: 'female' },
  
    ];
    
    //it is used for getting the single value form the array of object
    const firstUserName = users[0].name;
    console.log(firstUserName);  
  
    const dat = users.map((user) => {
      user.val = `${user.name.toUpperCase()} ${user.name}`;
      return user;
    })
  
  
  
  
    return (
      <div>
        {users.map((user, i) => {
          return <div key = {user.id}>
            <h1>{user.age}</h1>
            <p>{user.name}</p>
          </div>;
  
        })}
  
      </div>
    )
  }
  export default App