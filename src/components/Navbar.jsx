import {useState} from 'react'
import { Outlet, NavLink } from "react-router";
import { FaRegUser } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { RiMenuFoldFill, RiMenuFold2Fill } from "react-icons/ri";
import Logo from '../assets/images/logo.png';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div className='relative bg-primary text-white px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16'>
        <nav className='flex justify-between items-center py-4'>
            <div>
                <img src={Logo} alt="" className='w-16 h-16' />
            </div>
            <div className='hidden lg:flex bg-white py-2  px-12 rounded-4xl justify-between'>
                <NavLink className={({ isActive }) => `px-4 py-0.5 me-4 rounded-xl transition duration-300 ${isActive ? 'text-white bg-primary' : 'text-primary hover:bg-primary hover:text-white'}`} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => `px-4 py-0.5 me-4 rounded-xl transition duration-300 ${isActive ? 'text-white bg-primary' : 'text-primary hover:bg-primary hover:text-white'}`} to="/shop">Shop</NavLink>
                <NavLink className={({ isActive }) => `px-4 py-0.5 me-4 rounded-xl transition duration-300 ${isActive ? 'text-white bg-primary' : 'text-primary hover:bg-primary hover:text-white'}`} to="/about">About</NavLink>
                <NavLink className={({ isActive }) => `px-4 py-0.5 rounded-xl transition duration-300 ${isActive ? 'text-white bg-primary' : 'text-primary hover:bg-primary hover:text-white'}`} to="/contact">Contact</NavLink>
            </div>
            <div className='flex justify-between items-center'>
                <FaRegUser className='text-2xl me-4' />
                <MdShoppingCart className='text-3xl me-4 lg:me-0 bg-white text-primary rounded-4xl p-1' />
                {
                    isOpen ? (
                        <RiMenuFold2Fill onClick={toggleMenu} className='text-2xl lg:hidden' />
                    ) : (
                        <RiMenuFoldFill onClick={toggleMenu} className='text-2xl lg:hidden' />
                    )
                }
            </div>
        </nav>

        {isOpen && (
            <div className='relative w-full top-0 left-0 right-0 lg:hidden flex justify-around items-center bg-white text-primary py-4 rounded-xl transition-all duration-300'>
                <NavLink className={({ isActive }) => `px-2 md:px-4 py-0.5 rounded-xl transition duration-300 ${isActive ? 'text-white bg-primary' : 'text-primary hover:bg-primary hover:text-white'}`} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => `px-2 md:px-4 py-0.5 rounded-xl transition duration-300 ${isActive ? 'text-white bg-primary' : 'text-primary hover:bg-primary hover:text-white'}`} to="/shop">Shop</NavLink>
                <NavLink className={({ isActive }) => `px-2 md:px-4 py-0.5 rounded-xl transition duration-300 ${isActive ? 'text-white bg-primary' : 'text-primary hover:bg-primary hover:text-white'}`} to="/about">About</NavLink>
                <NavLink className={({ isActive }) => `px-2 md:px-4 py-0.5 rounded-xl transition duration-300 ${isActive ? 'text-white bg-primary' : 'text-primary hover:bg-primary hover:text-white'}`} to="/contact">Contact</NavLink>
            </div>      
        )}

        <Outlet />
    </div>
  )
}

export default Navbar