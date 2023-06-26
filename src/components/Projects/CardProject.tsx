import React from 'react'
import { Project } from './Projects';

interface Card {
    props: Project
}

const CardProject = ({props}: Card) => {
  const {title, img, deploy, repo} = props;

  const linkProps = 'flex-none rounded-full bg-gray-900 px-3.5 py-1 text-[.9rem] lg:text-[1rem] text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'

  return (
    <article className='min-w-[100%]
      h-[60%]
      md:h-[50%]
      lg:h-[40%]
      xl:h-[55%]
      flex
      snap-center
      flex-col
      shadow-lg
      rounded-lg border border-zinc-300
      bg-gray-100
      '>
      <img src={img} alt={title} className='rounded-t-lg w-[100%] h-[70%] lg:h-[80%]'/>
      <div className='flex
        justify-around
        items-center
        h-[30%]'>
        <a href={deploy} target='_BLANK' rel='noreferrer' className={linkProps}>Deploy</a>
        <a href={repo} target='_BLANK' rel='noreferrer'className={linkProps}>Repositorio</a>
      </div>
    </article>
  )
}


export default CardProject;