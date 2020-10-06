import React, {useEffect} from 'react';

import './UniList.css';
import UniListCard from "../UniListCard/UniListCard";
import {useDispatch, useSelector} from "react-redux";
import {getUniversities} from "../../../actions/university.actions";
import {IRootState} from "../../../rootReducer";

const UniList = () => {
  const dispatch = useDispatch();
  const universities = useSelector((state: IRootState) => state.university.universities);
  const loading = useSelector((state: IRootState) => state.university.uLoading);

  useEffect(() => {
    dispatch(getUniversities());
  },[dispatch])

  return (
    <section className="services-section-three style-two">
      <div className="auto-container">
        {loading && universities.length === 0 ? <img className="mx-auto d-block" alt="loading" src="/images/loading.gif" width={64} height={64}/> : null}
        <div className="row">
          {universities.map((university) => {
            return(
            <UniListCard key={university.id} university={university}/>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default UniList;

