import React from 'react';

import './Footer.css'
import {Link} from "react-router-dom";

const Footer = () => {

  return (
    <footer className="main-footer">

      <div className="auto-container">

        <div className="widgets-section">
          <div className="row clearfix">

            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">

                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget about-widget">
                    <div className="logo">
                      <Link to="/">
                        <img src="/images/logo-white.png" alt="" width="190px" height="55px"/>
                      </Link>
                    </div>
                    <div className="text">Start your journey with us!<br/>We guide your pathways.</div>
                    <Link to="/about" className="theme-btn btn-style-four">About Us</Link>
                  </div>
                </div>

                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget services-widget">
                    <h2>Our Services</h2>
                    <ul className="footer-service-list">
                      <li><Link to="/services">Free Consultation</Link></li>
                      <li><Link to="/services">Application Assistance</Link></li>
                      <li><Link to="/services">Prepare For Departure</Link></li>
                      <li><Link to="/services">Accommodation</Link></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">

                <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                  <div className="footer-widget post-widget">
                    <h2>Facebook</h2>
                    <div id="fb-root"/>

                    <div className="fb-page" data-href="https://www.facebook.com/literacyofvirtue" data-tabs="timeline"
                         data-width="" data-height="300px" data-small-header="true" data-adapt-container-width="true"
                         data-hide-cover="false" data-show-facepile="false">
                      <blockquote cite="https://www.facebook.com/literacyofvirtue" className="fb-xfbml-parse-ignore">
                        <a href="https://www.facebook.com/literacyofvirtue">Literacy of Virtue</a>
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                  <div className="footer-widget contact-widget">
                    <h2>Contact</h2>
                    <div className="number">+6012 - 420 9899</div>
                    <ul>
                      <li>C-3A-03, Centum @ Oasis Corporate Park, No., 2, Jalan PJU 1A/3A, Taipan</li>
                      <li>info@lov.education</li>
                      <li>Mon to Sat: 9:am to 6pm</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="clearfix">
            <div className="pull-left">
              <div className="copyright">&copy; 2020 Literacy of Virtue. All rights reserved.</div>
            </div>
            <div className="pull-right">
              <ul className="social-links">
                <li><a href="https://facebook.com/literacyofvirtue"><span style={{ fontSize: 18 }}
                                                                          className="fab fa-facebook-f"></span></a></li>
                <li><a href="https://instagram.com/literacyofvirtue"><span style={{ fontSize: 18 }}
                                                                           className="fab fa-instagram"></span></a></li>
                <li><a href="https://wa.me/60124209899"><span style={{ fontSize: 18 }}
                                                              className="fab fa-whatsapp"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;