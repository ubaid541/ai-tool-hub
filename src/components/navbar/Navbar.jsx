import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top py-3">
  <div className="container">
    <a className="navbar-brand" href="#">Ai Tool Hub</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto" >
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li> */}
        <li className="nav-item">
          <a className="btn btn-sm btn-dark mt-1 ms-" aria-current="page" href="/"> SIGN UP
</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Feedback</a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar