import React from "react";

import bhodesMarketPlace from "../../images/Bohdes-Marketplace-Pic.png"
import foodyTrack from '../../images/FoodyTrackPic.png'
import projectThree from '../../images/project-3.jpg'
import projectFour from '../../images/project-4.jpg'
import runBuddy from '../../images/run-buddy.jpg'

const Project = () => {
  return (
    <React.Fragment>
      <div className="work-links">
        <div className="work-link hero-project" id="projects">
          <a
            href="https://github.com/MadelineRamos/Bohde-Marketplace"
            target="_blank" rel="noreferrer"
          >
            <div className="work-text">
              <h4>Bohde-Marketplace</h4>
              <p>Pro</p>
            </div>
            <img src={bhodesMarketPlace} alt="" />
          </a>
        </div>

        <div className="work-link">
          <a href="https://annoyingdroid.github.io/FoodyTrack/" target="_blank" rel="noreferrer">
            <div className="work-text">
              <h4>FoodyTrack</h4>
              <p>Pro</p>
            </div>
            <img src={foodyTrack} alt="" />
          </a>
        </div>

        <div className="work-link">
          <a href="https://tguy5837.github.io/run-buddy/" target="_blank" rel="noreferrer">
            <div className="work-text">
              <h4>Project 3</h4>
              <p>Pro</p>
            </div>
            <img src={projectThree} alt="" />
          </a>
        </div>

        <div className="work-link">
          <a href="https://tguy5837.github.io/run-buddy/" target="_blank" rel="noreferrer">
            <div className="work-text">
              <h4>Project 4</h4>
              <p>Pro</p>
            </div>
            <img src={projectFour} alt="" />
          </a>
        </div>

        <div className="work-link">
          <a href="https://tguy5837.github.io/run-buddy/" target="_blank" rel="noreferrer">
            <div className="work-text">
              <h4>Run Buddy</h4>
              <p>HTML/CSS</p>
            </div>
            <img
              src={runBuddy}
              alt="Run Buddy, an online application that offers fitness services."
            />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;
