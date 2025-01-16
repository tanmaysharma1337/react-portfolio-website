import React, { createElement, useEffect, useState } from "react";

function AboutContent() {
  const [content, setContent] = useState(" ");
  const [contentText, setContentText] = useState(<p> </p>);
  const [previousContent, setPreviousContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);

  const text = `import React from 'react'  
    import profilePicture from "../assets/profile-picture.png" 
      
    const AboutContent = () => {  
      return ( 
        <div> 
        <div className='about-page'> 
        <img width={"200px"} style={{borderRadius:"50%"}} src={profilePicture} alt="" /> 
        <div style={{textAlign:"center",fontSize:"x-large"}}> 
        <p>Tanmay Sharma</p><p>Software Developer</p></div>  
        </div> 
        <h2>Hey there!</h2> 
        <p style={{width:"40%"}}>Hey, I’m Tanmay Sharma, a software developer from India.
        I work mainly with Python, JavaScript, and C#, and I enjoy diving into both frontend and backend development.
        I’m always exploring new things in programming and love finding creative ways to solve problems with code.
        When I’m not coding, you’ll probably find me gaming or looking into the latest tech trends.</p> 

        <h3>Check out my socials</h3> 
        <a style={{color:"lightblue"}} href="https://github.com/tanmaysharma1337">Github</a> 
        <a style={{color:"lightblue"}} href="https://www.linkedin.com/in/tanmay-weezzee-sharma/">Linkedin</a>   
        </div> 
      )  
    }   
     
    export default AboutContent  `.split("\n");

  useEffect(() => {
    if (currentIndex < text[currentLine].length) {
      const timeout = setTimeout(() => {
        setContent((prevText) => prevText + text[currentLine][currentIndex]);
        setContentText(<p>{content}<span style={{color:"white"}}>│</span></p>);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 25);

      return () => clearTimeout(timeout);
    } else if (currentLine < text.length - 1) {
      let newPrevContent = createElement(
        "p",
        { key: currentLine },
        contentText.props.children[0]
      );
      setContent((prevText) => "");
      setContentText(<p> </p>);
      setPreviousContent((prevContent) => [...prevContent, newPrevContent]);
      setCurrentLine((prevLine) => prevLine + 1);
      setCurrentIndex(0);
    }
  }, [currentIndex, text, currentLine]);

  return (
    <div>
      {previousContent}
      {contentText}
    </div>
  );
}

export default AboutContent;
