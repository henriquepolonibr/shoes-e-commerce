/* eslint-disable arrow-body-style */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Checkout from './Pages/Checkout';
import Receipt from './Pages/Receipt';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout/:idNumber" component={Checkout} />
        <Route exact path="/receipt/:idNumber" component={Receipt} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
