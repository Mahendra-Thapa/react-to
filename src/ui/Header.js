import { NavLink } from "react-router-dom"
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = (()=>{
    setShow(prev => !prev);
  })
  
  return (
    <div className="bg-black text-white px-5 flex md:items-baseline sm:items-start items-center justify-between  py-2 sticky top-0 z-10">
      <div>
        <h1 className="mb-2">Web Logo</h1>

      {show &&  <nav className="md:flex  md:flex-col hidden  ">
        <NavLink to="/">Home</NavLink>
        <NavLink to='/about'> About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>} 
      </div>

      <div className="md:flex hidden" > {show ? <button onClick={handleShow}> <HiOutlineX size={25} /> </button> : <button onClick={handleShow} > <HiMenuAlt1 size={25} /> </button> } </div>

      <nav className="space-x-4 md:hidden flex ">
        <NavLink to="/">Home</NavLink>
        <NavLink to='/about'> About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>

    </div>
  )
}
export default Header

