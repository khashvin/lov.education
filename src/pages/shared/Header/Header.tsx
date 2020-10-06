import React from 'react';
import { useLocation } from 'react-router';

import './Header.css';
import {Link} from "react-router-dom";

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
                              <Link to="/">
                                  <img src="https://lov.education/assets/images/logo.png" alt="" title="" width="250px"/>
                              </Link>
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
                                      <li className={pathname === '/' ? 'current' : ''}><Link to="/">Home</Link></li>
                                      <li className={pathname === '/about' ? 'current' : ''}><Link to="/about">About us</Link></li>
                                      <li className={pathname === '/services' ? 'current' : ''}><Link to="/services">Our Services</Link></li>
                                      <li className={pathname === '/university' ? 'current' : ''}><Link to="/university">Universities/Colleges</Link></li>
                                      <li className={pathname === '/contact' ? 'current' : ''}><Link to="/contact">Contact Us</Link></li>
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