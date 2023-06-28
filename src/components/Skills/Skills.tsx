import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiMui,
  SiTailwindcss,
  SiAdobephotoshop,
  SiMongodb,
} from "react-icons/si";
import { FaCss3Alt, FaSass, FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import {motion} from 'framer-motion'

const Skills: React.FC = () => {

  const variantSkill = {
    hidden:{
      opacity: 0
    },
    show:{
      opacity: 1
    }
  }
  
  const iconStyle: string = "text-4xl lg:text-5xl mb-2";
  const cardStyle: string = "flex flex-col lg:mb-0 justify-center items-center w-[50%] lg:w-[80%] justify-self-center lg:m-5 p-5 rounded-sm text-slate-900 border-4 border-slate-900 transition transition-delay-150"
 
  return (
    <section className="lg:col-span-9 
    lg:row-span-1 
    relative 
    flex 
    flex-col 
    justify-around 
    h-[100%] 
    lg:justify-evenly 
    mt-20">
      <h2 id="skills" className="h-[20vh]
       lg:h-[10vh] 
       uppercase 
       bg-gradient-to-r from-red-500 from-10 via-pink-500 via-10 to-yellow-500 to-80 
       bg-clip-text 
       text-transparent 
       text-center 
       text-[1.8rem] 
       lg:text-5xl 
       font-semibold 
       tracking-widest">
        Tecnologias
      </h2>
      <section className="z-10 
      relative 
      grid 
      grid-cols-1 
      md:grid-cols-3
      lg:grid-cols-4 
      grid-rows-3 
      justify-center gap-6">
        <motion.div variants={variantSkill} initial="hidden" whileInView="show" viewport={{once: true}} transition={{duration: 1.4, ease:"easeInOut"}}className={`${cardStyle} hover:border-orange-600  hover:text-orange-600`}>
          <AiFillHtml5 className={iconStyle}/>
          <p className='font-semibold text-[0.8rem] lg:text-[1rem]'>HTML</p>
        </motion.div>
        <motion.div variants={variantSkill} initial="hidden" whileInView="show" viewport={{once: true}} transition={{duration: 1.4, ease:"easeInOut"}} className={`${cardStyle} hover:border-blue-700  hover:text-blue-700`}>
          <FaCss3Alt className={iconStyle} />
          <p className='font-semibold text-[0.8rem] lg:text-[1rem]'>CSS</p>
        </motion.div>
        <motion.div variants={variantSkill} initial="hidden" whileInView="show" viewport={{once: true}} transition={{duration: 1.4, ease:"easeInOut"}} className={`${cardStyle} hover:border-pink-500  hover:text-pink-500`}>
          <FaSass className={iconStyle} />
          <p className='font-semibold text-[0.8rem] lg:text-[1rem]'>SASS</p>
        </motion.div>
        <motion.div variants={variantSkill} initial="hidden" whileInView="show" viewport={{once: true}} transition={{duration: 1.4, ease:"easeInOut"}} className={`${cardStyle}  hover:border-indigo-400  hover:text-indigo-400`}>
          <SiMui className={iconStyle} />
          <p className='font-semibold text-[0.8rem] lg:text-[1rem]'>MUI</p>
        </motion.div>
        <motion.div variants={variantSkill} initial="hidden" whileInView="show" viewport={{once: true}} transition={{duration: 1.4, ease:"easeInOut"}} className={`${cardStyle} hover:border-indigo-600  hover:text-indigo-600`}>
          <SiTailwindcss className={iconStyle} />
          <p className='font-semibold text-[0.8rem] lg:text-[1rem]'>TAILWIND</p>
        </motion.div>
        <motion.div variants={variantSkill} initial="hidden" whileInView="show" viewport={{once: true}} transition={{duration: 1.4, ease:"easeInOut"}} className={`${cardStyle} hover:border-yellow-400  hover:text-yellow-400`}>
          <IoLogoJavascript className={iconStyle} />
          <p className='font-semibold text-[0.8rem] lg:text-[1rem]'>JAVASCRIPT</p>
        </motion.div>
        <motion.div variants={variantSkill} initial="hidden" whileInView="show" viewport={{once: true}} transition={{duration: 1.4, ease:"easeInOut"}} className={`${cardStyle} hover:border-indigo-700  hover:text-indigo-600`}>
          <SiTypescript className={iconStyle} />
          <p className='font-semibold text-[0.8rem] lg:text-[1rem]'>TYPESCRIPT</p>
        </motion.div>
        <motion.div variants={variantSkill} initial="hidden" whileInView="show" viewport={{once: true}} transition={{duration: 1.4, ease:"easeInOut"}} className={`${cardStyle} hover:border-sky-400  hover:text-sky-400`}>
          <FaReact className={iconStyle} />
          <p className='font-semibold text-[0.8rem] lg:text-[1rem]'>REACT</p>
        </motion.div>
        <motion.div variants={variantSkill} initial="hidden" whileInView="show" viewport={{once: true}} transition={{duration: 1.4, ease:"easeInOut"}} className={`${cardStyle} hover:border-blue-900  hover:text-blue-900`}>
          <SiAdobephotoshop className={iconStyle} />
          <p className='font-semibold text-[0.8rem] lg:text-[1rem]'>PHOTOSHOP</p>
        </motion.div>
        <motion.div variants={variantSkill} initial="hidden" whileInView="show" viewport={{once: true}} transition={{duration: 1.4, ease:"easeInOut"}} className={`${cardStyle} hover:border-red-600  hover:text-red-600`}>
          <FaGithub className={iconStyle} />
          <p className='font-semibold text-[0.8rem] lg:text-[1rem]'>GITHUB</p>
        </motion.div>
        <motion.div variants={variantSkill} initial="hidden" whileInView="show" viewport={{once: true}} transition={{duration: 1.4, ease:"easeInOut"}} className={`${cardStyle}  hover:border-green-800  hover:text-green-800`}>
          <FaNodeJs className={iconStyle} />
          <p className='font-semibold text-[0.8rem] lg:text-[1rem]'>NODEJS</p>
        </motion.div>
        <motion.div variants={variantSkill} initial="hidden" whileInView="show" viewport={{once: true}} transition={{duration: 1.4, ease:"easeInOut"}} className={`${cardStyle} hover:border-green-600  hover:text-green-600`}>
          <SiMongodb className={iconStyle} />
          <p className='font-semibold text-[0.8rem] lg:text-[1rem]'>MONGODB</p>
        </motion.div>
      </section>
    </section>
  );
};

export default Skills;
