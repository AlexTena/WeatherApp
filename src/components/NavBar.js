import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (  
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  
            <Link to="/" className="navbar-brand" >Weather App</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink exact activeClassName="active" to="/monday" className="nav-item nav-link">Monday</NavLink>
                <NavLink exact activeClassName="active" to="/tuesday" className="nav-item nav-link">Tuesday</NavLink>
                <NavLink exact activeClassName="active" to="/wednesday" className="nav-item nav-link">Wednesday</NavLink>
                <NavLink exact activeClassName="active" to="/thursday" className="nav-item nav-link">Thursday</NavLink>
                <NavLink exact activeClassName="active" to="/friday" className="nav-item nav-link">Friday</NavLink>
              </div>
            </div>
        </nav>
            )
        }
    
    export default NavBar