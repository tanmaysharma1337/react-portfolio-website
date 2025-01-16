import React, { createElement, useEffect, useState } from "react";

const ProgrammingContent = () => {
  const [content, setContent] = useState(" ");
  const [contentText, setContentText] = useState(<p> </p>);
  const [previousContent, setPreviousContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const text = `import React from 'react '

  const ProgrammingContent = () => {
    return ( 
      <div> 
      <h2>Programming</h2>  
      <p style={{width:"40%"}}>I got into programming out of sheer curiosity—I just wanted to know how things worked behind the scenes in the digital world.
      What started as a simple interest quickly turned into something I absolutely love.
      There's nothing quite like the feeling of bringing an idea to life through code. Every project I work on, every challenge I solve, just deepens my passion for it.
      Programming isn’t just a skill for me; it’s something I genuinely enjoy, and I’m always excited to see where it takes me next.</p> 
  
      <h4>My current tech stack includes:</h4> 
  
      <p><span style={{fontWeight:"bold"}}>Languages:</span> Python, JavaScript, C#, MySQL</p> 
      <p><span style={{fontWeight:"bold"}}>Frontend:</span> ReactJS, HTML5, CSS, PyQt5, TailwindCSS</p> 
      <p><span style={{fontWeight:"bold"}}>Backend:</span> NodeJS, ExpressJS, FastAPI, MySQL, Pandas</p> 
      <p><span style={{fontWeight:"bold"}}>Tools:</span> Unity3D, JIRA, AWS, Git, Wordpress</p> 
    </div> 
    )  
  }  
  
  export default ProgrammingContent `.split("\n");

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
};

export default ProgrammingContent;
