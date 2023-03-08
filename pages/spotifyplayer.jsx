import Image from 'next/image'
import React from 'react'
import spotifyImg from '../public/assets/spotifyproject.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const spotifyplayer = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={spotifyImg} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] 
                right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Spotify Player</h2>
                    <h3>React JS / </h3>
                </div>
        </div>
        
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>

            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>This app was built using React JS using Spotify's API client. Users are able to log in to their
                Spotify account through this app and play their own custom playlists through their library. Spotify premium
                is required for this app. Through the player function you are able to view the playlist tracks along with 
                information for the current song being played. This is made possible with Spotify API.
                </p>
                <button className='px-8 py-2 mt-4 mr-8'>
                    <a href="https://spotify-lac-eight.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Demo
                    </a>
                </button>
                <button className='px-8 py-2 mt-4'>
                    <a href="https://github.com/vic-tran/musicplayer" target="_blank" rel="noopener noreferrer">
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
                            <RiRadioButtonFill className='pr-1'/> Tailwind CSS
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> Javascript
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1'/> Spotify API
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Link href='/#projects'>
            <p className='underline cursor-pointer ml-5 mt-10 font-bold'>Back</p>
        </Link>
    </div> 
  )
}

export default spotifyplayer;