
import React from 'react'
import {motion} from 'framer-motion'

const Main: React.FC = () => {

  
  return (
    <main id="main" className='flex flex-col justify-around bg-mainBg h-[100%] lg:col-span-9 lg:row-span-1 '>
        <div className='text-center flex flex-col justify-center h-[100vh] '>
          <motion.h1 initial={{x: -500, opacity:0}} animate={{x: 0, opacity: 1}} viewport={{once: true}} transition={{duration: 1, delay: .2, type: "tween"}}>
              <span className='text-5xl lg:text-8xl bg-gradient-to-r from-purple-900 from-20 to-red-500 to-80 bg-clip-text text-transparent font-semibold tracking-wide'>Santiago Paiz</span>
          </motion.h1>
          <motion.h2 initial={{x: -700, opacity:0}} animate={{x: 0, opacity: 1}} viewport={{once: true}} transition={{duration: 1, delay: .4, type: "tween"}}><span className='tracking-wide text-slate-900 block p-2 text-5xl lg:text-8xl font-semibold'>Desarrollador<br/>Fullstack</span></motion.h2>
        </div>
        <p className='lg:text-3xl text-slate-600 px-10 text-center '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, rem doloribus sed fuga iste provident ratione porro dicta quod ad suscipit possimus eos voluptatem amet facere? Laborum, dignissimos. Magni alias nam labore necessitatibus, consequatur enim iste laudantium ab dolores et minus atque asperiores cupiditate voluptatibus dolor sequi suscipit delectus! Aspernatur veniam sint officia at totam esse, magnam distinctio impedit! Recusandae, inventore esse repudiandae natus dolorum</p>
    </main>
  )
}

export default Main

