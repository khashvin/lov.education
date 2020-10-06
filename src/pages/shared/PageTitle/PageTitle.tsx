import React from 'react';

import './PageTitle.css';
import {Link} from "react-router-dom";

interface PageTitleProps {
  title?: string;
}

const PageTitle = (props: PageTitleProps) => {
  return (
    <section className="page-banner style-two">
      <div className="auto-container">
        <div className="inner-container clearfix">
          <h1>{props.title}</h1>
          <ul className="bread-crumb clearfix">
            <li><Link to="/">Home</Link></li>
            <li>{props.title}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PageTitle;