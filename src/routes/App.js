import React from 'react';
import { BrowserRouter as Router , Switch ,Route, Redirect } from 'react-router-dom';


import Register from '../pages/auth/Register';
import Login from '../pages/auth/Login';

import newProduct from '../pages/private/newProduct';

import Home from '../pages/public/Home'
import NotFound from '../pages/public/NotFound';
import Category from '../pages/public/Category';
import Product from '../pages/public/Product';

export default function App() {
  return (
    <Router>
        <Switch>
          {/* the routes login and register should have the other layout */}
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/products" component={Category} />
          <Route exact path="/create/product" component={newProduct} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
    </Router>
  )
}

