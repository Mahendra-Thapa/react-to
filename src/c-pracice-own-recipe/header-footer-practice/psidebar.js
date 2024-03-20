import React from 'react'

const Sidebar = (side1) => {
// console.log(side);

const{side} = side1;
console.log(side1)

  return (
    <div className='bg-orange-500 h-auto py-16'>
    <ul> {side.map((side, index)=>{
      return <ol className='p-4 text-2xl font-bold' key={index}><a>{side}</a></ol>
    })}</ul>
        {/* <ol>
       <li> <a href=''>It is about the side bar</a></li>
       <li>  <a href=''>It is about the side bar</a></li>
       <li> <a href=''>It is about the side bar</a></li>
       <li> <a href=''>It is about the side bar</a></li>
       <li> <a href=''>It is about the side bar</a></li>
        </ol> */}
    </div>
  )
}

export default Sidebar