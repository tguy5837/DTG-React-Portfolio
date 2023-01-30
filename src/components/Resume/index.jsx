/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import resume from "../../resume/Resume.docx.pdf#toolbar=0"

const Resume = () => {
  return (
    <div>
      <h2>PDF Example with iframe</h2>
      <embed
        src={resume}
        type="application/pdf"
        width="100%"
        height="500px"
      ></embed>
    </div>
  );
};

export default Resume;
