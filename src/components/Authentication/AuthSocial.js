import React, { useEffect, useState } from "react";
// import { useAuth } from "util/auth.js";

function AuthSocial(props) {
  // const auth = useAuth();
  const [pending, setPending] = useState(null);
  const [lastUsed, setLastUsed] = useState(null);

  const providerDisplayNames = {
    google: "Google",
    facebook: "Facebook",
    twitter: "Twitter",
    github: "GitHub",
  };

  const onSigninWithProvider = (provider) => {
    setPending(provider);
    auth
      .signinWithProvider(provider)
      .then((user) => {
        localStorage.setItem("lastUsedAuthProvider", provider);
        props.onAuth(user);
      })
      .catch((error) => {
        props.onError(error.message);
      })
      .finally(() => {
        setPending(null);
      });
  };

  // Get value of last used auth provider
  useEffect(() => {
    if (props.showLastUsed) {
      const lastUsed = window.localStorage.getItem("lastUsedAuthProvider");
      if (lastUsed) {
        setLastUsed(lastUsed);
      }
    }
  }, [props.showLastUsed]);

  return (
    <>
    
    <div className="mt-6 grid grid-cols-3 gap-3">

      {props.providers.map((provider) => (

          <div>
            <span className="w-full inline-flex rounded-md shadow-sm">
        <button
          variant="light"
          size={props.inputSize}
          block={true}
          onClick={() => {
            onSigninWithProvider(provider);
          }}
          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
          key={provider}
        >
          <div >
            <img
            className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
              src={`/${provider}.svg`}
              alt={providerDisplayNames[provider]}
            />
          </div>

          {pending !== provider && (
            <span>
              {props.buttonText} with {providerDisplayNames[provider]}
            </span>
          )}

          {pending === provider && (
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            <span className="sr-only">Sending...</span>

</svg>
          )}

          {provider === lastUsed && (
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800">
            <svg className="-ml-1 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="3" />
            </svg>
            Last used
          </span>
           
          )}
        </button>
        </span>
        </div>
      ))}
      </div>
    </>
  );
}

export default AuthSocial;
