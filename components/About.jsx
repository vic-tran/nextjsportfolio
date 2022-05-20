import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full md:h-screen text-center'> 
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='col-span-2'>
                <h1 className='py-4 uppercase text-xl tracking-widest text-[#5651e5]'>About</h1>
                <h2 className='py-4'>Bio</h2>
                <p className='py-2 text-gray-600 max-w-[60%] m-auto'>I'm a self taught web developer with a passion for creating design forward 
                and responsive applications. The process of designing feautures from my ideas as well as outside inspiration into production 
                is something that intrigues me the most about development. I'm a firm believer in 
                the fact that learning never stops and that there is always a new skill to pick up. 
                </p>
              
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out what I've worked on</p>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default About