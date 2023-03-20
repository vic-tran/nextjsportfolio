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
                <p className='py-4 text-gray-600 max-w-[70%] m-auto justify-center items-center text-center'>
                    I'm a front end web developer with a passion for creating unique and responsive web applications. 
                    As of right now I am focused on learning new technologies while improving upon my existing knowledge. 
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href="https://www.linkedin.com/in/victor-tran-24613b110/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn/>
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href="https://github.com/vic-tran" target="_blank" rel="noopener noreferrer">
                        <FaGithub/>
                        </a>
                    </div>
                    {/*<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>*/}
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href ="https://drive.google.com/file/d/1jaBfF1Efi2VBQT_nsmNxt9JpFEt6vujN/view?usp=share_link" target="_blank" rel="noopener noreferrer">
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