import React from 'react';
import { Homepage } from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component.jsx'


import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
