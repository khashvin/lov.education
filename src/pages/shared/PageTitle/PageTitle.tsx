import React from 'react';

import './PageTitle.css';

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
            <li><a href="/">Home</a></li>
            <li>{props.title}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PageTitle;