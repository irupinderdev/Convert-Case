import React from 'react'
import PropTypes from 'prop-types'
import {NavLink } from 'react-router-dom'

export default function Navbar(props) {
  return (
      <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
         {/* <nav ClassName= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> */}
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/home">{props.title}</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/wordcounter">Word Counter</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/replace">Replace</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/beautify">Beautify</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/passwordgenerator">Password Generator</NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More Tools
            </NavLink>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><NavLink className="dropdown-item" to="/">Bold Text Generator</NavLink></li>
              <li><NavLink className="dropdown-item" to="/">Italic Text Generator</NavLink></li>
              <li><NavLink className="dropdown-item" to="/">Underline Text Generator</NavLink></li>
            </ul>
          </li>
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-warning" type="submit">Search</button>
        </form> */}
        {/* <div className={`form-check form-switch text-${props.mode ==='light'? 'Dark' : 'light'}`}>
    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode </label>
          </div> */}
      </div>
    </div>
  </nav>
  </>
  )
}
 Navbar.propTypes = {
   title: PropTypes.string.isRequired,
   aboutText: PropTypes.string.isRequired
  }; 

//   navbar.defaultProps = {
//     title: 'Title',
//     aboutText: 'About'
// };