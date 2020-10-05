import React from 'react';

import './MainForm.css';

const MainForm = () => {
  return (
      <section className="main-form">
        <div className="row no-gutters">
          <div className="col-12 col-md-6">
            <div className="row no-gutters">
              <div className="col-12 order-2 order-md-1">
                <div className="card text-white mb-3" style={{ backgroundColor: "#001e57", margin: 0, borderRadius: 0 }}>
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
                <div className="contact-form">
                  <form method="post" action="/contact/send" id="contact-form">
                    <div className="row clearfix">

                      <input type="hidden" name="title" value="Contact Us Submission" />

                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input type="text" name="firstname" placeholder="First Name " required />
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input type="text" name="lastname" placeholder="Last Name " required />
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input type="email" name="email" placeholder="Email " required />
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input type="text" name="phone" placeholder="Phone " required />
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <select id="fosSelect" name="fos" placeholder="Field of Study " required>
                            <option value="">Field of Study</option>
                            <option value="ACCA">ACCA</option>
                            <option value="Accounting">Accounting</option>
                            <option value="Actuarial Science">Actuarial Science</option>
                            <option value="Architecture">Architecture</option>
                            <option value="Automotive">Automotive</option>
                            <option value="Baking and Pastry Arts">Baking and Pastry Arts</option>
                            <option value="Bioscience">Bioscience</option>
                            <option value="Business">Business</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Culinary Arts">Culinary Arts</option>
                            <option value="Degree Courses">Degree Courses</option>
                            <option value="Dentistry">Dentistry</option>
                            <option value="Digital Animation">Digital Animation</option>
                            <option value="Early Childhood">Early Childhood</option>
                            <option value="Early Childhood Education">Early Childhood Education</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Film & Video">Film & Video</option>
                            <option value="Finance">Finance</option>
                            <option value="Food Science">Food Science</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Hospitality & Tourism">Hospitality & Tourism</option>
                            <option value="Industrial Design">Industrial Design</option>
                            <option value="Interior Architecture">Interior Architecture</option>
                            <option value="Law">Law</option>
                            <option value="Logistics & Supply Chain Management">Logistics & Supply Chain Management
                            </option>
                            <option value="Mass Communication">Mass Communication</option>
                            <option value="Medicine">Medicine</option>
                            <option value="Multimedia Design">Multimedia Design</option>
                            <option value="Nursing">Nursing</option>
                            <option value="Nutrition">Nutrition</option>
                            <option value="Occupational Safety & Health">Occupational Safety & Health</option>
                            <option value="Optometry">Optometry</option>
                            <option value="Pharmacy">Pharmacy</option>
                            <option value="Physiotherapy">Physiotherapy</option>
                            <option value="Psychology">Psychology</option>
                            <option value="Quantity Surveying">Quantity Surveying</option>
                            <option value="Real Estate Management">Real Estate Management</option>
                            <option value="others">Others</option>
                          </select>
                        </div>

                        <div id="otherInput" className="d-none col-lg-12 col-md-12 col-sm-12 form-group">
                          <input type="text" name="others" placeholder="Field of Study" />
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <textarea name="message" placeholder="Message "></textarea>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <div className="g-recaptcha" data-sitekey="6Lf9hfgUAAAAAPYCrxXIJa5mFZNlYkHDrBIr-TwV"
                               data-callback="correctCaptcha"></div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <button id="reg-button" className="theme-btn btn-style-five" type="submit" name="submit-form"
                                  disabled>Register Interest!
                          </button>
                        </div>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
  )
}

export default MainForm;