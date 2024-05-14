import React, { createElement, useEffect, useState } from "react";

const ProgrammingContent = () => {
  const [content, setContent] = useState(" ");
  const [contentText, setContentText] = useState(<p> </p>);
  const [previousContent, setPreviousContent] = useState([]);
  const [currentIndex,setCurrentIndex] = useState(0)
  const [currentLine,setCurrentLine] = useState(0)
  const text = `import React from 'react '

  const ProgrammingContent = () => {
    return ( 
      <div className='code-executed'> 
      <h2>Programming</h2>  
      <p style={{width:"40%"}}>My journey into programming began with a spark of curiosity that ignited into a passionate love affair with code. 
      It all started with a desire to understand the mechanics behind the digital world, to unravel its mysteries one line of code at a time. 
      The thrill of seeing my ideas come to life through programming fueled my passion, propelling me into a realm where creativity meets logic. 
      With each project, each challenge conquered, my affection for programming deepened, as I discovered its infinite possibilities and the joy of building something from scratch. 
      Programming isn't just a skill; it's a love story that continues to evolve with every line of code I write.</p> 
  
      <h4>My tech stack includes:</h4> 
  
      <p><span style={{fontWeight:"bold"}}>Languages:</span> Python, JavaScript, C#, MySQL</p> 
      <p><span style={{fontWeight:"bold"}}>Frontend:</span> ReactJS, HTML5, CSS, PyQt5, TailwindCSS</p> 
      <p><span style={{fontWeight:"bold"}}>Backend:</span> NodeJS, ExpressJS, FastAPI, MySQL, Pandas</p> 
      <p><span style={{fontWeight:"bold"}}>Tools:</span> Unity3D, JIRA, AWS, Git, Wordpress</p> 
    </div> 
    )  
  }  
  
  export default ProgrammingContent `.split("\n")


  useEffect(() => {
  if (currentIndex < text[currentLine].length) {
    const timeout = setTimeout(() => {
      setContent(prevText => prevText+text[currentLine][currentIndex]);
      setContentText(<p>{content}│</p>)
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, 1);

    return () => clearTimeout(timeout);
  }
  else if(currentLine < text.length-1)
  {
    let newPrevContent = createElement("p",{key:currentLine},contentText.props.children[0])
    setContent(prevText => "")
    setContentText(<p> </p>)
    setPreviousContent(prevContent => [...prevContent,newPrevContent])
    setCurrentLine(prevLine => prevLine+1)
    setCurrentIndex(0);
  }
}, [currentIndex,text,currentLine]);

  return (
    <div>
      {previousContent}
      {contentText}
    </div>
  );
};

export default ProgrammingContent;
