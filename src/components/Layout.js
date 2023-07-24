import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/global.css'
import { useLocation } from '@reach/router';

export default function Layout({children,background,color  }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  console.log(isHome)
  return (

    

    <div className="layout pt-8"  style={{background,color}} >
        <Navbar/>
        <div className='content'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}
