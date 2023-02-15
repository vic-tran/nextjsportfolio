import React from 'react';
import Image from 'next/image';
import spotifyImg from '../public/assets/spotifyproject.png';
import greenTree from '../public/assets/greentree.png';
import hsc from '../public/assets/hsc.png';
import todo from '../public/assets/todo.png';
import Link from 'next/link';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max=w-[1240px] mx-auto px-2 pt-24 pb-16'>
            <p className='text-xl tracking-widest uppercase text-[#D35D6E]'>
            Projects
            </p>
            <h2>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>


                <ProjectItem 
                    title='Spotify Player' 
                    backgroundImg={spotifyImg} 
                    projectUrl='/spotifyplayer'    
                    />
                  
                <ProjectItem 
                    title='Greentree Homes' 
                    backgroundImg={greenTree} 
                    projectUrl='/greentree'    
                    />
                
                <ProjectItem 
                    title='Hermanos Surf Co.' 
                    backgroundImg={hsc} 
                    projectUrl='/hsc'    
                    />
                
                    <ProjectItem 
                    title='ToDo List' 
                    backgroundImg={todo} 
                    projectUrl='/todo'    
                    />
                
            
            </div>
        </div>
    </div>
  )
}

export default Projects