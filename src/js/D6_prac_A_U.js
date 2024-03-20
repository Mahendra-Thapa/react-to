// practice of the map to get/acces the object element from the js in htm code and create the ne object by updating the diffrent position of the array 
// import React from 'react'

// const App = () => {

//   //reduce - it is used to reduce the value of the array and privide the single result
 
// const posts = [
//   {
//   "id": 1,
//   "title": "His mother had always taught him",
//   "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
//   "userId": 9,
//   "tags": [
//     "history",
//     "american",
//     "crime"
//   ],
//   "reactions": 2
// },
// {
//   "id": 2,
//   "title": "He was an expert but not in a discipline",
//   "body": "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
//   "userId": 13,
//   "tags": [
//     "french",
//     "fiction",
//     "english"
//   ],
//   "reactions": 2
// }
// ];



//   return (
//     <div>{
//        posts.map((post)=>{
//        return <div key = {post.id} className='bg-blue-500 m-5'> 
//        <h1 className='space-y-5'>{post.title}</h1>
//        <p>{post.body}</p>
//           </div>
// })        
// }
//     </div>
//   )
// }

// export default App






// reduce method

// import React from 'react'

// const App = () => {

//   // const numbers = [22, 44, 55, 66, 77]
//   // const nio = numbers.reduce((curr, next)=>{
//   //   // console.log(curr);
   
//   //   return curr + next;
//   // }, 0)
//   // console.log(nio);

//   const carts = [
//     { id: 1, name: 'shoes', qty: 2, price: 10 },
//     { id: 2, name: 'mac', qty: 3, price: 20 },
//     { id: 3, name: 'mac', qty: 2, price: 30 },
//   ];

//   const total = carts.reduce((cur, next)=>{

//     //for the only two array of the object 
// // return (cur.price * cur.qty) + (next.price * next.qty)


// //vice versa
// return cur + (next.price * next.qty)

//   }, 0)
//   console.log(total);


 
//   return (
//     <div>App</div>
//   )
// }

// export default App



//array update or add the array
// import React from 'react'

// const App = () => {

//   const carts = [
//         { id: 1, name: 'shoes', qty: 2, price: 10 },
//         { id: 2, name: 'mac', qty: 3, price: 20 },
//         { id: 3, name: 'mac', qty: 2, price: 30 },
//       ];


//       // const updateArray = (index)=>{
//       //   carts[index] = {ni: 90};
//       // }
//       // updateArray(0);
//       // console.log(carts);
     
//       //update the using the map mathod
//       // const newArray = carts.map((cart)=>{
//       //     return cart.id === 1 ? {...cart, name: 'ram'} : cart;
//       // })
//       // console.log(newArray);

//       const updateArray = (index, id) => {
//         const cart = carts.find((cart) => cart.id === id);
//         carts[index] = { ...cart, name: 'lkhjklh' };
//       }
    
    
//       updateArray(0, 1);
    
//       console.log(carts);


//   return (


//     <div>App</div>
//   )
// }

// export default App


//practice 
const App = () => {

    const products = [
      {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        "images": [
          "https://cdn.dummyjson.com/product-images/1/1.jpg",
          "https://cdn.dummyjson.com/product-images/1/2.jpg",
          "https://cdn.dummyjson.com/product-images/1/3.jpg",
          "https://cdn.dummyjson.com/product-images/1/4.jpg",
          "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
        ]
      },
      {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        "images": [
          "https://cdn.dummyjson.com/product-images/2/1.jpg",
          "https://cdn.dummyjson.com/product-images/2/2.jpg",
          "https://cdn.dummyjson.com/product-images/2/3.jpg",
          "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
        ]
      },
      {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
        "images": [
          "https://cdn.dummyjson.com/product-images/3/1.jpg"
        ]
      },
    ];
    
      return (
        
        <div className="flex ">{
           
          products.map((product)=>{
            return <div key = {product.id} className="flex  m-10 bg-gray-300"  >
            
              <div className="p-5">
              <img className="w-56 h-40 bg-cover " src={product.thumbnail}  />
  
              </div>
  
              <div className="w-96  p-2.5">
              <h3 className="text-xl font-semibold ">{product.title}</h3>
              <h3>{product.description}</h3>
              <h3 className="text-2xl font-serif ">{`Price: Rs.${product.price}/-`}</h3>
              <h3 className=" font-serif  text-2xl text-blue-700 font-semibold">{`Discount: ${product.discountPercentage}%`}</h3>
              <h3 className="font-semibold">{`Rating: ${product.rating}`}</h3>
              <h3 className=" font-semibold">{`Stock: ${product.brand}`}</h3>
              <h3  className="font-semibold">{`Category: ${product.category}`}</h3>
             
            </div>
              </div>
              
          })
  
      
          }
        
          </div>
      )
    }
    export default App
  