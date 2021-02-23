import { useState } from "react";
import newsletter from "util/newsletter.js";
import FormField from "components/Layout/forms/FormField";


import { useForm } from "react-hook-form";
import Image from "next/image";

import Link from "next/link";


const Hero = (props) => {
    const { handleSubmit, register, errors } = useForm();
    const [earlysubsc, setSubscribed] = useState(false);
  
    const onSubmit = ({ email }) => {
      setSubscribed(true);
      // Parent component can optionally
      // find out when subscribed.
      props.onSubscribed && props.onSubscribed();
      // Subscribe them
      newsletter.subscribe({ email });
    };

  return (
    <>
        <div className="hidden absolute lg:block lg:relative lg:inset-0">
          {/* <svg
            className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
            width="640"
            height="784"
            fill="none"
            viewBox="0 0 640 784"
          >
            <defs>
              <pattern
                id="svg-pattern-squares-desktop"
                x="118"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              y="72"
              width="640"
              height="640"
              className="text-gray-50"
              fill="currentColor"
            />
            <rect
              x="118"
              width="404"
              height="784"
              fill="url(#svg-pattern-squares-desktop)"
            />
          </svg> */}
        </div>
        <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
          <div className="absolute top-0 inset-x-0 p-2 md:hidden"></div>

          <div className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                  {props.testingphase}
                </div>
                <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                  Plant <em>More</em>
                  <br className="hidden md:inline" />
                  <span className="text-blue-500"> Plant</span>
                  Form
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  {props.subtitle}
                </p>
                <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                  <p className="text-base font-medium text-gray-900">
                    Sign up to get notified about our journey, login to use our Alpha test.
                  </p>
                  {earlysubsc === false && (
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="mt-3 sm:flex"
                    >
                      <FormField
                        aria-label="Email"
                        name="email"
                        type="email"
                        error={errors.email}
                        inputRef={register({
                          required: "Please enter an email address",
                        })}
                        className="appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1"
                        placeholder="Enter your email"
                      />
                      <button
                        type="submit"
                        className="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                      >
                        Notify me
                      </button>
                    </form>
                  )}
                  {earlysubsc === true && (
                    <div> More Moodmap information on it's way to you now!</div>
                  )}

                  <p className="mt-3 text-sm leading-5 text-gray-500">
                    We care about creators, the climate and humans. Learn more on our&nbsp;
                    <Link href="/signup" passHref>
                      <a className="font-medium text-gray-900 underline">
                        Signup
                      </a>
                    </Link>

                    .
                  </p>
                </div>
              </div>
              <div className="mt-12 relative max-w-lg mx-auto  sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                {/* <svg
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                  width="640"
                  height="784"
                  fill="none"
                  viewBox="0 0 640 784"
                >
                  <defs>
                    <pattern
                      id="svg-pattern-squares-mobile"
                      x="118"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    y="72"
                    width="640"
                    height="640"
                    className="text-gray-50"
                    fill="currentColor"
                  />
                  <rect
                    x="118"
                    width="404"
                    height="784"
                    fill="url(#svg-pattern-squares-mobile)"
                  />
                </svg> */}
                <div className="relative mx-auto w-auto rounded-lg lg:max-w-lg">
              
                  <Image
                  className="object-contain z-50	"
                    alt="Work?"
        width="600"
        height="600"
        layout="responsive"
                    src={props.image}
                  />
                  {/* <iframe
              title="Domaincord Promo"
              src="https://player.vimeo.com/video/379602341"
              width="480"
              height="220"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe> */}
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
export default Hero;
