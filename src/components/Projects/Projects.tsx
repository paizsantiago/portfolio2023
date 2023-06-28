import React, { useEffect, useRef, useState } from 'react'
import data from '../../projects.json'
import CardProject from './CardProject';
import {motion} from 'framer-motion'
import {TfiLayoutSliderAlt} from 'react-icons/tfi'

export interface Project {
    img: string,
    title: string,
    deploy: string, 
    repo: string
}


const Projects: React.FC = () => {
    
    
    const carousel: React.MutableRefObject<any> = useRef(null)
    
    const [width, setWidth] = useState(0);

    const projects: Project[] = data.projects;

    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])

    return (
        <div className='
            scroll-smooth
            w-auto
            flex
            flex-col
            justify-center
            items-center
            relative
            bg-projectsBg
            h-[100vh]
            lg:col-span-9
            lg:row-span-1 
            lg:h-[100%]
            -z-1
            '>
            <h2 id="projects" className='
            pt-20
            uppercase 
            bg-gradient-to-r
            from-red-500 from-10 via-pink-500 via-10 to-yellow-500 to-80 
            bg-clip-text 
            text-transparent 
            text-center 
            text-[1.8rem]
            font-semibold
            tracking-widest
            lg:text-5xl 
            h-[20%]
           '>Proyectos</h2>
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{once: true}}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }} 
                ref={carousel} className='cursor-grab overflow-hidden w-[80%] sm:w-[55%] md:w-[50%] 2xl:w-[50%] h-[60%]' whileTap={{cursor: "grabbing"}}>
                <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className='flex items-center gap-4 scroll-smooth h-[70vh]'>
                    {projects.map((item) => <CardProject props={item}/>)}
                </motion.div>
            </motion.div> 
            <div className='absolute h-[85vh] lg:h-[95vh] flex justify-center items-end'>
                <TfiLayoutSliderAlt className='text-4xl text-gray-500'/>
           </div>  
        </div>
    )
}

export default Projects;