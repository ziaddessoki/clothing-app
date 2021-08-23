import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component.jsx'
import { Homepage } from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component.jsx'
import SignInAndSignUp from './pages/auth/signInAndSignUp.component.jsx'






function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/auth' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
