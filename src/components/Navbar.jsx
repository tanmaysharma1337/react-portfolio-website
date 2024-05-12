import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div>
      <header className='header'>
        <img className='header-logo' src={logo} alt="" />
        <ul className='header-navigation-buttons'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Programming</a></li>
            <li><a href='#'>Gaming</a></li>
        </ul>
      </header>
    </div>
  )
}

export default Navbar
