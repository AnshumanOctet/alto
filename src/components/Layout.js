import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/global.css'
// import { useLocation } from '@reach/router';

export default function Layout({background,children,color }) {
  const layoutStyle={
    background: background.startsWith('#') ? background : `url(${background})`,
    backgroundSize: 'cover',
    minHeight: '900px',
   
  }

  return (
    <div className="layout pt-8"  style={layoutStyle} >
        <Navbar/>
        <div className='content'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}
