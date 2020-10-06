import React from 'react';
import { useSelector } from "react-redux";
import {IRootState} from "../../../rootReducer";

import './UniDetails.css';

interface ICourseListProps {
  facultyId: number;
}

const CourseList = ( props: ICourseListProps) => {
  const coursesMap = useSelector((state: IRootState) => state.university.coursesStore);
  const loading = useSelector((state: IRootState) => state.university.cLoading);
  const cc = coursesMap.get(props.facultyId);

  if(cc !== undefined) {
    return (
      <ul className="list-style-one">
        {cc.map((course) => {
          if(course.file !== null) {
            return (<li key={course.id}><a href={course.file?.data?.full_url}>{course.name}</a></li>);
          }
          return (<li key={course.id}>{course.name}</li>);
        })}
      </ul>
    )
  } else {
    return (
      <>
        {loading ? <img className="mx-auto d-block" alt="loading" src="/images/loading.gif" width={64} height={64}/> : null}
      </>
    )
  }
}

export default CourseList;