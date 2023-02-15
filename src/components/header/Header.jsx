import React, { useContext } from 'react'
import Navbar from '../navbar/Navbar'
import TypingAnimation from '../Typingtext/Typingtext'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import "../GlobalCss.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Header = ({text}) => {
  console.log(text)
  const {user} = useContext(AuthContext)
  return (
    <>
    <Navbar/>
    <div className='container-fluid d-flex flex-column justify-content-center align-items-center text-center pt-5' style={{backgroundColor:"#070335",height:"70vh"}}>

      <div className='text-white'>
      <h2>{text ? text : <TypingAnimation/>}</h2>
      </div>
    {!text && (
        <p className='text-white'>Get multiple ai tools on a single platform and free to use.<br/> No signup is required.</p>
    ) }

      <Link to={user ? "/" : "/auth/login"}   className="btn mt-3"><IoLogoGooglePlaystore className="me-1"/>  Get the app</Link>

      
    </div>
    </>
  )
}

export default Header