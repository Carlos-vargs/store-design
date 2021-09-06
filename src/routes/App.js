import React from 'react';
import { BrowserRouter, Switch ,Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home'
import NotFound from '../pages/NotFound';
import Category from '../pages/Category';
import Product from '../pages/Product';
import Register from '../pages/auth/Register';
import Login from '../pages//auth/Login';



import Layout from '../components/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {/* the routes login and register should have the other layout */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Category} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

