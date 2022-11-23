import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 pt-24 pb-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#D35D6E]'>
        Contact
        </p>
        <h2 className='py-4'>Get in Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>

    {/* left side contact*/}
    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'> 
      <div className='lg:p-4 h-full'>
        <div>
          <img className='rounded-xl hover:scale-105 ease-in duration-300' src='https://www.toshiba.com/taes/cms_images/contact-us.jpg' alt='/' />
        </div>
        <div>
          <h2 className='py-2'>Victor Tran</h2>
          <p>Front-End Developer</p>
          <p className='py-4'> I am available for full time or part time positions. Feel free to contact me!</p>
        </div>
        <div>
        <p className='uppercase pt-8'>Connect With Me</p>
          <div className='flex items-center justify-between py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <a href="https://www.linkedin.com/in/victor-tran-24613b110/">
                    <FaLinkedinIn />
                    </a>
                    </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <a href="https://github.com/vic-tran">
                    <FaGithub />
                    </a>
                    </div>
              {/*<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <a href='/#contact'>
                    <AiOutlineMail />
                    </a>
                    </div> */}
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                    </div>
          </div>
        </div>
      </div>
    </div>

    {/* right side contact */}
        <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
          <div className='p-4'>

            <form method="POST" action="https://getform.io/f/18b10e7c-5dc4-4f72-a380-a5ddf28def6c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-orange-600 text-gray-600'>
                Contact
                </p>
                <p className='text-gray-600 p-4'>// Submit below or email me @ vc.tran998@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'></input>
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email'></input>
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Build</button>
            </form>


            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#D35D6E] size={30}' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact


/*
<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
<div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>Name</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text">
                  </input>
                </div>

                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>Phone Number</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text">
                  </input>
                </div>

              </div>

              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email">
                </input>
              </div>

              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text">
                </input>
              </div>

              <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg border-gray-300' rows='10'></textarea>
              </div>
              <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>

              */