import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import user from '../../assets/images/user.png'
import { Link } from 'react-router-dom'
import { FaRegUser, FaBars } from "react-icons/fa";

const Header = ({ active }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const nav = [
        { name: 'Home', pathName: '/' },
        { name: 'How It Works', pathName: '/' },
        { name: 'Our Chefs', pathName: '/' },
        { name: 'Book', pathName: '/' },
    ];

    return (
        <div className='flex md:flex-row justify-between items-center flex-wrap'>
            <div>
                <img src={logo} alt="my logo" />
            </div>
            <div className={`w-full md:w-auto order-4 md:order-none md:flex mt-3 ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-[35px] lg:space-x-20  transition-all duration-800 ease-in-out`}>
                {nav.map((item, index) => (
                    <Link key={index} className={item.name === active ? 'font-bold border-b-4 pb-2 border-b-[#FF9E2C]' : 'text-[#1F1F1F80]/50 hover:text-[#1F1F1F80]/90'} to={item.pathName}>{item.name}</Link>
                ))}
            </div>
            <div className='flex space-x-4 items-center'>
                <FaRegUser className='text-[#1F1F1F80]/50' size={20} />
                <Link className='text-[#1F1F1F80]/50 hover:text-[#1F1F1F80]/90' to="/">Sign Up</Link>
                <span> | </span>
                <Link className='text-[#1F1F1F80]/50 hover:text-[#1F1F1F80]/90' to="/">Login</Link>
            </div>
            <div className="md:hidden">
                <FaBars className='text-[#1F1F1F80]/50 cursor-pointer' size={20} onClick={toggleMenu} />
            </div>
        </div>
    )
}

export default Header
