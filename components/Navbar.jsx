import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {useRouter} from 'next/router'
import logo from '../public/assets/logo.png';


const Navbar = () => {
    /* use to toggle between navbar*/
    const [nav, setNav] = useState(false)

    /* shadow for scrolling constants */
    const [shadow,setShadow] = useState(false)

    /* navbar state change for mainpage navigation vs projects navigation */
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')
    const router = useRouter()

    /* if routed to projects pages navbar is transparent else it is default state */
    useEffect(()=>{
        if (
            router.asPath === '/spotifyplayer'
        ) {
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
        } else {
            setNavBg('#ecf0f3')
            setLinkColor('#1f2937')
        }
    },[router])

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    });

  return (
    /* header links and sections
        menu display when screen is mobile   
        */
    <div style={{backgroundColor: `${navBg}`}}
        className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 cursor-pointer'>
        <Link href='/'>
        <Image 
        src={logo}
        alt="/" 
        width='125' 
        height='50'    
        />
        </Link>
        
        <div>
            <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
                <Link href='/'> 
                    <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </Link>
                <Link href='/#about'> 
                    <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                </Link>
                <Link href='/#skills'> 
                    <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                </Link>
                <Link href='/#projects'> 
                    <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                </Link>
                <Link href='/#contact'> 
                    <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden cursor-pointer'>
                <AiOutlineMenu size={25}/>
            </div>
       </div>
    </div>

    {/* mobile menu */}

    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
            nav 
            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }
        >
        <div>
            <div className='flex w-full items-center justify-between cursor-pointer'>
                <Link href='/'>
                    <Image 
                    src={logo}
                    width='87' 
                    height='35' 
                    alt='/' 
                    />
                </Link>
                
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                    <AiOutlineClose />
                </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-4'>Let's build</p>
            </div>
        </div>

    
        <div className='py-4 flex flex-col'> 
            <ul className='uppercase'>
                <Link href='/'>
                    <li onClick={()=> setNav(false)} className='py-4 text-sm'>Home</li>
                </Link>
                <Link href='/#about'>
                    <li onClick={()=> setNav(false)} className='py-4 text-sm'>About</li>
                </Link>
                <Link href='/#skills'>
                    <li onClick={()=> setNav(false)} className='py-4 text-sm'>Skills</li>
                </Link>
                <Link href='/#projects'>
                    <li onClick={()=> setNav(false)} className='py-4 text-sm'>Projects</li>
                </Link>
                <Link href='/#contact'>
                    <li onClick={()=> setNav(false)} className='py-4 text-sm'>Contact</li>
                </Link>
            </ul>

            <div className='pt-40'>
                <p className='uppercase tracking-widest text-[#5651e5]'>
                    Connect with me!
                </p>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <a href="https://www.linkedin.com/in/victor-tran-24613b110/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn/>
                    </a>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <a href="https://github.com/vic-tran" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                    </a>
                </div>
                {/*<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail/>
                </div>*/}
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <a href ="https://drive.google.com/file/d/1jaBfF1Efi2VBQT_nsmNxt9JpFEt6vujN/view?usp=share_link" target="_blank" rel="noopener noreferrer">
                    <BsFillPersonLinesFill />
                    </a>
                </div>
                </div>
            </div>
        </div>
        </div>

    </div>

</div>
  );
}

export default Navbar;