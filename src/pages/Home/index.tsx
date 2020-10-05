import React from 'react';
import Slider from "./Slider/Slider";
import MainForm from "./MainForm/MainForm";
import Services from "./Services/Services";
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Literacy of Virtue</title>
      </Helmet>
      <Slider />
      <MainForm />
      <Services />
    </>
  )
}

export default Home;