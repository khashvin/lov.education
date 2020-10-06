import React from 'react';

import './UniListCard.css';
import {IUniversityModel} from "../../../models/IUniversityModel";
import { Link } from 'react-router-dom';

interface IUniListCard {
  university: IUniversityModel;
}

const UniListCard = (props: IUniListCard) => {

  const uniPath = `/university/${props.university.path}`
  return (
    <div className="team-block col-lg-3 col-md-6 col-sm-12">
      <div className="inner-box">
        <div className="image-box">
          <figure className="image">
            <Link to={uniPath}>
              <img src={props.university.image?.data?.full_url} alt={props.university.abbr} />
            </Link>
          </figure>
        </div>
        <div className="lower-content">
          <h3 className="name">
            <Link to={uniPath}>{props.university.name}</Link>
          </h3>
          <span className="designation">{props.university.abbr}</span>
          <Link className="arrow" to={uniPath}>
            <span className="icon flaticon-next"></span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UniListCard;