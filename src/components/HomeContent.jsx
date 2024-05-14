import React, { createElement, useEffect, useState } from "react";

const HomeContent = () => {
  const [content, setContent] = useState(" ");
  const [contentText, setContentText] = useState(<p> </p>);
  const [previousContent, setPreviousContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const text = `import React from 'react' 
 
  const HomeContent = () => { 
    return ( 
      <div> 
        <h1>Hello World!</h1> 
        <h2>I am Tanmay Sharma</h2> 
        <h3>Welcome to my Website!</h3> 
      </div>  
    )  
  }  
   
  export default HomeContent `.split("\n");

  useEffect(() => {
    if (currentIndex < text[currentLine].length) {
      const timeout = setTimeout(() => {
        setContent((prevText) => prevText + text[currentLine][currentIndex]);
        setContentText(<p>{content} <span style={{color:"white"}}>│</span></p>);
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

export default HomeContent;
