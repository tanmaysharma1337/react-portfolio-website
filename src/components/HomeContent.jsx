import React, { createElement, useEffect, useState } from "react";

const HomeContent = () => {
  const [content, setContent] = useState(" ");
  const [contentText, setContentText] = useState(<p> </p>);
  const [previousContent, setPreviousContent] = useState(<p></p>);
  const [currentIndex,setCurrentIndex] = useState(0)
  const [currentLine,setCurrentLine] = useState(0)
  const text = `Hey there!




  
I'm Tanmay Sharma, and if I had to sum myself up in one word, it would be "curious" .Ever since I can remember,
I've been fascinated by how things work and how to make them better. That's what drew me to programming.
It's like being handed a magic wand that lets you bring your ideas to life, whether it's creating a game, a website, or a tool to solve a problem.
I love the creativity it allows, the way you can build something from scratch and watch it evolve into something amazing.
It's not just about typing lines of code; it's about crafting solutions and making a tangible impact.
Programming is my playground, my canvas, and my passion.
It's where I feel most alive, exploring endless possibilities and constantly learning something new.
And that's why I'm here, ready to dive into the next adventure and see where it takes me.`.split("\n")


  useEffect(() => {
  if (currentIndex < text[currentLine].length) {
    const timeout = setTimeout(() => {
      setContent(prevText => prevText+text[currentLine][currentIndex]);
      setContentText(<p>{content}│</p>)
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, 20);

    return () => clearTimeout(timeout);
  }
  else if(currentLine < text.length-1)
  {
    let updatedPrevContent = createElement("p",{key:{currentLine}},contentText.props.children[0])
    setContent(prevText => "")
    setContentText(<p> </p>)
    setPreviousContent(prevcontent => [prevcontent,updatedPrevContent])
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

export default HomeContent;
