import React, { useState} from 'react';

import './UniDetails.css';
import {IFacultyModel} from "../../../models/IFacultyModel";
import {useDispatch} from "react-redux";
import {getCourses} from "../../../actions/university.actions";
import CourseList from "./CourseList";

interface IFacultyBoxProps {
  faculty: IFacultyModel;
}

const FacultyBox = ( props: IFacultyBoxProps ) => {
  const dispatch = useDispatch();
  const [isAccOpen, toggleAccordion] = useState(false);

  const loadFacultyCourses = () => {
    toggleAccordion(!isAccOpen)
    if(!isAccOpen) {
      dispatch(getCourses(props.faculty.id));
    }
  }

  return (
    <li className="accordion block">
      <div className={isAccOpen ? "acc-btn active" : "acc-btn"} onClick={loadFacultyCourses}>
        <div className="icon-outer">
          <span className="icon icon-plus fa fa-angle-right"></span>
        </div>
        <span className="text-uppercase">{props.faculty.name}</span>
      </div>
      {isAccOpen ?
        <div className="acc-content">
          <div className="content">
            {props.faculty.file !== null ?
              <a href={props.faculty.file?.data?.full_url} className="theme-btn btn-style-two align-middle mb-3" style={{ fontSize: 18 }}>
                <span className="icon fas fa-file-pdf" style={{ fontSize: 20 }}></span> Get Brochure
              </a>
              : null
            }
            <CourseList facultyId={props.faculty.id} />
          </div>
        </div>
        : null
      }
    </li>
  )
}

export default FacultyBox;