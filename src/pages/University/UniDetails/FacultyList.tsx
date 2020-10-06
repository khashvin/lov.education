import React, {useEffect} from 'react';

import './UniDetails.css';
import FacultyBox from "./FacultyBox";
import {useDispatch, useSelector} from "react-redux";
import {getFaculties} from "../../../actions/university.actions";
import {IRootState} from "../../../rootReducer";

interface IFacultyListProps {
  uniId: number;
}

const FacultyList = ( props: IFacultyListProps) => {
  const dispatch = useDispatch();
  const faculties = useSelector((state: IRootState) => state.university.faculties);
  const loading = useSelector((state: IRootState) => state.university.fLoading);

  useEffect(() => {
    dispatch(getFaculties(props.uniId));
  }, [dispatch, props.uniId]);

  return (
    <div className="row clearfix mt-2">

      <div className="content-side col-lg-4 col-md-4 col-sm-12">
        <div className="services-detail">
          <h2 className="uni-title">Programmes</h2>
        </div>
      </div>
      <div className="accordion-column col-lg-12 col-md-12 col-sm-12 mt-3">
        <div className="inner-column">
          {loading ?
            <img className="mx-auto d-block" alt="loading" src="/images/loading.gif" width={64} height={64}/>
            :
            <>
              <ul className="accordion-box">
                {faculties.map((faculty) => {
                  return(
                    <FacultyBox key={faculty.id} faculty={faculty}/>
                  )
                })}
              </ul>
            </>
          }
        </div>
      </div>

    </div>
  )
}

export default FacultyList;