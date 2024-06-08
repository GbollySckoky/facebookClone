"use client";
import React from 'react'
import Image from 'next/image'
import facebook from '../../assets/facebook.png'
import { FaGamepad } from "react-icons/fa6";
import { MdOndemandVideo } from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";
import { CiShop } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CgMenuGridR } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useState } from 'react';


const Header = () => {
    const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className='flex items-center justify-between bg-[#242526] py-[15px] fixed w-full'>
        <div className='flex items-center '>
            <Image
            src={facebook}
            width={40}
            height={40} />
            
            <div className='flex items-center relative ml-[20px] shadow-full'>
                <span className='absolute ml-1 cursor-pointer '> <CiSearch size={20} /> </span>
                <input 
                    type="text" 
                    placeholder='search facebook'
                    className='outline-none rounded-full bg-[#3A3B3C] pl-7 py-[8px]'
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
        </div>

        <div className='flex items-center space-x-[90px]'>
            <span className='text-white'> <BiHomeAlt size={30}  /> </span>
            <span className='text-white'> <MdOndemandVideo size={30}  /> </span>
            <span className='text-white'> <CiShop size={30}  /> </span>
            <span className='text-white'> <FaGamepad size={30}  /> </span>
        </div>

        <div className='flex items-center space-x-4'>
            <span className='bg-[#3A3B3C] text-white p-2 rounded-full'> <CgMenuGridR size={20} /> </span>
            <span className='bg-[#3A3B3C] text-white p-2 rounded-full'> <FaFacebookMessenger size={20} /> </span>
            <span className='bg-[#3A3B3C] text-white p-2 rounded-full'> <IoIosNotificationsOutline size={20} /> </span>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
    </div>
  )
}

export default Header