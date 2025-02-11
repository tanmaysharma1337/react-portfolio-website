import { useState } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "./App.css";
import "./style.css";
import Navbar from "./components/Navbar";
import LOCBar from "./components/LOCBar";
import HomeContent from "./components/HomeContent.jsx";
import ContentWrapper from "./components/ContentWrapper.jsx";
import AboutContent from "./components/AboutContent.jsx";
import HomeContentRun from "./components/HomeContentRun.jsx";
import AboutContentRun from "./components/AboutContentRun.jsx";
import ProgrammingContent from "./components/ProgrammingContent.jsx";
import ProgrammingContentRun from "./components/ProgrammingContentRun.jsx";
import GamingContent from "./components/GamingContent.jsx";
import GamingContentRun from "./components/GamingContentRun.jsx";
import ProjectContent from "./components/ProjectContent.jsx";
import ProjectContentRun from "./components/ProjectContentRun.jsx";

function App() {
  const Pages = {
    Home: {
      text: <HomeContent />,
      run: <HomeContentRun />,
      seo: { 
        title: "Tanmay Sharma | Software Developer & Tech Enthusiast", 
        description: "I'm Tanmay Sharma, a software developer passionate about coding, gaming, and building innovative tech solutions. Explore my projects and skills here!" 
      }
    },
    About: {
      text: <AboutContent />,
      run: <AboutContentRun />,
      seo: { 
        title: "About Me | Tanmay Sharma", 
        description: "Learn more about Tanmay Sharma, a skilled full-stack software developer with experience in web development, Python, and system design." 
      }
    },
    Programming: {
      text: <ProgrammingContent />,
      run: <ProgrammingContentRun />,
      seo: { 
        title: "Programming Portfolio | Tanmay Sharma", 
        description: "Explore my programming journey, coding projects, and contributions in Python, JavaScript, and full-stack development." 
      }
    },
    Gaming: {
      text: <GamingContent />,
      run: <GamingContentRun />,
      seo: { 
        title: "Gaming & Tech | Tanmay Sharma", 
        description: "Gaming enthusiast and tech geek! Check out my gaming-related content, reviews, and projects blending technology and gaming." 
      }
    },
    Projects: {
      text: <ProjectContent />,
      run: <ProjectContentRun />,
      seo: { 
        title: "My Projects | Tanmay Sharma", 
        description: "A collection of my personal and professional projects, including web applications, AI experiments, and software tools." 
      }
    },
  };

  const [currentPage, setCurrentPage] = useState(Pages["Home"]["text"]);
  const [seo, setSeo] = useState(Pages["Home"]["seo"]);

  function setPage(page) {
    setCurrentPage(Pages[page]["text"]);
    setSeo(Pages[page]["seo"]);
  }

  function runPage(page) {
    setCurrentPage(Pages[page]["run"]);
    setSeo(Pages[page]["seo"]);
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content="Tanmay Sharma, Software Developer, Full Stack Developer, Python, JavaScript, Web Development, Tech Enthusiast" />
        <meta name="author" content="Tanmay Sharma" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div>
        <LOCBar />
        <Navbar page={setPage} run={runPage} />
        <ContentWrapper>{currentPage}</ContentWrapper>
      </div>
    </HelmetProvider>
  );
}

export default App;
