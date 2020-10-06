import React from 'react';
// @ts-ignore
import Slide from "react-reveal/Slide";

import './Services.css';
import {Link} from "react-router-dom";

const Services = () => {
  return (
      <section className="services-section pt-4">
        <div className="auto-container">
          <Slide bottom cascade>
            <div className="row clearfix">

            <div className="services-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon flaticon-user"></span>
                </div>
                <h3><Link to="/services">Free consultation from LOV</Link></h3>
                <div className="text">Our counsellors are qualified international education specialists and are always
                  ready to guide you in finding the right course and country.
                </div>
              </div>
            </div>

            <div className="services-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="inner-box" >
                <div className="icon-box">
                  <span className="icon flaticon-handshake"></span>
                </div>
                <h3><Link to="/services">Your application assistance</Link></h3>
                <div className="text">AT LOV, we will guide you through the application process and assist you prepare
                  the right documents for your visa and all submission.
                </div>
              </div>
            </div>

            <div className="services-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon flaticon-paper-plane"></span>
                </div>
                <h3><Link to="/services">Prepare for departure</Link></h3>
                <div className="text">With LOV,<br/> you will step off the plane with confidence and be ready <br/>for your
                  education adventures ahead.<br/>
                </div>
              </div>
            </div>

            <div className="services-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon flaticon-house-silhouette"></span>
                </div>
                <h3><Link to="/services">Your Accommodation prepared upon your arrival</Link></h3>
                <div className="text">With LOV we make sure you will have place to stay upon your <br/>arrival, easy check in
                  with us !!
                </div>
              </div>
            </div>

          </div>
          </Slide>
        </div>
      </section>
  )
}

export default Services;