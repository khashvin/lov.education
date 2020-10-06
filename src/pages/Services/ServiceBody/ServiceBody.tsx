import React from 'react';

import './ServiceBody.css';
import ServiceBox from "../ServiceBox";

const ServiceBody = () => {
  return (
    <section className="services-section-three style-two">
      <div className="auto-container">

        <div className="sec-title">
          <div className="row">
              <div className="col-12">
                <h2>
                  {"Start your journey with us!\n"}
                  <br/>
                  {"We guide your pathways."}
                </h2>
              </div>
            <div className="col-12 mt-4">
              <h5>
                {"LOV provides a wide range of services that support you with your international education journey. " +
                "If you are dreaming of studying overseas, we will get you there. From course information to career " +
                "advice, we are dedicated to you and your future."}
              </h5>
            </div>
          </div>
        </div>


        <div className="row">
          <ServiceBox
            image="/images/services/1.jpg"
            title="Free consultation from LOV"
            text="Our counsellors are qualified international education specialists and are
          always ready to guide you in finding the right course and country."
          />
          <ServiceBox
            image="/images/services/2.jpg"
            title="Your application assistance"
            text="At LOV, we will guide you through the application process and assist you
          prepare the right documents for your visa and all submission."
          />

          <ServiceBox
            image="/images/services/3.jpg"
            title="Prepare for departure"
            text="With LOV , you will step off the plane with confidence and be ready
          for your education adventures ahead."
          />

          <ServiceBox
            image="/images/services/4.jpg"
            title="Your Accommodation prepared upon your arrival"
            text="With LOV we make sure you will have place to stay upon your arrival, easy check in with us !!"
          />
        </div>
      </div>
    </section>
  )
}

export default ServiceBody;