import React from "react";
import Nav from "../Nav";

function Header(props) {
  const {
    aboutSelected,
    setAboutSelected,
    projectSelected,
    setProjectSelected,
    contactSelected,
    setContactSelected
} = props;

  return (
    <header>
      <a href="/">
        <h1>Taylor Guy</h1>
      </a>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        projectSelected={projectSelected}
        setProjectSelected={setProjectSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
    </header>
  );
}

export default Header;
