import React, { createElement, useEffect, useState } from "react";

function ProjectContent() {
  const [content, setContent] = useState(" ");
  const [contentText, setContentText] = useState(<p> </p>);
  const [previousContent, setPreviousContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);

  const text = `import React, { useEffect, useState } from "react";
  import profilePicture from "../assets/profile-picture.png";
  
  const ProjectContentRun = () => {
  
    return (
      <div className="code-executed">  
        <h2>Projects</h2>  
        <h4><u>Web Development</u></h4>  
        <div className="project-container">  
        <a style={{color:"lightblue"}} href="https://pixel.tanmaysharma.me">Pixel Rangoli</a> 
        - A Pixel Art Drawing Web App for Desktop and Mobile  
        </div>  
        <div className="project-container">  
        <a style={{color:"lightblue"}} href="https://goforsmurf.com">GoForSmurF</a> 
        - An Ecommerce website where people can buy digital license codes for Games  
        </div>  
        <div className="project-container">  
        <a style={{color:"lightblue"}} href="https://delhidentalhospital.com">Delhi Dental Hospital</a> 
        - A Dental Clinic Website (Freelance Project)  
        </div>  
        <div className="project-container">  
        <a style={{color:"lightblue"}} href="https://levelupsocially.com">Level Up Socially</a> 
        - A website where people can upgrade their social accounts (Freelance Project)  
        </div>  
        <h4><u>Game Development</u></h4>  
        <div className="project-container">  
        <a style={{color:"lightblue"}} href="https://play.google.com/store/apps/details?id=com.WeezStudios.BhootBangla&hl=en&gl=US"> 
        Bhoot Bangla</a> - A Horror Survival Mobile Game  
        </div>  
        <div className="project-container">  
        <a style={{color:"lightblue"}} href="https://play.google.com/store/apps/details?id=com.DefaultCompany.ISROSpaceexplorer&hl=en&gl=US"> 
        SkyRoads</a> - A Racing game set in outer space  
        </div> 
        <div className="project-container">  
        <a style={{color:"lightblue"}} href="https://play.google.com/store/apps/details?id=com.WeeZStudios.com.CoatalCarnage.mobile2D&hl=en&gl=US">
        Coastal Carnage</a> - A survival game set in Zombie apocalyptic world  
        </div>  
      </div>  
    );  
  };  
    
  export default ProjectContentRun;  `.split("\n");

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

export default ProjectContent;
