import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
      <>

    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">Kathmandu Times</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fas fa-bars text-light"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item"><Link className="nav-link active" to="/business">Business</Link></li>
        <li className="nav-item"><Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link active" to="/">General</Link></li>
        <li className="nav-item"><Link className="nav-link active" to="/health">Health</Link></li>
        <li className="nav-item"><Link className="nav-link active" to="/science">Science</Link></li>
        <li className="nav-item"><Link className="nav-link active" to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link active" to="/technology">Technology</Link></li>
        
      </ul>
      
    </div>
  </div>
</nav> 
      </>
    )
}

export default Navbar
