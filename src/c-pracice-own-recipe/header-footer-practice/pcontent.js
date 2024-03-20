import React from 'react'
import Homepage from './Homepage';

const content = (content) => {
  // console.log(main);
  const{main} = content;

    // console.log(Homepage);
  return (
    <div className='bg-red-400 h-auto  col-span-3 px-8 py-20'>
    <h2 className='text-3xl font-serif font-bold'>{main.title}</h2>
    <h2 className='text-2xl text-justify p-4'>{main.details}</h2>
        {/* <a href=''>It is the content page</a> */}
    </div>
  )
}

export default content