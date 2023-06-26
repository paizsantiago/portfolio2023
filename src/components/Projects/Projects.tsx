import React, { useEffect, useRef, useState } from 'react'
import data from '../../projects.json'
import CardProject from './CardProject';
import {motion} from 'framer-motion'

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
            justify-evenly
            items-center
            relative
            bg-fondo3
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
           '>Proyectos</h2>
            <motion.div ref={carousel} className='cursor-grab overflow-hidden w-[90%] md:w-[70%] 2xl:w-[55%]' whileTap={{cursor: "grabbing"}}>
                <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className='flex items-center scroll-smooth h-[70vh]'>
                    {projects.map((item) => <CardProject props={item}/>)}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Projects;