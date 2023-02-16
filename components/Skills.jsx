import Image from 'next/image';
import React from 'react';
import css from '../public/assets/css.png';
import github from '../public/assets/github.png';
import html from '../public/assets/html.png';
import javascript from '../public/assets/javascript.png';
import react from '../public/assets/react.png';
import python from '../public/assets/python.png';
import tailwind from '../public/assets/tailwind.png';
import nextjs from '../public/assets/nextjs.png';




const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#D35D6E]'>
            Skills
            </p>
            <h2 className='py-4'>
            Technologies & Tools
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m=auto'>
                    <Image src={css} 
                    width='64px' 
                    height='64px'
                    alt='/' 
                    />
                </div>
            </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>CSS</h3>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m=auto'>
                    <Image src={html} 
                    width='64px' 
                    height='64px'
                    alt='/' 
                    />
                </div>
            </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m=auto'>
                    <Image src={javascript}
                    width='64px' 
                    height='64px'
                    alt='/' 
                    />
                </div>
            </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Javascript</h3>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m=auto'>
                    <Image src={github}
                    width='64px' 
                    height='64px'
                    alt='/' 
                    />
                </div>
            </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Github</h3>
                </div>
            </div>


            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m=auto'>
                    <Image src={react}
                    width='64px' 
                    height='64px'
                    alt='/' 
                    />
                </div>
            </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>React</h3>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m=auto'>
                    <Image src={tailwind}
                    width='64px' 
                    height='64px'
                    alt='/' 
                    />
                </div>
            </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Tailwind CSS</h3>
                </div>
            </div>


            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m=auto'>
                    <Image src={nextjs}
                    width='64px' 
                    height='64px'
                    alt='/' 
                    />
                </div>
            </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Next JS</h3>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m=auto'>
                    <Image src={python}
                    width='64px' 
                    height='64px'
                    alt='/' 
                    />
                </div>
            </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Python</h3>
                </div>
            </div>





            </div>
        </div>
    </div>
  )
}

export default Skills