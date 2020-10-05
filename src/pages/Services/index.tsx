import React from 'react';

import {Helmet} from "react-helmet";
import PageTitle from "../shared/PageTitle/PageTitle";
import ServiceBody from "./ServiceBody/ServiceBody";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Literacy of Virtue</title>
      </Helmet>
      <PageTitle title="Our Services" />
      <ServiceBody />
    </>
  )
}

export default Services;