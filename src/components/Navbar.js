import React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router';
import { StaticImage } from 'gatsby-plugin-image';

export default function Navbar() {

    const location = useLocation();
    const isBldc = location.pathname === '/bldc/';
    console.log(isBldc)
    return (
        <nav className={`nav flex justify-between items-center mx-auto   py-5 px-8 rounded-[10px] links 
                        ${isBldc ? 'bg-[#262626]' : 'bg-[#fff]'} 
                        ${isBldc ? 'text-[#ffffff]' : 'text-[#1c1c1c]'} 
                        ${isBldc ? 'shadow-none' : 'shadow-[0_0_10px_1px_#ECE3E3]'} `}
                         >
            <div className='flex items-center gap-10'>
                <Link to='/' activeClassName="active">

                    {isBldc ? <StaticImage
                        src="../images/altoLogoActive.png"
                        alt='alto logo'
                        width={57}
                        height={32} />
                        :
                        <StaticImage
                            src="../images/alto-logo-not-red.png"
                            alt='alto logo'
                            width={57}
                            height={32} />}
                </Link>
                <Link to='/bldc' activeClassName="active">BLDC Labs</Link>
                <Link to='/manufacturing' activeClassName="active">Manufacturing</Link>
                <Link to='/product' activeClassName="active">Products</Link>
                <Link to='/about' activeClassName="active">About</Link>
                <Link to='/blog' activeClassName="active">Blog</Link>
            </div>
            {isBldc
                ?
                <Link to='/contactUs' activeClassName="active" className='contact-bldc relative'>
                    Contact Us
                    <StaticImage
                        src="../images/red-dot.png"
                        alt='alto logo'
                        width={6}
                        height={6}
                        className='absolute top-[5px] right-[10px]' />

                </Link>
                :
                <Link to='/contactUs' activeClassName="active" className='relative'>Contact Us
                     <StaticImage
                        src="../images/red-dot.png"
                        alt='alto logo'
                        width={6}
                        height={6}
                        className='absolute top-[-3px] right-[-11px]' />
                </Link>}
        </nav>
    )
}

