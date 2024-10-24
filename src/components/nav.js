import React from 'react'

import './nav.css'
import { NavLink } from 'react-router-dom'

const nav = () => {
  return (
    <div className='container'>
      <nav className='container-link'>
        <NavLink exact to='/' className='link-child' activeClassName='active'>
          Home
        </NavLink>
        <NavLink to='/about' className='link-child' activeClassName='active'>
          About me
        </NavLink>
        <NavLink to='/contact' className='link-child' activeClassName='active'>
          Contact me
        </NavLink>
      </nav>
    </div>
  )
}

export default nav