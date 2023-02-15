import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <div className='line-1 anim-typewriter'>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I'm <span className='text-[#D35D6E]'>Victor</span>
                    </h1>
                </div>
                <div className='line-1 anim-typewriter2'>
                    <h1 className='py-2 text-gray-700'>
                        A Front End Developer.
                    </h1>
                </div>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I'm a front end web developer with a passion for creating unique and responsive web applications. 
                    As of right now I am focused on learning new technologies while improving upon my existing knowledge. 
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href="https://www.linkedin.com/in/victor-tran-24613b110/">
                        <FaLinkedinIn/>
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href="https://github.com/vic-tran">
                        <FaGithub/>
                        </a>
                    </div>
                    {/*<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>*/}
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href ="https://docs.google.com/document/d/1Q8ZjtOcYVRRy70yHb89y9CV8sBMI-4jri6NSnc9TOwQ/edit">
                        <BsFillPersonLinesFill />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;