import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import StockData from './StockData'

const Routes = () => {
  return (
    <main>
      <StockData />
    </main>
  );
};

export default Routes;