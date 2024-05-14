import React, { useEffect, useState } from "react";
import logo from "../assets/logo.webp";
import runIcon from "../assets/run-code.png";

function Navbar(props) {
  const [currentPage, setCurrentPage] = useState("Home");

  function setPage(e) {
    props.page(e.target.innerText);
    setCurrentPage(e.target.innerText);
    
    let headerMenuItems = e.target.parentElement.parentElement;
    headerMenuItems.childNodes.forEach((value)=>{
      if (value.childNodes[0] != e.target)
        {
          value.childNodes[0].style.backgroundColor = null
        }
      else
        {
          e.target.style.backgroundColor = "rgb(62, 63, 63)"
        }
    })
  }

  useEffect(()=>{
    document.getElementById("default-page").click()
  },[])


  function runPage() {
    props.run(currentPage);
  }

  return (
    <div>
      <header className="header">
        <img className="header-logo" src={logo} alt="" />
        <ul className="header-navigation-buttons">
          <li>
            <a id="default-page" onClick={setPage}>Home</a>
          </li>
          <li>
            <a onClick={setPage}>About</a>
          </li>
          <li>
            <a onClick={setPage}>Programming</a>
          </li>
          <li>
            <a onClick={setPage}>Gaming</a>
          </li>
          <li>
            <a href="mailto:androtanmay43@gmail.com">Contact</a>
          </li>
        </ul>
        <div className="header-right-content">
          <a className="run-code-text" onClick={runPage} style={{ marginRight: "10px" }}>
            Run Code
          </a>
          <a onClick={runPage}>
            <img width="15px" src={runIcon} />{" "}
          </a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
