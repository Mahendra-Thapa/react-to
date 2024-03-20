import React from 'react'

const Header = () => {
  return (
    <div className='bg-green-800 p-12 grid grid-cols-4 font-serif text-3xl font-bold text-white '> 
        <h1 className='col-span-3'>Web logo</h1>
        <nav className='space-60 space-x-14'>
            <a href=''>Home</a>
            <a href=''>About</a>
        </nav>
    </div>
  )
}

export default Header