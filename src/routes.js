import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import Checkout from './Pages/Checkout'
import Header from './Components/Header'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/checkout/:idNumber" component={Checkout}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;