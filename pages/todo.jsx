import Image from 'next/image'
import React from 'react'
import todopic from '../public/assets/todo.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const todo = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={todopic} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] 
                right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>ToDo List.</h2>
                    <h3>React JS / Firebase</h3>
                </div>
        </div>
        
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>

            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>This application was built using React JS, Firebase and Tailwind CSS. A simple classic todo app with add and delete functionality made possible
                through Firebase. This project was my first time using Firebase and it was good experience learning how backend technologies connect to the front end. 
                </p>
                <button className='px-8 py-2 mt-4 mr-8'>
                    <a href="">
                    Demo
                    </a>
                </button>
                <button className='px-8 py-2 mt-4'>
                    <a href="https://github.com/vic-tran/todo">
                    Code
                    </a>
                </button>
            </div>

            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> React
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> Firebase
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Link href='/#projects'>
            <p className='underline cursor-pointer'>Back</p>
        </Link>
    </div> 
  )
}

export default todo;