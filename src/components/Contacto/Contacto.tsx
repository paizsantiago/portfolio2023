import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import {motion} from 'framer-motion'

const Contacto: React.FC = () => {
  const buttonProps =
    "text-2xl lg:text-3xl font-semibold text-slate-900 flex md:flex-col items-center justify-center m-4 gap-4 w-[70%] md:w-[20%] h-[30%] bg-white/60 border-2 border-orange-600 rounded-md";

  return (
    <section className="lg:col-span-9 row-span-1 flex flex-col justify-center items-center h-[100vh] md:h-[100%] xl:pt-40 bg-fondo bg-cover">
      <h2
        id="contact"
        className="h-[10vh] uppercase bg-gradient-to-r from-red-500 from-10 to-yellow-500 to-80 bg-clip-text text-transparent text-center text-[1.8rem] lg:text-5xl font-semibold tracking-widest my-10"
      >
        Contacto
      </h2>
      <div
        className="flex 
        flex-col 
        justify-center 
        w-[100%] 
        h-[60%] 
        items-center 
        gap-10 
        xl:flex-row"
      >
        <div className={buttonProps}>
          <button>
            <AiFillLinkedin className="text-4xl" />
          </button>
          <button>
            <h3>Linkedin</h3>
          </button>
        </div>
        <div className={buttonProps}>
          <button>
            <FaGithub className="text-4xl" />
          </button>
          <button>
            <h3>Github</h3>
          </button>
        </div>
        <div className={buttonProps}>
          <button>
            <HiMail className="text-4xl" />
          </button>
          <button>
            <h3>Gmail</h3>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
