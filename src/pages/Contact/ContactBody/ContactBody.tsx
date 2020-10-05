import React from 'react';
import ContactForm from "../../shared/ContactForm/ContactForm";

import './ContactBody.css';

const ContactBody = () => {
  return (
    <section className="contact-page-section">
      <div className="auto-container">
        <div className="row clearfix">

          <div className="col-12">
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <h5>
                <strong>{"Success!"}</strong>
                {"You have successfully sent a message to us. We will get back to you shortly."}
              </h5>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">{"X"}</span>
              </button>
            </div>
          </div>

          <div className="info-column col-lg-4 col-md-12 col-sm-12">
            <div className="inner-column">

              <div className="title-box">
                <h3>{"Contact Details"}</h3>
                <div className="title-text">{"Got a question? Ask and we will be happy to assist you!"}</div>
              </div>
              <ul className="contact-info-list">
                <li>
                  <span className="icon icon-location-pin"></span>
                  <strong>{"Office Address"}</strong>
                  {"C - 3A-03, Centum @ Oasis Corporate Park, No., 2, Jalan PJU 1A/3A, Taipan"}
                </li>
                <li><span className="icon icon-envelope-open"></span>
                  <strong>{"Email us"}</strong>
                  {"info@lov.education"}
                </li>
                <li>
                  <span className="icon icon-call-in"></span>
                  <strong>{"Call Support"}</strong>
                  {"1300 - 300 - 993 (TOLL FREE)"}
                </li>
                <li>
                  <span className="icon fab fa-whatsapp" style={{fontSize: 32}}></span>
                  <strong>{"WhatsApp"}</strong>
                  {"+6019 - 752 9930"}
                </li>
              </ul>

              <ul className="social-links">
                <li><a href="https://facebook.com/literacyofvirtue"><span className="fab fa-facebook-f"></span></a></li>
                <li><a href="https://instagram.com/literacyofvirtue"><span className="fab fa-instagram"></span></a></li>
                <li><a href="https://wa.me/60197529930"><span className="fab fa-whatsapp"></span></a></li>
              </ul>

            </div>
          </div>

          <div id="form" className="form-column col-lg-8 col-md-12 col-sm-12">
            <div className="inner-column">

              <div className="sec-title">
                <h2>{"Send a Message"}</h2>
              </div>

              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactBody;