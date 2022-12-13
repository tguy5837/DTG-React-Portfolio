import React from "react";

const Project = () => {
  return (
    <React.Fragment>
      <div className="work-links">
        <div className="work-link hero-project">
          <a
            href="https://github.com/MadelineRamos/Bohde-Marketplace"
            target="_blank"
          >
            <div className="work-text">
              <h4>Project 1</h4>
              <p>Pro</p>
            </div>
            <img src="./assets/images/Bohdes-Marketplace-Pic.png" alt="" />
          </a>
        </div>

        <div className="work-link">
          <a href="https://annoyingdroid.github.io/FoodyTrack/" target="_blank">
            <div className="work-text">
              <h4>Project 2</h4>
              <p>Pro</p>
            </div>
            <img src="./assets/images/FoodyTrackPic.png" alt="" />
          </a>
        </div>

        <div className="work-link">
          <a href="https://tguy5837.github.io/run-buddy/" target="_blank">
            <div className="work-text">
              <h4>Project 3</h4>
              <p>Pro</p>
            </div>
            <img src="./assets/images/project-3.jpg" alt="" />
          </a>
        </div>

        <div className="work-link">
          <a href="https://tguy5837.github.io/run-buddy/" target="_blank">
            <div className="work-text">
              <h4>Project 4</h4>
              <p>Pro</p>
            </div>
            <img src="./assets/images/project-4.jpg" alt="" />
          </a>
        </div>

        <div className="work-link">
          <a href="https://tguy5837.github.io/run-buddy/" target="_blank">
            <div className="work-text">
              <h4>Run Buddy</h4>
              <p>HTML/CSS</p>
            </div>
            <img
              src="./assets/images/run-buddy.jpg"
              alt="Run Buddy, an online application that offers fitness services."
            />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;
