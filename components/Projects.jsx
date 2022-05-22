import React from 'react'
import Image from 'next/image'
import spotifyImg from '../public/assets/spotifyproject.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max=w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
            Projects
            </p>
            <h2>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>


                <ProjectItem 
                    title='Spotify Player' 
                    backgroundImg={spotifyImg} 
                    projectUrl='/spotifyplayer'    
                    />
            
            </div>
        </div>
    </div>
  )
}

export default Projects