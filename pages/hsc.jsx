import Image from 'next/image'
import React from 'react'
import hermanos from '../public/assets/hsc.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const hsc = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={hermanos} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] 
                right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Hermanos Surf Co.</h2>
                    <h3>React JS / Tailwind CSS</h3>
                </div>
        </div>
        
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>

            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>This website was built for Hermanos Surf Co. using React JS, Mongo DB and Postman. This project taught me a lot about React, some things include - State, custom Hooks and React-Router.
                Payment implementation is missing from the web application as the company is not yet ready to go live.
                </p>
                <button className='px-8 py-2 mt-4 mr-8'>
                    <a href="">
                    Demo
                    </a>
                </button>
                <button className='px-8 py-2 mt-4'>
                    <a href="https://github.com/vic-tran/GreenTree">
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
                            <RiRadioButtonFill className='pr-1'/> Mongo DB
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> Postman
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

export default hsc;