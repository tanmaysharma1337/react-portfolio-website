import React, { createElement, useEffect, useState } from "react";

const GamingContent = () => {
  const [content, setContent] = useState(" ");
  const [contentText, setContentText] = useState(<p> </p>);
  const [previousContent, setPreviousContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const text = `import React from 'react' 
 
  const GamingContent = () => { 
    return ( 
      <div>  
      <h2>Gaming</h2>  
      <p style={{width:"50%"}}>Apart from programming , I also love playing games ,Gaming has been my passion since I can remember. 
      I've not only played games for fun but also competed at a national level as an e-sports athlete (yeah thats what you call them) in Valorant and PUBG PC. 
      <br /> 
      <br /> 
      <div> 
      <img style={{borderRadius:"20px",margin:"20px"}} width={"400px"} src={tournamentImage}/><img style={{borderRadius:"20px",margin:"20px"}} width={"400px"} src={tournamentImage2} /> 
      </div> 
      <br /> 
      <br /> 
      Playing games got me thinking, "Hey, why not make my own?" So, I started to explore game development. 
      It's like being the boss of your own adventure, creating worlds and stories for others to enjoy. 
      Playing games was fun, but making them? That's a whole new level of awesome.  
      <br /> 
      <br /> 
      You can check out few games i made in my programming journey <a style={{color:"lightblue"}} href="https://play.google.com/store/apps/dev?id=6828699757730239188&hl=en_IN&gl=US">here</a> 
      </p> 
    </div> 
    )  
  }  
   
  export default GamingContent  `.split("\n");

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

export default GamingContent;
