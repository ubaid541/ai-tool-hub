import React from 'react'
import Navbar from '../navbar/Navbar'
import TypingAnimation from '../Typingtext/Typingtext'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import "../GlobalCss.css"

const Header = () => {
  return (
    <>
    <Navbar/>
    <div className='container-fluid d-flex flex-column justify-content-center align-items-center text-center' style={{backgroundColor:"#070335",height:"70vh"}}>

      <div className='text-white'>
      <h2><TypingAnimation/></h2>
      </div>
      <p className='text-white'>Get multiple ai tools on a single platform and free to use.<br/> No signup is required.</p>

      <button type="button" className="btn mt-3"><IoLogoGooglePlaystore className="me-1"/>  Get the app</button>

      
    </div>
    </>
  )
}

export default Header