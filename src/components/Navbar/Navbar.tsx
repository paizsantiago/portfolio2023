import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { RiComputerFill} from 'react-icons/ri'
import {BsBookFill} from 'react-icons/bs'
import {FaCertificate} from 'react-icons/fa'
import {AiFillPhone} from 'react-icons/ai'

const Navbar: React.FC = () => {

  const liStyle: string = 'hover:opacity-50 cursor-pointer transition hover:-translate-y-1 hover:scale-110 ';

  return (
    <nav className='fixed
        lg:relative
        lg:row-span-5 
        lg:col-span-1 
        lg:h-[100%]
        text-2xl 
        lg:text-3xl
        grid 
        shadow-lg 
        shadow-slate 
        justify-items-center
        content-center
        w-[100%]
        h-[8%]
        z-20 
        border-r-2
        border-slate-200
        bg-white
      '>
          <ul className='lg:fixed lg:h-full flex lg:flex-col gap-6 justify-center text-slate-900 '>
            <li className={liStyle}><a href="#main"><AiFillHome/></a></li>
            <li className={liStyle}><a href="#skills"><BsBookFill/></a></li>
            <li className={liStyle}><a href="#projects"><RiComputerFill/></a></li>
            <li className={liStyle}><a href="#certificate"><FaCertificate/></a></li>
            <li className={liStyle}><a href="#contact"><AiFillPhone/></a></li>
          </ul>
        </nav>
  )
}

export default Navbar;