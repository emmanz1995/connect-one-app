import React from "react";
import { LoginContainer, LoginSection } from "./style";
import SigninForm from "../../components/signInForm/SigninForm";

const Signin = () => {
  return (
    <LoginContainer>
      <LoginSection>
        <SigninForm />
      </LoginSection>
    </LoginContainer>
  );
};

export default Signin;
