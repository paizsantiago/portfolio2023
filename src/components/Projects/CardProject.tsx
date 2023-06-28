import { Project } from './Projects';
import {motion} from 'framer-motion'

interface Card {
    props: Project
}

const CardProject = ({props}: Card) => {
  const {title, img, deploy, repo} = props;

  const linkProps = 'text-slate-900 font-semibold border border-gray-400 px-6 py-1 rounded-md text-[1rem] lg:text-[1rem]'

  const hoverLinks = {
    hover:{
      scale: 1.05,
      backgroundColor: "#c4d1db",
      transition:{
        duration: .3,
        delay: .1,
        type: "spring"
      }
    }
  }

  return (
      <motion.article 
      className='min-w-[100%]
        h-[50%]
        lg:h-[50%]
        xl:h-[80%]
        flex
        snap-center
        flex-col
        shadow-lg
        rounded-lg border border-zinc-300
        bg-gray-100
        '>
          <img src={img} alt={title} className='rounded-t-lg w-[100%] h-[70%] lg:h-[80%] object-cover pointer-events-none'/>
        <div className='flex
          justify-around
          items-center
          h-[30%]
          '>
          <motion.a variants={hoverLinks} whileHover="hover" href={deploy} target='_BLANK' rel='noreferrer' className={linkProps}>Deploy</motion.a>
          <motion.a variants={hoverLinks} whileHover="hover" href={repo} target='_BLANK' rel='noreferrer'className={linkProps}>Github</motion.a>
        </div>
      </motion.article>
  )
}


export default CardProject;