import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { RiComputerFill} from 'react-icons/ri'
import {BsBookFill} from 'react-icons/bs'
import {FaCertificate} from 'react-icons/fa'
import {AiFillPhone} from 'react-icons/ai'
import {motion} from 'framer-motion'


const Navbar: React.FC = () => {

  const liStyle: string = 'cursor-pointer';
  const animationLi = {
    hidden: {
      opacity: 0,
    },
    show:{
      opacity: 1,
    },
    hover:{
      opacity: .5,
      scale: 1.3,
    },
    tap:{
      scale: .9
    }
  }

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
            <motion.li variants={animationLi} initial="hidden" animate="show" whileHover="hover" whileTap="tap" className={liStyle}><a href="#main"><AiFillHome/></a></motion.li>
            <motion.li variants={animationLi} initial="hidden" animate="show" whileHover="hover" whileTap="tap" className={liStyle}><a href="#skills"><BsBookFill/></a></motion.li>
            <motion.li variants={animationLi} initial="hidden" animate="show" whileHover="hover" whileTap="tap" className={liStyle}><a href="#projects"><RiComputerFill/></a></motion.li>
            <motion.li variants={animationLi} initial="hidden" animate="show" whileHover="hover" whileTap="tap" className={liStyle}><a href="#certificate"><FaCertificate/></a></motion.li>
            <motion.li variants={animationLi} initial="hidden" animate="show" whileHover="hover" whileTap="tap" className={liStyle}><a href="#contact"><AiFillPhone/></a></motion.li>
          </ul>
        </nav>
  )
}

export default Navbar;