import React, { useState } from 'react';

import './ContactForm.css';
import {useDispatch} from "react-redux";
import {sendContactForm} from "../../../actions/contact.actions";
import { useHistory } from 'react-router-dom';

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  fieldOfStudy: string;
  message: string;
}

const ContactForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOtherShow, setShowOthers] = useState(false);
  const [formData, setData] = useState<IFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    fieldOfStudy: "Not Selected",
    message: ''
  });

  const handleSubmit = (event: any) => {
    console.log(formData);
    dispatch(sendContactForm(formData));
    history.push("/contact");
    window.scrollTo(0,0);
    event.preventDefault();
  }

  const handleChange = (event: any) => {
    if(event.target.name === 'fieldOfStudy' && event.target.value === 'others') {
      setShowOthers(true);
    }

    setData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="contact-form mt-1">
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="row clearfix">

          <div className="col-lg-6 col-md-6 col-sm-12 form-group">
            <input type="text" name="firstName" placeholder="First Name " onChange={handleChange} required />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 form-group">
            <input type="text" name="lastName" placeholder="Last Name " onChange={handleChange} required />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 form-group">
            <input type="email" name="email" placeholder="Email " onChange={handleChange} required />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 form-group">
            <input type="text" name="phone" placeholder="Phone " onChange={handleChange} required />
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
            <select id="fosSelect" name="fieldOfStudy" onChange={handleChange}>
              <option value="Not Selected">Field of Study</option>
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
              <option value="Logistics & Supply Chain Management">Logistics & Supply Chain Management</option>
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

          <div className={isOtherShow ? "col-lg-12 col-md-12 col-sm-12 form-group" : "d-none col-lg-12 col-md-12 col-sm-12 form-group"}>
            <input type="text" name="fieldOfStudy" placeholder="Field of Study" onChange={handleChange} />
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
            <textarea name="message" placeholder="Message " onChange={handleChange} ></textarea>
          </div>

          <div className="col-6 p-0">
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 form-group">
            <input value="Register Interest!" className="theme-btn btn-style-five" style={{ width: "100%", cursor: "pointer"}} type="submit"></input>
          </div>

        </div>
      </form>
    </div>
  )
}

export default ContactForm;