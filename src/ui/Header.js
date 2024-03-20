

import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-black text-white px-5 flex items-baseline justify-between py-2">
      <h1>Web logo</h1>
      <nav className="space-x-10">
        
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About Us</NavLink>
        <NavLink to='/contact'>Contact Us</NavLink>
        <NavLink to='/service'>Service</NavLink>
      
        
      </nav>
    </div>
  )
}
export default Header