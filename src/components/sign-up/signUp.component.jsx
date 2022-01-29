import React, { useState } from "react";
import "./signUp.styles.scss";

import FormInput from "../form-input/formInput.component";
import CustomButton from "../customButton/customButton.component";

import { auth, createUserProfileDoc } from "../../firebase/firebase.utils";

const SignUp = () => {
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userData;
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords Dont Match");
      return;
    }

    try {
      //add to auth
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      //add to DB
      await createUserProfileDoc(user, { displayName });

      setUserData({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // render() {
  // const { displayName, email, password, confirmPassword } = this.state
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          label="Display Name"
          handleChange={handleChange}
          value={displayName}
          required
        />
        <FormInput
          name="email"
          type="email"
          label="Email"
          handleChange={handleChange}
          value={email}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          handleChange={handleChange}
          value={password}
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          handleChange={handleChange}
          value={confirmPassword}
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
  //}
};

export default SignUp;
