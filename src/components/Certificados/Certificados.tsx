import React from 'react'
import  data from '../../projects.json';

interface URLS {
    url: string
}

const Certificados: React.FC = () => {

   const urls: URLS[] = data.certificados;

  return (
    <section id="certificate" className='lg:col-span-9 lg:row-span-1 flex flex-col justify-around h-[100%]'>
        <h1 className='h-[20vh] mt-10 uppercase text-center text-[1.8rem] lg:text-5xl font-semibold'><span className='bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent tracking-widest'>Certificados</span></h1>
        <div className='flex flex-wrap justify-center'>
            {urls.map((item, indx) => <div>
              <img className='h-[15rem] lg:h-[20rem] m-4 object-cover' key={indx} src={item.url} alt='certificado'/>
            </div>)}
        </div>
    </section>
  )
}

export default Certificados