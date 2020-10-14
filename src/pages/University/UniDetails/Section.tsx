import React from 'react';
import parse from 'html-react-parser';

import './UniDetails.css';
import FacultyList from "./FacultyList";
import {IUniversityModel} from "../../../models/IUniversityModel";

interface ISectionProps {
  university: IUniversityModel;
}

const Section = ( props: ISectionProps) => {
  return (
    <>
      <section className="services-section-three style-two">
        <div className="auto-container">
          <div className="row clearfix">

            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
              <aside className="sidebar padding-right">
                <div className="sidebar-widget categories-two">
                  <img alt={props.university.name + ' Brochure'} src={props.university.thumbnail?.data?.full_url}/>
                </div>
              </aside>
            </div>

            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="services-detail">
                <h2 className="uni-title">{props.university.name + " - (" + props.university.abbr + ")"}</h2>
              </div>
              <br />
                <div className="text">
                  {props.university.description ? parse(props.university.description) : props.university.description}
                </div>
            </div>

          </div>

          <div className="row clearfix">

            <div className="content-side col-lg-6 col-md-6 col-sm-12">
              <div className="uni-box">
                <div className="inner-column">
                  <div className="title-box">
                    <h5 style={{ paddingBottom: 7 }}>INTAKE : </h5>
                    <div className="title-text">{props.university.intake}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-side col-lg-6 col-md-6 col-sm-12">
              <div className="uni-box">
                <div className="inner-column">
                  <div className="title-box">
                    <h5 style={{ paddingBottom: 7 }}>LOCATION : </h5>
                    <div className="title-text">{props.university.location}</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <FacultyList uniId={props.university.id}/>
        </div>
      </section>
    </>
  )
}

export default Section;