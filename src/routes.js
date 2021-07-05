import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import Product from './Pages/Product'
import Header from './Components/Header'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/product/:idNumber" component={Product}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;