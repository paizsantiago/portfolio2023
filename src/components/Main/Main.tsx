
import React from 'react'

const Main: React.FC = () => {
  return (
    <div id="main" className='flex flex-col justify-between bg-fondoMain h-[100%] lg:col-span-9 lg:row-span-1 '>
        <div  className='text-center flex flex-col justify-center h-[100vh] '>
          <h1  className="text-2xl lg:text-5xl text-slate-900">
              Hola,
              soy<br/><span className='text-5xl lg:text-8xl bg-gradient-to-r from-purple-900 from-20 to-red-500 to-80 bg-clip-text text-transparent font-semibold tracking-wide'>Santiago</span>
          </h1>
          <h2 className="text-2xl lg:text-5xl text-slate-900 text-center mb-5">y soy<span className='tracking-wide block p-2 text-5xl lg:text-8xl font-semibold'>Desarrollador<br/>Fullstack</span></h2>
        </div>
        <p className='lg:text-3xl text-slate-600 px-10 text-center '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, rem doloribus sed fuga iste provident ratione porro dicta quod ad suscipit possimus eos voluptatem amet facere? Laborum, dignissimos. Magni alias nam labore necessitatibus, consequatur enim iste laudantium ab dolores et minus atque asperiores cupiditate voluptatibus dolor sequi suscipit delectus! Aspernatur veniam sint officia at totam esse, magnam distinctio impedit! Recusandae, inventore esse repudiandae natus dolorum</p>
    </div>
  )
}

export default Main

