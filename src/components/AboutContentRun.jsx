import React from 'react'
import profilePictre from "../assets/profile-picture.png"

const AboutContentRun = () => {
  return (
    <div className='code-executed'>
    <div className='about-page'>
    <img width={"200px"} style={{borderRadius:"50%"}} src={profilePictre} alt="" /><div style={{textAlign:"center",fontSize:"x-large"}}><p>Tanmay Sharma</p><p>Software Developer</p></div>
    </div>
    <h2>About</h2>
    <p style={{width:"40%"}}>If I had to sum myself up in one word, it would be "curious" .Ever since I can remember, 
    I've been fascinated by how things work and how to make them better. That's what drew me to programming. 
    It's like being handed a magic wand that lets you bring your ideas to life, whether it's creating a game, a website, or a tool to solve a problem. 
    I love the creativity it allows, the way you can build something from scratch and watch it evolve into something amazing. 
    It's not just about typing lines of code; it's about crafting solutions and making a tangible impact. 
    Programming is my playground, my canvas, and my passion. 
    It's where I feel most alive, exploring endless possibilities and constantly learning something new. 
    And that's why I'm here, ready to dive into the next adventure and see where it takes me. </p>
    </div>
  )
}

export default AboutContentRun
