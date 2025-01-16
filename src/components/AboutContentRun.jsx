import React from "react";
import profilePicture from "../assets/profile-picture.png";

const AboutContentRun = () => {

  return (
    <div className="code-executed">
      <div className="about-page">
        <img
          width={"200px"}
          style={{ borderRadius: "50%" }}
          src={profilePicture}
          alt=""
        />
        <div style={{ textAlign: "center", fontSize: "x-large" }}>
          <p>Tanmay Sharma</p>
          <p>Software Developer</p>
        </div>
      </div>
      <h2>Hey there!</h2>
      <p className="content">
        I’m Tanmay Sharma, a software developer from India.
        I work mainly with Python, JavaScript, and C#, and I enjoy diving into both frontend and backend development.
        I’m always exploring new things in programming and love finding creative ways to solve problems with code.
        When I’m not coding, you’ll probably find me gaming or looking into the latest tech trends.<br />
        <br />
      </p>
      <div className="content-devider">
        <hr />
      </div>
      <h3>Check out my socials</h3>
      <a
        style={{ color: "lightblue" }}
        href="https://github.com/tanmaysharma1337"
      >
        Github
      </a>{" "}
      <a
        style={{ color: "lightblue" }}
        href="https://www.linkedin.com/in/tanmay-weezzee-sharma/"
      >
        Linkedin
      </a>
    </div>
  );
};

export default AboutContentRun;
