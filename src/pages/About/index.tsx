import React from 'react';

import {Helmet} from "react-helmet";
import PageTitle from "../shared/PageTitle/PageTitle";
import AboutBody from "./AboutBody/AboutBody";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About us - Literacy of Virtue</title>
      </Helmet>
      <PageTitle title="About Us" />
      <AboutBody />
    </>
  )
}

export default About;