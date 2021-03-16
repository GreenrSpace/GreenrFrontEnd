import Image from "next/image"
// import CtaSection from "components/content/cta/CtaSection";
import Layout from "components/Layout/Layout";
import { useRouter } from "next/router";


function Research(props) {
  const router = useRouter();

  return (
    <Layout title = "GreenrSpace. Share your plants." description = "Nature is the essence of life. ">
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 bg-green-800">
            <div              className="h-56 w-full object-cover lg:absolute lg:h-full"
>
            <Image
              src="/static/example_photos/silveryanne.JPG"
              alt=""

              height = "1250"
              width = "1000"
              layout = "intrinsic"
            />
            </div>
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <p className="leading-6 text-green-500 font-semibold tracking-wide uppercase">
                A new way to share your plant collection
              </p>
              <h1 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                Join a community of like minded enthuthiasts and share your newest plant additions with others!
              </h1>
              <p className="text-lg leading-7 text-gray-500 mb-5">
              Have you ever found yourself wishing there was a way to share your plant collection with others without the use of social media? Welcome to Greenr Space!   
              
              

              </p>
              <div className="prose text-gray-500">
                <p>
                Greenr Space aims to bring the wider plant community closer together by offering a platform (or what we like to refer to as a Plantform!) which allows our users to display what plants are currently part of their collection.
                </p>
                <p>Currently in beta testing:</p>
                <ul>
                <li>
                    Sign up and connect with various plant lovers around the world.
                  </li>
                  <li>
                    Upload pictures of your plants and write up a description - including details if you wish to allow other users to contact you to buy/trade!
                  </li>
                  <li>
                    Tailor your profile to create your very own plant 'portfolio'
                  </li>
                </ul>
                <h2>Sign up now to be one of the first to try the platform!</h2>
                <ol>
                  <il>
                    Whether you are a private collector or even a nursery / plant store, Greenr Space can provide you somewhere to display all your plants so others can easily see what plants you own, or what stock you have available
                  </il>
                  <il>
                    Join us as we revolutionise and innovate how we collect and share plants!
                  </il>
                  
                  <il>
                  </il>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <CtaSection
        bg="primary"
        textColor="light"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Want to learn more?"
        subtitle="Contact our team"
        buttonText="Contact Us"
        buttonColor="light"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/contact");
        }}
      /> */}
      <div className="relative bg-gray-800">
        <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:right-0 md:h-full md:w-1/2">

          {/* <Image
          className="w-full h-full object-contain"
            src="/static/ourteam.jpeg"
            alt="Support team"
          /> */}
        </div>
        <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:mr-auto md:w-1/2 md:pl-10">
            <div className="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">
              Moodmap - Devoted to a new avenue of attacking mental health
            </div>
            <h2 className="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
              Want to learn more?
            </h2>
            <p className="mt-3 text-lg leading-7 text-gray-300">
              We are currently working with research
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                >
                  Signup Now!
                  <svg
                    className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Research;
