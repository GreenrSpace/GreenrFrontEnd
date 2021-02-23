import React from "react";
import Link from "next/link";

function AuthFooter(props) {
  return (
    <div className="AuthFooter text-center mt-4">
      {props.type === "signup" && (
        <>
          Have an account already?
          <Link href="/auth/signin">
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition ease-in-out duration-150"
            >
              {props.typeValues.linkTextSignin}

              <svg
                className="ml-2 -mr-0.5 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </Link>
        </>
      )}

      {props.type === "signin" && (
        <div>
          <Link href="/auth/signup">
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition ease-in-out duration-150"
            >
              {props.typeValues.linkTextSignup}

              <svg
                className="ml-2 -mr-0.5 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </Link>
          <div className="text-sm leading-5">
            <Link
              href="/auth/forgotpass"
              className="font-medium text-teal-600 hover:text-teal-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthFooter;
