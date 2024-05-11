import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import LOCBar from './components/LOCBar'
import './style.css'

function App() {

  return (<div>
    <LOCBar></LOCBar>
    <Navbar></Navbar>
    <div className='main-content'>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>

    </div>
    </div>
  )
}

export default App
