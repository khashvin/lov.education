import React, {useEffect} from 'react';

import './UniList.css';
import UniListCard from "../UniListCard/UniListCard";
import {useDispatch, useSelector} from "react-redux";
import {getUniversities} from "../../../actions/university.actions";
import {IRootState} from "../../../rootReducer";

const UniList = () => {
  const dispatch = useDispatch();
  const universities = useSelector((state: IRootState) => state.university.universities);

  useEffect(() => {
    dispatch(getUniversities());
  })

  return (
    <section className="services-section-three style-two">
      <div className="auto-container">
        <div className="row">
          {universities.map((university) => {
            return(
            <UniListCard university={university}/>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default UniList;