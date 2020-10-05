import React from 'react';
import { useLocation } from 'react-router';

import './Header.css';

const Header = () => {
    const { pathname } = useLocation();

    return (
      <header className="main-header">
          <div className="header-top">
              <div className="auto-container clearfix">
                  <div className="top-left clearfix">
                      <div className="text">Knowledge of Excellency</div>
                      <ul className="social-links clearfix">
                          <li>
                              <a href="https://facebook.com/literacyofvirtue">
                                  <span style={{ fontSize: 22 }} className="fab fa-facebook-f"></span>
                              </a>
                          </li>
                          <li>
                              <a href="https://instagram.com/literacyofvirtue">
                                  <span style={{ fontSize: 22 }} className="fab fa-instagram"></span>
                              </a>
                          </li>
                          <li>
                              <a href="https://wa.me/60197529930">
                                  <span style={{ fontSize: 22 }} className="fab fa-whatsapp"></span>
                              </a>
                          </li>
                      </ul>
                  </div>
                  <div className="top-right clearfix">
                      <ul className="info-list clearfix">
                          <li>
                              <a href="tel:1300300993">
                                  <span className="txt">1300-300-993 (TOLL FREE)</span>
                                  <span className="icon fas fa-phone"></span>
                              </a>
                          </li>
                          <li>
                              <a href="mailto:info@lov.education">
                                  <span className="txt">info@lov.education</span>
                                  <span className="icon fas fa-envelope-open"></span>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="header-upper">
              <div className="inner-container">
                  <div className="auto-container clearfix">
                      <div className="logo-outer">
                          <div className="logo">
                              <a href="/">
                                  <img src="https://lov.education/assets/images/logo.png" alt="" title="" width="250px"/>
                              </a>
                          </div>
                      </div>
                      <div className="nav-outer clearfix">
                          <nav className="main-menu navbar-expand-md navbar-light">
                              <div className="navbar-header">
                                  <button className="navbar-toggler" type="button" data-toggle="collapse"
                                          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                          aria-expanded="false" aria-label="Toggle navigation">
                                      <span className="icon flaticon-menu-button"></span>
                                  </button>
                              </div>
                              <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                                  <ul className="navigation clearfix">
                                      <li className={pathname === '/' ? 'current' : ''}><a href="/">Home</a></li>
                                      <li className={pathname === '/about' ? 'current' : ''}><a href="/about">About us</a></li>
                                      <li className={pathname === '/services' ? 'current' : ''}><a href="/services">Our Services</a></li>
                                      <li className={pathname === '/university' ? 'current' : ''}><a href="/university">Universities/Colleges</a></li>
                                      <li className={pathname === '/contact' ? 'current' : ''}><a href="/contact">Contact Us</a></li>
                                  </ul>
                              </div>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>
      </header>
    );
}

export default Header;