import { useState } from 'react'
import './App.css'
import './style.css'
import Navbar from './components/Navbar'
import LOCBar from './components/LOCBar'
import HomeContent from './components/HomeContent.jsx'
import ContentWrapper from './components/ContentWrapper.jsx'

function App() {

  return (<div>
    <LOCBar></LOCBar>
    <Navbar></Navbar>
    <ContentWrapper>
      <HomeContent></HomeContent>
    </ContentWrapper>
   
    </div>
  )
}

export default App
