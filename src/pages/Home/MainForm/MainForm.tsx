import React from 'react';
// @ts-ignore
import Fade from "react-reveal/Fade";

import './MainForm.css';
import ContactForm from "../../shared/ContactForm/ContactForm";

const MainForm = () => {
  return (
      <section className="main-form">
        <div className="row no-gutters">
          <div className="col-12 col-md-6">
            <div className="row no-gutters">
              <div className="col-12 order-2 order-md-1">
                <div className="card text-white" style={{ backgroundColor: "#001e57", margin: 0, borderRadius: 0 }}>
                  <div className="card-body ">
                    <h4 className="card-title text-center">Interested in studying overseas with LOV?</h4>
                    <h6 className="card-text text-white text-center">Fill in your details and we will contact you!</h6>
                  </div>
                </div>
              </div>
              <div className="col-12 order-1 order-md-2">
                <Fade>
                  <img className="img-fluid" alt="formImage" src="/images/mainform.jpg"/>
                </Fade>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card"
                 style={{
                   borderRadius: 0,
                   border: 0,
                   borderColor: "#FFFFFF",
                   borderStyle: "solid"
                 }}>
              <div className="card-body">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default MainForm;