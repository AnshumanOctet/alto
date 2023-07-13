import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/global.css'

export default function Layout({children,backgroundColor  }) {
  return (
    <div className={`layout pt-8`} style={{backgroundColor}} >
        <Navbar/>
        <div className='content'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}
