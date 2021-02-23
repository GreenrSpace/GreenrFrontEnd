import Link from "next/link";
import React, { useState } from "react";


function NavbarCustom({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);



  return (
    <div className="bg-green-400">
      <nav className="w-full relative flex items-center justify-between px-2 py-3 navbar-expand-lg bg-green-400">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/" passHref>
              <a aria-label="Home page">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="/static/example_photos/fullheaderlogo.png"
                  alt=""
                />
            

              </a>
            </Link>
        
          </div>
          <div
            className="hidden lg:flex flex-grow items-center sm:flex"
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link href="/about" passHref>
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">About</span>
                  </a>
                </Link>
              </li>
             
              {/* <li className="nav-item">
                <Link href="/blog" passHref>
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Blog</span>
                  </a>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link href="/example" passHref>
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Example</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <nav className="flex align-middle">
          <div className="flex items-center">
           
          </div>
          
            <div>
              <div className="flex items-center text-right right-0">
                <span className="inline-flex rounded-md shadow-md right-0">
                  <span className="inline-flex rounded-md shadow-xs">
                    <Link href="/auth/signup">
                      <a
                        className="inline-flex whitespace-no-wrap items-center px-4 py-2 border border-transparent text-base leading-6 bg-gradient-to-r from-yellow-800 to-blue-800 hover:from-teal-600 hover:to-green-300   text-white font-semibold rounded-md"
                        active={false}
                      >
                        Get Started
                      </a>
                    </Link>
                  </span>
                </span>
              </div>

              {/* <button
                variant="primary"
                onClick={() => {
                  router.push("/auth/signup");
                }}
              >
                Sign Up
              </button> */}
            </div>
       
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white h-7 w-7 self-center ml-4 sm:hidden"
            onClick={() => setNavbarOpen((current) => !current)}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </nav>
      </nav>
      {navbarOpen && (
        <div
          onClick={() => setNavbarOpen((current) => !current)}
          className="w-full bg-green-400 sm:hidden pb-1.5"
        >
          <ul className="flex flex-col">
            <li className="nav-item py-1">
              <Link href="/about" passHref>
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">About</span>
                </a>
              </Link>
            </li>
           
            {/* <li className="nav-item py-1">
              <Link href="/blog" passHref>
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Blog</span>
                </a>
              </Link>
            </li> */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavbarCustom;
