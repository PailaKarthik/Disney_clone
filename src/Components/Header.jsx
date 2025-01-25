import {React, useState} from 'react'
import logo from './../assets/Images/logo.png'
import { AiFillHome,AiOutlineSearch,AiOutlinePlus,AiFillStar } from "react-icons/ai";
import { MdMovie,MdLiveTv } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";

import Headeritems from './Headeritems'
import profile from './../assets/Images/profileforDC.jpeg'

const Header = () => {
  const [toggle,setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: AiFillHome,
    },
    {
      name: "SEARCH",
      icon: AiOutlineSearch,
    },
    {
      name: "WATCHLIST",
      icon: AiOutlinePlus,
    },
    {
      name:'ORIGINALS', 
      icon:AiFillStar
    },
    {
      name: "MOVIES",
      icon: MdMovie,
    },
    {
      name: "SERIES",
      icon: MdLiveTv,
    },
  ]

  return (
    <div className='flex items-center justify-between py-4 px-2 md:p-6'>
      <div className='flex items-center gap-3'>
        <img className='w-[80px] md:w-[110px] object-cover' src={logo} alt="Disney Logo" />
        
        <div className="hidden md:flex gap-8">
          {
            menu.map((item) => (
              <Headeritems name={item.name} icon={item.icon} />
            ))
          }
        </div>
        <div className="flex md:hidden gap-5">
          {
            menu.map((item,index) => index < 3 && (
              <Headeritems name="" icon={item.icon} />
            ))
          }
          <div className='md:hidden ' onClick={() => setToggle(!toggle)}>
            <Headeritems name="" icon={HiDotsVertical} />
            {toggle ? <div className='absolute mt-3 bg-[#121212] border border-gray-700 rounded px-3 py-5 z-10'>
                {
                menu.map((item,index) => index >= 3 && (
                  <Headeritems name={item.name} icon={item.icon} />
                ))
              }
            </div> : null}
          </div>
        </div>
      </div>
      <img src={profile} alt="my profile" className='w-[40px] h-[40px] rounded-full md:w-[50px] md:h-[50px] mr-5 object-cover' />
    </div>
  )
}

export default Header
