import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component.jsx'
import { Homepage } from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component.jsx'
import SignInAndSignUp from './pages/auth/signInAndSignUp.component.jsx'
import { auth, createUserProfileDoc } from './firebase/firebase.utils';



class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth)

        userRef.onSnapshot(snapShot => {
          // console.log("snapShot:", snapShot)// show if user exist and generated ID
          // console.log("data:", snapShot.data()) //shows user data from DataBase
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state))
        })

      } else {
        this.setState({ currentUser: userAuth })
      }

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/auth' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
