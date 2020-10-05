import React from 'react';

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
                  <div className="card-body">
                    <h5 className="card-title">Interested in studying overseas with LOV?</h5>
                    <p className="card-text text-white">Fill in your details and we will contact you!</p>
                  </div>
                </div>
              </div>
              <div className="col-12 order-1 order-md-2">
                <img className="img-fluid" alt="formImage" src="https://lov.education/assets/images/mainform.jpg"/>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card"
                 style={{ borderRadius: 0, border: 0, borderColor: "#FFFFFF", borderStyle: "solid" }}>
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