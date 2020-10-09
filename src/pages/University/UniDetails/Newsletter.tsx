import React from 'react';
import { Link } from 'react-router-dom';

import './UniDetails.css';
import {IUniversityModel} from "../../../models/IUniversityModel";

interface INewsletterProps {
  university: IUniversityModel;
}

const Newsletter = ( props: INewsletterProps ) => {
  return (
    <section className="newsletter-section">
      <div className="auto-container">
        <div className="inner-container">
          <div className="row clearfix">

            <div className="title-column col-lg-9 col-md-12 col-sm-12">
              <div className="inner-column">
                <h2 style={{ color: "#001e57" }}>Interested in {props.university.name} ({props.university.abbr})</h2>
              </div>
            </div>

            <div className="form-column col-lg-3 col-md-12 col-sm-12">
              <div className="inner-column">

                <div className="subscribe-form">
                  <Link to="/contact">
                    <button type="button" className="theme-btn submit-btn" >Apply Now!</button>
                  </Link>
                </div>


              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter;