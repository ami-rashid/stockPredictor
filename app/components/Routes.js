import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import StockData from './StockData'
import Footer from './Footer'

const Routes = () => {
  return (
    <div>
      <StockData />
      <Footer />
    </div>
  );
};

export default Routes;