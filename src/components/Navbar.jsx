import { useEffect, useState } from 'react';
import { assets } from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu, SetMobileMenu] = useState(false);

    // when the mobile is on prevent scrolling 
    useEffect(() => {
        if(showMobileMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [showMobileMenu])



    return (
        <div className="absolute top-0 left-0 w-full">
            <div className='container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                <img src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#top" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            </ul>
            <button className='hidden md:flex bg-white px-8 py-2 rounded-full items-center justify-center'>Sign Up</button>
            <img onClick={() => SetMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7'/>
            </div>

            {/* mobile menu  */}
            <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'  } right-0 top-0 bottom-0 overflow-hidden bg-white transition- duration-500`}>
                {/* close icon  */}
                <div className="flex justif-end p-6 cursor-pointer">
                    <img  onClick={() => SetMobileMenu(false)} src={assets.cross_icon} className='w-6'/>
                </div>
                {/* navs */}
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <a href="#top" className='px-4 py-2 rounded-full inline-block' onClick={() => SetMobileMenu(false)}>Home</a>
                    <a href="#About" className='px-4 py-2 rounded-full inline-block' onClick={() => SetMobileMenu(false)}>About</a>
                    <a href="#Projects" className='px-4 py-2 rounded-full inline-block' onClick={() => SetMobileMenu(false)}>Projects</a>
                    <a href="#Testimonials" className='px-4 py-2 rounded-full inline-block' onClick={() => SetMobileMenu(false)}>Testimonials</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;