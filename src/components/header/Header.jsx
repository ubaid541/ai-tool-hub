import React from 'react'
import Navbar from '../navbar/Navbar'
import TypingAnimation from '../Typingtext/Typingtext'

const Header = () => {
  return (
    <>
    <Navbar/>
    <div className='container-fluid d-flex flex-column justify-content-center align-items-center text-center mt-5' style={{backgroundColor:"#8a2be2",height:"60vh"}}>

      <div className='text-white'>
      <h2><TypingAnimation/></h2>
      </div>
      <p className='text-white'>Get multiple ai tools on a single platform and free to use.<br/> No signup is required.</p>
      
    </div>
    </>
  )
}

export default Header