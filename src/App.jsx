import { useState } from "react";
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


function App() {
  const Pages = {
    Home: {
      text:<HomeContent></HomeContent>,
      run:<HomeContentRun></HomeContentRun>},
    About: {
      text:<AboutContent></AboutContent>,
      run:<AboutContentRun></AboutContentRun>},
    Programming: {
      text:<ProgrammingContent></ProgrammingContent>,
      run:<ProgrammingContentRun></ProgrammingContentRun>},
    Gaming: {
      text:<GamingContent></GamingContent>,
      run:<GamingContentRun></GamingContentRun>},
  };

  const [currentPage, setCurrentPage] = useState(Pages["Home"]["text"]);

  function setPage(page) {
    setCurrentPage(Pages[page]["text"]);
  }
  function runPage(page) {
    setCurrentPage(Pages[page]["run"]);
  }

  return (
    <div>
      <LOCBar></LOCBar>
      <Navbar page={setPage} run={runPage}></Navbar>
      <ContentWrapper>{currentPage}</ContentWrapper>
    </div>
  );
}

export default App;
