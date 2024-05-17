import React, { useEffect, useState } from "react";
import profilePicture from "../assets/profile-picture.png";

const ProjectContentRun = () => {

  return (
    <div className="code-executed">
      <h2>Projects</h2>
      <h4><u>Web Development</u></h4>
      <div className="project-container">
      <a style={{color:"lightblue"}} href="https://pixel.tanmaysharma.me">Pixel Rangoli</a> - A Pixel Art Drawing Web App for Desktop and Mobile
      </div>
      <div className="project-container">
      <a style={{color:"lightblue"}} href="https://goforsmurf.com">GoForSmurF</a> - An Ecommerce website where people can buy digital license codes for Games
      </div>
      <div className="project-container">
      <a style={{color:"lightblue"}} href="https://delhidentalhospital.com">Delhi Dental Hospital</a> - A Dental Clinic Website (Freelance Project)
      </div>
      <div className="project-container">
      <a style={{color:"lightblue"}} href="https://levelupsocially.com">Level Up Socially</a> - A website where people can upgrade their social accounts (Freelance Project)
      </div>
      <h4><u>Game Development</u></h4>
      <div className="project-container">
      <a style={{color:"lightblue"}} href="https://play.google.com/store/apps/details?id=com.WeezStudios.BhootBangla&hl=en&gl=US">Bhoot Bangla</a> - A Horror Survival Mobile Game
      </div>
      <div className="project-container">
      <a style={{color:"lightblue"}} href="https://play.google.com/store/apps/details?id=com.DefaultCompany.ISROSpaceexplorer&hl=en&gl=US">SkyRoads</a> - A Racing game set in outer space
      </div>
      <div className="project-container">
      <a style={{color:"lightblue"}} href="https://play.google.com/store/apps/details?id=com.WeeZStudios.com.CoatalCarnage.mobile2D&hl=en&gl=US">Coastal Carnage</a> - A survival game set in Zombie apocalyptic world
      </div>
    </div>
  );
};

export default ProjectContentRun;
