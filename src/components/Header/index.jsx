import React from "react";
import Nav from "../Nav";

function Header(props) {
  const {
    aboutSelected,
    setAboutSelected,
    projectSelected,
    setProjectSelected,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected
  } = props;

  return (
    <header>
      <div className="header-box justify-content-between">
        <a href="/DTG-React-Portfolio" className="header-title">
          <h1 className="header-title">Taylor Guy</h1>
        </a>
        <Nav
          aboutSelected={aboutSelected}
          setAboutSelected={setAboutSelected}
          projectSelected={projectSelected}
          setProjectSelected={setProjectSelected}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
          resumeSelected={resumeSelected}
          setResumeSelected={setResumeSelected}
        ></Nav>
      </div>
    </header>
  );
}

export default Header;
