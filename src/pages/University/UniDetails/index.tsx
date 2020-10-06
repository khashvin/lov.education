import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import { useParams } from 'react-router-dom';
import PageTitle from "../../shared/PageTitle/PageTitle";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../../rootReducer";
import {getUniversities} from "../../../actions/university.actions";

const UniDetails = () => {
  const { uni } = useParams();
  const dispatch = useDispatch();
  const universities = useSelector((state: IRootState) => state.university.universities);
  const university = universities.find(x => x.abbr === uni);

  useEffect(() => {
    if(universities.length === 0) {
      dispatch(getUniversities());
    }
  });

  return (
    <>
      <Helmet>
        <title>{`${university === undefined ? '' : university.abbr} - Literacy of Virtue`}</title>
      </Helmet>
      <PageTitle title={university === undefined ? '' : university.name} />
    </>
  )
}

export default UniDetails;