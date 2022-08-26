import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        {/* <nav ClassName= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> */}
        <div className="container-fluid">
          <NavLink className="navbar-brand font-weight-bold" to="/">{props.title}</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Convert Case</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Word Counter</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Replace</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Beautify</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Password Generator</NavLink>
              </li>

            </ul>

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