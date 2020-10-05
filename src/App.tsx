import React from 'react';

import AppRoutes from './routes';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {

  return (
    <div className="page-wrapper">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App;
