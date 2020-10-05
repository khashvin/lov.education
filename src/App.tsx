import React from 'react';

import AppRoutes from './routes';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useSelector} from "react-redux";
import {IRootState} from "./rootReducer";

const App = () => {
  const isLoading = useSelector<IRootState>(state => state.preloader.loading);
  console.log(isLoading);
  return (
    <div className="page-wrapper">
      {isLoading ?
        <div className="preloader"></div>
        :
        null
      }
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App;
