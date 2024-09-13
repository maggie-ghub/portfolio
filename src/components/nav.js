import React from 'react'

import './nav.css'
import { Link } from 'react-router-dom'

const nav = () => {
  return (
    <div className='container'>
      <nav className='container-link'>
        <Link to='/' className='link-child'>Home</Link>
        <Link to = '/about' className='link-child'>About me</Link>
        <Link to = '/contact' className='link-child'>Contact me</Link>
      </nav>
    </div>
  )
}

export default nav