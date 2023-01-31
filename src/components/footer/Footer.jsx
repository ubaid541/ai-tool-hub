import React, { useEffect, useState } from 'react'
import logoBlue from "../../assets/images/app-img/logo/logoBlue.png"

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (

      <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted">Copyright © {currentYear} Ai Tools Hub</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    <img src={logoBlue} width="70px"/>
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Feedback</a></li>
    </ul>
  </footer>
</div>
  )
}

export default Footer