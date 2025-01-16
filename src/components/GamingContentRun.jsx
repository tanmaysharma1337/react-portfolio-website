import React from "react";
import tournamentImage from "../assets/tournament-image.png";
import tournamentImage2 from "../assets/tournament-image2.png";

const GamingContentRun = () => {
  return (
    <div className="code-executed">
      <h2>Gaming</h2>
      <p className="content">
        Apart from programming , I also love playing games ,Gaming has been my
        passion since I can remember. I've not only played games for fun but
        also competed at a national level as an e-sports athlete (yeah thats
        what you call them) in Valorant and PUBG PC.
        <br />
        <br />
        <div>
          <img
            style={{ borderRadius: "20px", margin: "20px" }}
            width={"400px"}
            src={tournamentImage}
          />
          <img
            style={{ borderRadius: "20px", margin: "20px" }}
            width={"400px"}
            src={tournamentImage2}
          />
        </div>
        <br />
        <br />
        Gaming has always been a big part of my life, but it wasn’t long before I wondered, "What goes into making these worlds come alive?"
        That question drew me into game development, where I found the joy of combining creativity and technical skills to build experiences for others.
        <br />
        <br />
        You can check out few games i made in my programming journey{" "}
        <a
          style={{ color: "lightblue" }}
          href="https://play.google.com/store/apps/dev?id=6828699757730239188&hl=en_IN&gl=US"
        >
          here
        </a>
      </p>
    </div>
  );
};

export default GamingContentRun;
