import React from "react";
import Auth from "components/Authentication/Auth";

function AuthSection(props) {
  // Values for each auth type
  const allTypeValues = {
    signin: {
      // Top title
      title: "Sign in to your account",
      // Submit button text
      buttonText: "Sign in",
      // Link text to other auth types
      linkTextSignup: "Create an account",
      linkTextForgotpass: "Forgot Password?",
    },
    signup: {
      title: "Get yourself an account",
      buttonText: "Sign up",
      linkTextSignin: "Sign in",
    },
    forgotpass: {
      title: "Get a new password",
      buttonText: "Reset password",
    },
    changepass: {
      title: "Choose a new password",
      buttonText: "Change password",
    },
  };

  // Ensure we have a valid auth type
  const currentType = allTypeValues[props.type] ? props.type : "signup";

  // Get values for current auth type
  const typeValues = allTypeValues[currentType];

  return (
    

  <div className="min-h-screen bg-green-100 flex flex-col justify-center sm:px-6 lg:px-8" style={{
    backgroundImage: "url('/static/fluid-maind.svg')",
  }} >
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
        
        <Auth
          type={currentType}
          typeValues={typeValues}
          inputSize={props.inputSize}
          providers={props.providers}
          afterAuthPath={props.afterAuthPath}
          key={currentType}
        />
        </div>
      </div>
   
  );
}

export default AuthSection;
