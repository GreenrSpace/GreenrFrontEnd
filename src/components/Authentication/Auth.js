import React, { useState } from "react";
import FormAlert from "components/Layout/forms/FormAlert";
import AuthForm from "components/Authentication/AuthForm";
import AuthSocial from "components/Authentication/AuthSocial";
import AuthFooter from "components/Authentication/AuthFooter";
import { useRouter } from "next/router";

function Auth(props) {
  const router = useRouter();
  const [formAlert, setFormAlert] = useState(null);

  const handleAuth = (user) => {
    router.push(props.afterAuthPath);
  };

  const handleFormAlert = (data) => {
    setFormAlert(data);
  };

  return (
    <>
      {formAlert && (
        <FormAlert type={formAlert.type} message={formAlert.message} />
      )}

      <AuthForm
        type={props.type}
        typeValues={props.typeValues}
        inputSize={props.inputSize}
        onAuth={handleAuth}
        onFormAlert={handleFormAlert}
      />

      {["signup", "signin"].includes(props.type) && (
        <>
          {props.providers && props.providers.length && (
            <>
            <div className="mt-6">
            <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-300"></div>
                </div>
          <div class="relative flex justify-center text-sm leading-5">
            <span class="px-2 bg-white text-black">
              Or continue with
            </span>
          </div>
          </div>

              <AuthSocial
                type={props.type}
                buttonText={props.typeValues.buttonText}
                inputSize={props.inputSize}
                providers={props.providers}
                showLastUsed={true}
                onAuth={handleAuth}
                onError={(message) => {
                  handleFormAlert({
                    type: "error",
                    message: message,
                  });
                }}
              />
              </div>
            </>
          )}

          <AuthFooter type={props.type} typeValues={props.typeValues} />
        </>
      )}
    </>
  );
}

export default Auth;
