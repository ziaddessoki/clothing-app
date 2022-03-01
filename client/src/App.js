import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/header/header.component.jsx";
import { Homepage } from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import Checkout from "./pages/checkoutPage/checkout.component";
import SignInAndSignUp from "./pages/auth/signInAndSignUp.component.jsx";
import { auth, createUserProfileDoc } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

const App = ({ setCurrentUser, currentUser }) => {
  // let unsubscribeFromAuth = null;

  useEffect(() => {
    // const { setCurrentUser } = this.props;
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot((snapShot) => {
          // console.log("snapShot:", snapShot)// show if user exist and generated ID
          // console.log("data:", snapShot.data()) //shows user data from DataBase

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        // getting the userAuth from firebase as null
        setCurrentUser(userAuth);
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/auth"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
};

//using createStructureSelector instead of keep passing the state as an argument for each re-selector function
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
