import React from 'react';

import './Services.css';

const Services = () => {
  return (
      <section className="services-section mt-4">
        <div className="auto-container">
          <div className="row clearfix">

            <div className="services-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon flaticon-chemistry-lab-instrument"></span>
                </div>
                <h3><a href="services-1.html">Free consultation from LOV</a></h3>
                <div className="text">Our counsellors are qualified international education specialists and are always
                  ready to guide you in finding the right course and country.
                </div>
              </div>
            </div>

            <div className="services-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="inner-box" >
                <div className="icon-box">
                  <span className="icon flaticon-chemistry-lab-instrument"></span>
                </div>
                <h3><a href="services-1.html">Your application assistance</a></h3>
                <div className="text">AT LOV, we will guide you through the application process and assist you prepare
                  the right documents for your visa and all submission.
                </div>
              </div>
            </div>

            <div className="services-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon flaticon-chemistry-lab-instrument"></span>
                </div>
                <h3><a href="services-1.html">Prepare for departure</a></h3>
                <div className="text">With LOV,<br/> you will step off the plane with confidence and be ready <br/>for your
                  education adventures ahead.<br/>
                </div>
              </div>
            </div>

            <div className="services-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="icon flaticon-chemistry-lab-instrument"></span>
                </div>
                <h3><a href="services-1.html">Your Accommodation prepared upon your arrival</a></h3>
                <div className="text">With LOV we make sure you will have place to stay upon your <br/>arrival, easy check in
                  with us !!
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  )
}

export default Services;