import { React, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = (props) => {

  // to make the tab active in nav bar once location switched
  let location = useLocation();
  useEffect(()=>{
    // console.log()
  },[location])

    return (
      <>

    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">Kathmandu Times</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fas fa-bars text-light"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
      <li className="nav-item"><Link className={`nav-link ${location.pathname==="/"?"active": ""}`} to="/">General</Link></li>
        <li className="nav-item"><Link className={`nav-link ${location.pathname==="/business"?"active": ""}`} to="/business">Business</Link></li>
        <li className="nav-item"><Link className={`nav-link ${location.pathname==="/entertainment"?"active": ""}`} to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className={`nav-link ${location.pathname==="/health"?"active": ""}`} to="/health">Health</Link></li>
        <li className="nav-item"><Link className={`nav-link ${location.pathname==="/science"?"active": ""}`} to="/science">Science</Link></li>
        <li className="nav-item"><Link className={`nav-link ${location.pathname==="/sports"?"active": ""}`} to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className={`nav-link ${location.pathname==="/technology"?"active": ""}`} to="/technology">Technology</Link></li>
        
      </ul>

      <div className="form-check form-switch ms-2 text-white">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label className="form-check-label" for="flexSwitchCheckDefault">{props.dbtn}</label>
      </div>

      
      
    </div>
  </div>
</nav> 
      </>
    )
}

export default Navbar
