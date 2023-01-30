import React, { useState } from "react";
import Header from './components/Header';
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  // Set states for About, Projects, and Contact
  const [aboutSelected, setAboutSelected] = useState(true);
  const [projectSelected, setProjectSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Header
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        projectSelected={projectSelected}
        setProjectSelected={setProjectSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Header>
      <main>
        {aboutSelected ? <About></About> : ''}
        {projectSelected ? <Project></Project> : ''}
        {contactSelected ? <Contact></Contact> : ''}
        {resumeSelected ? <Resume></Resume> : ''}
      </main>
      <Footer />
    </div>
  );
}

export default App;
