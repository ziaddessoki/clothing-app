import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component.jsx'
import { Homepage } from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component.jsx'
import SignInAndSignUp from './pages/auth/signInAndSignUp.component.jsx'
import { auth, createUserProfileDoc } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'



class App extends Component {


  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth)

        userRef.onSnapshot(snapShot => {
          // console.log("snapShot:", snapShot)// show if user exist and generated ID
          // console.log("data:", snapShot.data()) //shows user data from DataBase

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })

        })

      } else {
        // getting the userAuth from firebase as null
        setCurrentUser(userAuth)
      }

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(null, mapDispatchToProps)(App);
