import React from 'react'

const Nav = (props) => {
    const {
        setAboutSelected,
        setProjectSelected,
        setContactSelected,
        setResumeSelected
    } = props;

  return (
    <nav>
        <ul>
            <li>
                <button onClick={() => {
                    setAboutSelected(true);
                    setProjectSelected(false);
                    setContactSelected(false);
                    setResumeSelected(false);
                    document.getElementById('about-me').scrollIntoView();
                }}>
                    About Me
                </button>
            </li>
            <li>
                <button onClick={() => {
                    setAboutSelected(false);
                    setProjectSelected(true);
                    setContactSelected(false);
                    setResumeSelected(false);
                    document.getElementById('projects').scrollIntoView();
                }}>
                    Portfolio
                </button>
            </li>
            <li>
                <button onClick={() => {
                    setAboutSelected(false);
                    setProjectSelected(false);
                    setContactSelected(true);
                    setResumeSelected(false);
                }}>
                    Contact
                </button>
            </li>
            <li>
                <button onClick={() => {
                    setAboutSelected(false);
                    setProjectSelected(false);
                    setContactSelected(false);
                    setResumeSelected(true);
                }}>
                    Resume
                </button>
            </li>
        </ul>
    </nav>
  )
}

export default Nav;