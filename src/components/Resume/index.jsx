/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import resume from "../../resume/Resume.pdf";

const Resume = () => {
  return <iframe alt="DTG Resume" src={resume} width="100%"></iframe>;
};

export default Resume;
