import React, { useRef } from 'react'
import data from '../../projects.json'
import CardProject from './CardProject';
import {BsChevronCompactRight, BsChevronCompactLeft} from 'react-icons/bs'

export interface Project {
    img: string,
    title: string,
    deploy: string, 
    repo: string
}


const Projects: React.FC = () => {
    
    const carousel: React.MutableRefObject<any> = useRef(null)

    const scrollLeft = (e: any) =>{
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    const scrollRight = (e: any) =>{
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    const iconProp: string = 'text-5xl text-slate-900 bg-gray-200 rounded-full m-4 p-2'
    const projects: Project[] = data.projects;

    return (
        <div className='
            scroll-smooth
            w-auto
            flex
            flex-col
            justify-center
            items-center
            relative
            bg-fondo3
            h-[100vh]
            lg:col-span-9
            lg:row-span-1 
            lg:h-[100%]
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
            <div ref={carousel} className='flex items-center w-[95%] gap-6 overflow-hidden snap-x h-[60vh] md:h-[100vh] mb-20 md:w-[45%] lg:w-[50%]'>
                {projects.map((item) => <CardProject props={item}/>)}
            </div>
            <div className='absolute z-10 flex items-end h-[95%] justify-center md:h-auto md:justify-between w-[90%] lg:w-[80%]'>
                    <button onClick={scrollLeft}><BsChevronCompactLeft className={iconProp}/></button>
                    <button onClick={scrollRight}><BsChevronCompactRight className={iconProp}/></button>
            </div>
        </div>
    )
}

export default Projects;