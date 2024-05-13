import React, { useState } from 'react'
import logo from "../assets/logo.png"
import runIcon from "../assets/run-code.png"

function Navbar (props) {
  const [currentPage,setCurrentPage] = useState("Home");
  
  function setPage(e)
  {
    props.page(e.target.innerText);
    setCurrentPage(e.target.innerText);
  }

  function runPage()
  {
    props.run(currentPage);
  }

  return (
    <div>
      <header className='header'>
        <img className='header-logo' src={logo} alt="" />
        <ul className='header-navigation-buttons'>
            <li><a onClick={setPage}>Home</a></li>
            <li><a onClick={setPage}>About</a></li>
            <li><a onClick={setPage}>Programming</a></li>
            <li><a onClick={setPage}>Gaming</a></li>
        </ul>
        <div className='header-right-content'>
        <a style={{marginRight:"10px"}}>Run Code</a>
        <a onClick={runPage}><img width="15px" src={runIcon} /> </a>
        </div>
      </header>
    </div>
  )
}

export default Navbar
