import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom';
import { Nav } from '.';

const nav = () => {
  return (
    <div className='navBar'>
        <div className='nav-links'>
            <NavLink className="nav-link" to="/">
                Home
            </NavLink>
            <NavLink className="nav-link" to="/author">
                Sobre el Autor
            </NavLink>
            <NavLink className="nav-link" to="/book">
                El libro
            </NavLink>
        </div>
    </div>
  )
}

export default nav