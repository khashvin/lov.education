import React from 'react';

import './ServiceBody/ServiceBody.css';

interface IServiceBoxProps {
  image: string;
  title: string;
  text: string;
}

const ServiceBox = ( props: IServiceBoxProps ) => {
  return (
    <div className="services-block-three col-xl-3 col-lg-6 col-md-6 col-sm-12">
      <div className="inner-box">
        <div className="image">
          <a><img src={props.image} alt=""/></a>
        </div>
        <div className="lower-content">
          <h3><a>{props.title}</a></h3>
          <div className="text">{props.text}</div>
        </div>
      </div>
    </div>
  )
}

export default ServiceBox;