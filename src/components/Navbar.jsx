import React from 'react'
import { Outlet, NavLink } from "react-router";
import { FaRegUser } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import Logo from '../assets/images/logo.png'


const Navbar = () => {
  return (
    <div className='bg-primary text-white px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16'>
        <nav className='flex justify-between items-center py-4'>
            <div>
                <img src={Logo} alt="" className='w-20 h-20' />
            </div>
            <div className='hidden lg:flex bg-white py-2  px-12 rounded-4xl justify-between'>
                <NavLink className={({ isActive }) => `px-4 py-0.5 me-4 rounded-xl transition duration-300 ${isActive ? 'text-white bg-primary' : 'text-primary hover:bg-primary hover:text-white'}`} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => `px-4 py-0.5 me-4 rounded-xl transition duration-300 ${isActive ? 'text-white bg-primary' : 'text-primary hover:bg-primary hover:text-white'}`} to="/shop">Shop</NavLink>
                <NavLink className={({ isActive }) => `px-4 py-0.5 me-4 rounded-xl transition duration-300 ${isActive ? 'text-white bg-primary' : 'text-primary hover:bg-primary hover:text-white'}`} to="/about">About</NavLink>
                <NavLink className={({ isActive }) => `px-4 py-0.5 rounded-xl transition duration-300 ${isActive ? 'text-white bg-primary' : 'text-primary hover:bg-primary hover:text-white'}`} to="/contact">Contact</NavLink>
            </div>
            <div className='flex justify-between items-center'>
                <FaRegUser className='text-2xl me-4' />
                <MdShoppingCart className='text-3xl bg-white text-primary rounded-4xl p-1' />
            </div>
          
        </nav>

        <Outlet />
    </div>
  )
}

export default Navbar