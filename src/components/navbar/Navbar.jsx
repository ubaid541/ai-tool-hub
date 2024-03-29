import React, { useContext, useEffect, useState } from 'react'
import "./Navbar.css"
import logoWhite from "../../assets/images/app-img/logo/logoWhite.png"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

const Navbar = () => {
  const {user,dispatch} = useContext(AuthContext)
  const [scrolled, setScrolled] = useState(false);

  const handleClick = (e)=>{
    e.preventDefault()

    const res =  axios.post("/user/logout")
          dispatch({type:"LOGOUT"})
         navigate("/")
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light ${scrolled ? 'scrolled' : ''} fixed-top`} >
  <div className="container">
    <a className="navbar-brand" href="/"><img src={scrolled ? logoWhite : logoWhite} width="100px"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto" >
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li> */}
        <li className="nav-item">
          {user ? (
            <button className="btn btn-sm mt-1 "aria-current="page"  style={{backgroundColor: "#9D34DA"}}
            onClick={handleClick}
            >
            Logout
            </button>
          ) : (
            <Link className="btn btn-sm mt-1 "aria-current="page" to="/auth/register" style={{backgroundColor: "#9D34DA"}}>
                    Signup
          </Link>
          )
        }
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Feedback</a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar