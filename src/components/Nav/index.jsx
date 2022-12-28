import React from 'react'

const Nav = (props) => {
    const {
        aboutSelected,
        setAboutSelected,
        projectSelected,
        setProjectSelected,
        contactSelected,
        setContactSelected
    } = props;

  return (
    <nav>
        <ul>
            <li>
                <button onClick={() => {
                    setAboutSelected(true);
                    setProjectSelected(false);
                    setContactSelected(false);
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
                }}>
                    Contact
                </button>
            </li>
            <li>
                <button>
                    Resume
                </button>
            </li>
        </ul>
    </nav>
  )
}

export default Nav;