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
                <span onClick={() => {
                    setAboutSelected(true);
                    setProjectSelected(false);
                    setContactSelected(false);
                }}>
                    About Me
                </span>
            </li>
            <li>
                <span onClick={() => {
                    setAboutSelected(false);
                    setProjectSelected(true);
                    setContactSelected(false);
                }}>
                    Portfolio
                </span>
            </li>
            <li>
                <span onClick={() => {
                    setAboutSelected(false);
                    setProjectSelected(false);
                    setContactSelected(true);
                }}>
                    Contact
                </span>
            </li>
            <li>
                <span>
                    Resume
                </span>
            </li>
        </ul>
    </nav>
  )
}

export default Nav;