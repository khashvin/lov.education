import React, { useEffect } from 'react';
import {Helmet} from "react-helmet";
import { useParams } from 'react-router-dom';
import PageTitle from "../../shared/PageTitle/PageTitle";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../../rootReducer";
import {getUniversities} from "../../../actions/university.actions";
import Section from "./Section";

const UniDetails = () => {
  const { unipath } = useParams();
  const dispatch = useDispatch();
  const universities = useSelector((state: IRootState) => state.university.universities);
  const university = universities.find(x => x.path === unipath);

  useEffect(() => {
    if(universities.length === 0) {
      dispatch(getUniversities());
    }
  });

  return (
    <>
      {university === undefined ?
        <>
        </>
        :
        <>
          <Helmet>
            <title>{`${university.abbr} - Literacy of Virtue`}</title>
          </Helmet>
          <PageTitle title={university.name} />
          <Section university={university}/>
        </>
      }

    </>
  )

}

export default UniDetails;