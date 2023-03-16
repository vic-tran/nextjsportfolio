import React from 'react'
import Image from 'next/image'
import me from '../public/assets/me.png'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen text-center'> 
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='col-span-2'>
                <h1 className='pt-16 pb-4 uppercase text-xl tracking-widest text-[#D35D6E]'>About</h1>
                <h2 className='pt-10'>Bio</h2>
                <Image className='scale-75 rounded-full shadow-2xl' src={me} alt=""></Image>
                <p className='pb-20 text-gray-600 max-w-[60%] m-auto'>I'm a self taught web developer with a passion for creating design forward 
                and responsive applications. The process of creating things from my ideas and inspirations 
                is what intrigues me the most about development.  In my free time I love to surf, read, and hangout with friends!
                </p>
              
               
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default About