import React from 'react';
import {Helmet} from "react-helmet";
import PageTitle from "../shared/PageTitle/PageTitle";
import UniList from "./UniList/UniList";

const University = () => {
  return (
    <>
      <Helmet>
        <title>Universities - Literacy of Virtue</title>
      </Helmet>
      <PageTitle title="Universities" />
      <UniList />
    </>
  )
}

export default University;