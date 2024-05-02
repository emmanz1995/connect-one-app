import React from "react";
import { LoginContainer, LoginSection } from "./style";
import SigninForm from "../../molecules/SignInForm";

const Signin = () => {
  console.log(import.meta.env.VITE_API_URL)
  return (
    <LoginContainer>
      <LoginSection>
        <SigninForm />
      </LoginSection>
    </LoginContainer>
  );
};

export default Signin;
