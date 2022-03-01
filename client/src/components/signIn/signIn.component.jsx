import React, { useState } from "react";

import "./signIn.styles.scss";

import FormInput from "../form-input/formInput.component";
import CustomButton from "../customButton/customButton.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      );
      setCredentials({
        email: "",
        password: "",
      });

      //   this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // render() {
  return (
    <div className="sign-in">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          handleChange={handleChange}
          value={credentials.email}
          required
        />

        <FormInput
          name="password"
          type="password"
          label="Password"
          handleChange={handleChange}
          value={credentials.password}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
  // }
};

export default SignIn;
