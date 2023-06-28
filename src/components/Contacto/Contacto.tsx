import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import {motion} from 'framer-motion'

const Contacto: React.FC = () => {
  const buttonProps =
    "text-white cursor-pointer rounded-full bg-slate-950 p-4";

  const hoverButton = {
    hover:{
      scale: 1.2,
      transition:{
        duration: .4
      }
    },
    tap:{
      scale: .8,
      transition:{
        duration: .4
      }
    }
  }

  return (
    <section className="lg:col-span-9 
    row-span-1 
    flex 
    flex-col 
    justify-center 
    items-center 
    h-[100vh]
    md:h-[100%] 
    xl:pt-40 
    bg-contactBg 
    bg-cover
    ">
      <h2
        id="contact"
        className="h-[10vh] 
        uppercase bg-gradient-to-r from-red-500 from-10 to-yellow-500 to-80 
        bg-clip-text 
        text-transparent 
        text-center 
        text-[1.8rem] 
        lg:text-5xl 
        font-semibold 
        tracking-widest 
        my-10"
      >
        Contacto
      </h2>
      <div
        className="flex 
        flex-col 
        justify-evenly 
        w-[90%] 
        sm:w-[60%]
        h-[60%] 
        items-center 
        gap-10 
        md:flex-row
        overflow-hidden
        "
      >
        <motion.a
          variants={hoverButton}
          initial={{y: 200, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{delay: .1, duration: 1.1}}
          whileHover="hover"
          whileTap="tap"
          className={buttonProps}
          href="https://www.linkedin.com/in/santiago-paiz/"
          target="_blank">
            <FaLinkedinIn className="text-2xl lg:text-5xl" />
        </motion.a>
        <motion.a
          variants={hoverButton}
          initial={{y: 200, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{delay: .3, duration: 1.1}}
          whileHover="hover"
          whileTap="tap"
          className={buttonProps}
          href="https://github.com/paizsantiago"
          target="_blank">
            <FiGithub className="text-2xl lg:text-5xl" />
        </motion.a>
        <motion.a 
          variants={hoverButton}
          initial={{y: 200, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{delay: .5, duration: 1.1}}
          whileHover="hover"
          whileTap="tap"
          className={buttonProps}
          href="mailto:paizsantiago5@gmail.com"
          target="_blank">
            <SiGmail className="text-2xl lg:text-5xl" />
        </motion.a>
      </div>
    </section>
  );
};

export default Contacto;
