import React from 'react';
// @ts-ignore
import Fade from "react-reveal/Fade";
// @ts-ignore
import Slide from "react-reveal/Slide";

import './AboutBody.css';

const AboutBody = () => {
  return (
    <section className="about-section-two">
      <div className="auto-container">
        <div className="title-style-one style-two centered">
          <div className="icon">
            <Fade>
              <img src="/images/logo.png" alt="" style={{height: 200}} />
            </Fade>
          </div>
        </div>

        <div className="row">
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <figure className="image"><a href="<?= env('baseURL') ?>assets/assets/images/office.jpg"
                                           className="lightbox-image"><img src="assets/images/office.jpg" alt="" /></a>
              </figure>
            </div>
          </div>

          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <Slide right>
                <div className="text text-justify">
                  <p style={{fontSize: 18}}>
                    {"Literacy of Virtue Sdn Bhd (LOV) was founded on the 15th of August 2012. " +
                    "It was founded by an individual with a vast experience in education " +
                    "industry as well as marketing and management skills."}
                    <br /><br />
                    {"Since its establishment, LOV has been providing highly dedicated and professional " +
                    "counselling as placement services to the students all over Malaysia. LOV provides " +
                    "these services through a team of highly informative and knowledgeable counsellors. " +
                    "Besides the placement and recruitment, we also provide student management service such " +
                    "as exposing student varies scholarships and financial help for those students who needed. " +
                    "We also guide students with their future career path and their passion from the day " +
                    "they receive their Sijil Pelajaran Malaysia (SPM) / Sijil Tinggi Pelajaran Malaysia (STPM)" +
                    " until the day they graduate."}
                    <br /><br/>
                    {"In addition to that, LOV also has been recruiting students internationally to get themselves" +
                    " expose to the studies out of their motherland. We also specialize in recruiting student " +
                    "from around the world to study in Malaysia.Besides the mentioned service, we also participate" +
                    " in welfare projects organized by non-governmental organization (NGO), awareness campaign and" +
                    " many more. Our motive by doing so is to create a close and harmony relationship as well as gaining" +
                    " trust by the students and parents on our company."}
                  </p>
                </div>
              </Slide>
              <Slide bottom>
                <div className="fact-counter">
                  <div className="clearfix">

                    <div className="column counter-column col-lg-4 col-md-4 col-sm-12">
                      <div className="inner">
                        <div className="count-outer count-box">
                          <span className="count-text" data-speed="2000" data-stop="8">8</span>+
                          <h4 className="counter-title">Years Experience</h4>
                        </div>
                      </div>
                    </div>

                    <div className="column counter-column col-lg-4 col-md-4 col-sm-12">
                      <div className="inner">
                        <div className="count-outer count-box">
                          <span className="count-text" data-speed="2500" data-stop="20">20</span>+
                          <h4 className="counter-title">Universities Available</h4>
                        </div>
                      </div>
                    </div>

                    <div className="column counter-column col-lg-4 col-md-4 col-sm-12">
                      <div className="inner">
                        <div className="count-outer count-box">
                          <span className="count-text" data-speed="3000" data-stop="450">450</span>+
                          <h4 className="counter-title">Courses Available</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBody;