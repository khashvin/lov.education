import React from 'react';

import {Helmet} from "react-helmet";
import PageTitle from "../shared/PageTitle/PageTitle";
import ContactBody from "./ContactBody/ContactBody";
import MapSection from "./MapSection/MapSection";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact us - Literacy of Virtue</title>
      </Helmet>
      <PageTitle title="Contact Us" />
      <ContactBody />
      <MapSection />
    </>
  )
}

export default Contact;