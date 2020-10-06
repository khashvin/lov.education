import React from 'react';

import AppRoutes from './routes';
import Header from "./pages/shared/Header/Header";
import Footer from "./pages/shared/Footer/Footer";
import {useSelector} from "react-redux";
import {IRootState} from "./rootReducer";

const App = () => {
  const isLoading = useSelector<IRootState>(state => state.preloader.loading);
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
