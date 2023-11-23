import Head from 'next/head';
import { PiGitBranchFill } from "react-icons/pi";
import { FaSitemap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaFingerprint } from "react-icons/fa";
import { FaDraftingCompass } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { TbSitemap } from "react-icons/tb";
import { FaAngleDoubleRight } from "react-icons/fa";
import Link from 'next/link';
import ParticleComponent from '@/components/ParticleComponent';
import ParticleSliderComponent from '@/components/ParticleSlider';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tucker Ai</title>
      </Head>
      <main className="container mx-auto md:mt-[80px] mt-[200px]">
      <ParticleComponent />
        <section className="text-center gap-2 h-[300px] flex md:flex-row flex-col md:h-auto justify-center">
          <div className='flex flex-col justify-center w-full h-full'>
          <h1 className="mb-4 text-3xl font-extrabold text-left text-gray-800 sm:text-4xl">
            Welcome to Tucker Ai
          </h1>
          <p className="text-justify text-gray-600">
            <br></br>
            Tucker AI is a cutting-edge artificial intelligence company dedicated to pushing the boundaries of what is possible in the field of machine learning. Our team of experts is passionate about creating innovative solutions that harness the power of AI to solve real-world problems.
            <br></br>
            <br></br>
            Transforming businesses with cutting-edge machine learning and artificial intelligence solutions. 
          </p>
          </div>
          <div className='flex flex-col items-center justify-center w-full sm:w-9/12'>
            <div><ParticleSliderComponent logoSrc='/ds.png'/></div>
          </div>
        </section>

        <section className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Replace these placeholder images and content with your actual content */}
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <img
                  src={`https://source.unsplash.com/400x300/?ai,ml,${index}`}
                  alt={`AI/ML ${index}`}
                  className="object-cover w-full h-48 mb-4 rounded-md"
                />
                <h2 className="mb-2 text-xl font-semibold text-gray-800">
                  Coming Soon #{index + 1} 
                </h2>
                <p className="text-gray-600">
                  Work in Progress.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 ml-4">
          <h2 className="mb-4 text-2xl font-bold">Why Choose Tucker AI?</h2>
          <p className="mb-8 text-lg text-gray-700">
            At Tucker AI, we are dedicated to delivering top-notch AI and ML services. Here's why you should choose us:
          </p>
          <ul className="list-disc list-inside">
            <li>Experienced team of AI and ML experts</li>
            <li>Cutting-edge technology solutions</li>
            <li>Proven track record of successful projects</li>
            <li>Customized services to meet your business goals</li>
          </ul>
        </section>

        
{/* 
        <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-700">
            Ready to transform your business with AI and ML? Contact us today for a consultation.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="px-6 py-3 text-white transition duration-300 bg-blue-500 rounded-full hover:bg-blue-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section> */}

      {/* {testing} */}

      <section className="relative pb-40 mt-48 md:mt-40">
        <div
          className="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="px-2 px-12 ml-auto mr-auto -mt-32 w-12/12 md:w-6/12 lg:w-4/12 md:px-4">
              <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 block w-full h-95-px -top-94-px"
                  >

                  </svg>
                  <h4 className="text-xl font-bold text-center text-black">
                    Fantastic for embarking on your Tucker AI journey!
                  </h4>
                  <p className="mt-2 font-light text-justify text-black text-md">
                  Crafting a compelling online presence has never been more seamless, thanks to our collection of pre-designed components. Whether you're envisioning captivating landing pages, engaging presentations, or user-friendly login areas, Tucker AI empowers you to effortlessly customize and construct your digital spaces.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full px-4 text-center sm:text-justify md:w-6/12">
              <div className="flex flex-wrap">
                <div className="w-full px-4 md:w-6/12">
                  <div className="relative flex flex-col mt-4">
                    <div className="flex-auto px-4 py-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-gray-500 bg-white rounded-full shadow-lg">
                        <FaSitemap/>
                      </div>
                      <h6 className="mb-1 text-xl font-semibold">
                      AI/ML Components
                      </h6>
                      <p className="mb-4 text-gray-500">
                      Tucker AI offers an extensive array of fully coded AI/ML components, empowering your projects with intelligent capabilities.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="flex-auto px-4 py-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-gray-500 bg-white rounded-full shadow-lg">
                        <FaDraftingCompass className="fas fa-drafting-compass"/>
                      </div>
                      <h6 className="mb-1 text-xl font-semibold">
                      Custom Solutions
                      </h6>
                      <p className="mb-4 text-gray-500">
                      We showcase dynamic components designed for various frameworks, including React, NextJS, Vue, Android Stuio, Python, and Angular ensuring adaptability to your preferred technology stack.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-6/12">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="flex-auto px-4 py-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-gray-500 bg-white rounded-full shadow-lg">
                        <FaNewspaper className="fas fa-newspaper"/>
                      </div>
                      <h6 className="mb-1 text-xl font-semibold">Tailored Pages</h6>
                      <p className="mb-4 text-gray-500">
                      Our service extends to providing three sample pages, meticulously coded and ready for instant deployment. Jumpstart your project with confidence.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="flex-auto px-4 py-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-gray-500 bg-white rounded-full shadow-lg">
                        <FaFileAlt className="fas fa-file-alt"/>
                      </div>
                      <h6 className="mb-1 text-xl font-semibold">
                      Comprehensive Documentation
                      </h6>
                      <p className="mb-4 text-gray-500">
                      Developed by seasoned professionals for fellow developers, our documentation ensures a smooth and enjoyable experience as you navigate the capabilities of Tucker AI. Get ready to embrace the future of AI/ML effortlessly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pb-20 mx-auto overflow-hidden text-center sm:text-justify">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-12 mt-48 ml-auto mr-auto md:w-4/12 md:px-4">
              <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-gray-500 bg-white rounded-full shadow-lg">
                <TbSitemap className="text-xl fas fa-sitemap"/>
              </div>
              <h3 className="mb-2 text-3xl font-semibold leading-normal">
                CSS Components
              </h3>
              <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-600">
                Every element that you need in a product comes built in as a
                component. All components fit perfectly with each other and can
                have different colours.
              </p>
              <div className="block pb-6">
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-white rounded-full last:mr-0">
                  Buttons
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-white rounded-full last:mr-0">
                  Inputs
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-white rounded-full last:mr-0">
                  Labels
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-white rounded-full last:mr-0">
                  Menus
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-white rounded-full last:mr-0">
                  Navbars
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-white rounded-full last:mr-0">
                  Pagination
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-white rounded-full last:mr-0">
                  Progressbars
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-white rounded-full last:mr-0">
                  Typography
                </span>
              </div>
              <a
                href="/"
                target="_blank"
                className="flex flex-row items-center gap-2 font-bold text-gray-700 transition-all duration-150 ease-linear hover:text-gray-500"
              >
                View All{" "}
                <FaAngleDoubleRight/>
              </a>
            </div>

            <div className="w-full px-4 mt-32 ml-auto mr-auto md:w-5/12">
            <div className="relative flex flex-col w-full min-w-0 mt-48 mb-6 md:mt-0">
                <img
                  alt="..."
                  src="https://source.unsplash.com/400x300/?ai,ml,12"
                  className="absolute w-full align-middle rounded shadow-lg max-w-[100px] left-[145px] -top-[29px] z-3"
                />
                <img
                  alt="..."
                  src="https://source.unsplash.com/400x300/?ai,ml,8"
                  className="absolute w-full align-middle rounded-lg shadow-lg max-w-[210px] left-[260px] -top-[160px]"
                />
                <img
                  alt="..."
                  src="https://source.unsplash.com/400x300/?ai,ml,15"
                  className="absolute w-full align-middle rounded-lg shadow-lg max-w-[180px] left-[40px] -top-[225px] z-2"
                />
                <img
                  alt="..."
                  src="https://source.unsplash.com/400x300/?ai,ml,2"
                  className="absolute w-full align-middle rounded-lg shadow-2xl max-w-[200px] -left-[50px] top-[25px]"
                />
                <img
                  alt="..."
                  src="https://source.unsplash.com/400x300/?ai,ml,5"
                  className="absolute w-full align-middle rounded shadow-lg max-w-[580px] max-h-[40px] -left-[20px] top-[210px]"
                />
                <img
                  alt="..."
                  src="https://source.unsplash.com/400x300/?ai,ml,1"
                  className="absolute w-full align-middle rounded shadow-xl max-w-[120px] left-[195px] top-[95px]"
                />
            </div>

            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full px-4 mt-32 ml-auto mr-auto md:w-6/12">
              <div className="relative flex flex-row items-center justify-center md:flex-wrap">
                <div className="w-full px-4 my-4 lg:w-6/12">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="p-8 text-center bg-red-600 rounded-lg shadow-lg">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                        src="https://source.unsplash.com/200x200/?ai,ml,3"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                        Svelte
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="p-8 mt-8 text-center bg-blue-500 rounded-lg shadow-lg">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                        src="https://source.unsplash.com/400x300/?ai,ml,5"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                        ReactJS
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="p-8 mt-8 text-center bg-gray-700 rounded-lg shadow-lg">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                        src="https://source.unsplash.com/400x300/?ai,ml,6"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                        NextJS
                      </p>
                    </div>
                  </a>
                </div>
                <div className="w-full px-4 my-4 mt-16 lg:w-6/12 lg:mt-16">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="p-8 text-center bg-yellow-500 rounded-lg shadow-lg">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                        src="https://source.unsplash.com/400x300/?ai,ml,8"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                        JavaScript
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="p-8 mt-8 text-center bg-red-700 rounded-lg shadow-lg">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                        src="https://source.unsplash.com/400x300/?ai,ml,10"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                        Angular
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="p-8 mt-8 text-center rounded-lg shadow-lg bg-emerald-500">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                        src="https://source.unsplash.com/400x300/?ai,ml,11"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                        Vue.js
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-12 mt-48 ml-auto mr-auto md:w-4/12 md:px-4">
              <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-gray-500 bg-white rounded-full shadow-lg">
                <FaDraftingCompass className="text-xl fas fa-drafting-compass"/>
              </div>
              <h3 className="mb-2 text-3xl font-semibold leading-normal">
                Javascript Components
              </h3>
              <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-600">
                In order to create a great User Experience some components
                require JavaScript. In this way you can manipulate the elements
                on the page and give more options to your users.
              </p>
              <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-600">
                We created a set of Components that are dynamic and come to help
                you.
              </p>
              <div className="block pb-6">
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-white rounded-full last:mr-0">
                  Alerts
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-white rounded-full last:mr-0">
                  Dropdowns
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-white rounded-full last:mr-0">
                  Menus
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-white rounded-full last:mr-0">
                  Modals
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-white rounded-full last:mr-0">
                  Navbars
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-white rounded-full last:mr-0">
                  Popovers
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-white rounded-full last:mr-0">
                  Tabs
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-white rounded-full last:mr-0">
                  Tooltips
                </span>
              </div>
              <a
                href="/"
                target="_blank"
                className="flex flex-row items-center font-bold text-gray-700 transition-all duration-150 ease-linear hover:text-gray-500"
              >
                View all{" "}
                <FaAngleDoubleRight className="ml-1 mt-[2px] leading-relaxed fa fa-angle-double-right"/>
              </a>
            </div>
          </div>
        </div>

        <div className="container px-4 pt-48 pb-32 mx-auto mt-[-100px]">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-12 ml-auto md:w-5/12 md:px-4">
              <div className="md:pr-12">
                <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-gray-500 bg-white rounded-full shadow-lg">
                  <FaFileAlt className="text-xl fas fa-file-alt"/>
                </div>
                <h3 className="text-3xl font-semibold">
                  Complex Documentation
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-500">
                  This extension comes a lot of fully coded examples that help
                  you get started faster. You can adjust the colors and also the
                  programming language. You can change the text and images and
                  you're good to go.
                </p>
                <ul className="mt-6 list-none">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold text-gray-500 uppercase rounded-full bg-gray-50">
                          <FaFingerprint className="fas fa-fingerprint"/>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-500">
                          Built by Developers for Developers
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold text-gray-500 uppercase rounded-full bg-gray-50">
                          <FaHtml5 className="fab fa-html5"/>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-500">
                          Carefully crafted code for Components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold text-gray-500 uppercase rounded-full bg-gray-50">
                          <FaPaperPlane className="far fa-paper-plane"/>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-500">
                          Dynamic Javascript Components
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 pt-24 mr-auto md:w-6/12 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="https://source.unsplash.com/400x300/?ai,ml,10"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-24 text-center">
          <div className="w-full px-12 md:w-6/12 md:px-4">
            <h2 className="text-4xl font-semibold">Beautiful Example Pages</h2>
            <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-500">
              Notus NextJS is a completly new product built using our past
              experience in web templates. Take the examples we made for you and
              start playing with them.
            </p>
          </div>
        </div>
      </section>

      <section className="relative blockz-1">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 -mt-24 lg:w-12/12">
              <div className="flex flex-wrap">
                <div className="w-full px-4 lg:w-4/12">
                  <h5 className="pb-4 text-xl font-semibold text-center">
                    Login Page
                  </h5>
                  <Link href="/auth/login">
                    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white rounded-lg shadow-lg hover:-mt-4">
                      <img
                        alt="..."
                        className="h-auto max-w-full align-middle border-none rounded-lg"
                        src="https://source.unsplash.com/400x300/?ai,ml,45"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full px-4 lg:w-4/12">
                  <h5 className="pb-4 text-xl font-semibold text-center">
                    Profile Page
                  </h5>
                  <Link href="/profile">
                    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white rounded-lg shadow-lg hover:-mt-4">
                      <img
                        alt="..."
                        className="h-auto max-w-full align-middle border-none rounded-lg"
                        src="https://source.unsplash.com/400x300/?ai,ml,28"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full px-4 lg:w-4/12">
                  <h5 className="pb-4 text-xl font-semibold text-center">
                    Landing Page
                  </h5>
                  <Link href="/landing">
                    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white rounded-lg shadow-lg hover:-mt-4">
                      <img
                        alt="..."
                        className="h-auto max-w-full align-middle border-none rounded-lg"
                        src="https://source.unsplash.com/400x300/?ai,ml,25"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full py-20 overflow-hidden mt-[-250px]">
        <div className="container pb-64 mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-12 ml-auto mr-auto md:w-5/12 md:px-4 md:mt-64">
              <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-gray-500 bg-red-500 rounded-full shadow-lg">
              <PiGitBranchFill className="text-xl fas fa-code-branch"/>
              </div>
              <h3 className="mb-2 text-3xl font-semibold leading-normal text-black">
                Open Source
              </h3>
              <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-900">
                Since{" "}
                <a
                  href="https://tailwindcss.com/?ref=creative"
                  className="text-gray-600"
                  target="_blank"
                >
                  Tailwind CSS
                </a>{" "}
                is an open source project we wanted to continue this movement
                too. You can give this version a try to feel the design and also
                test the quality of the code!
              </p>
              <p className="mt-0 mb-4 text-lg font-light leading-relaxed text-gray-900">
                Get it free on Github and please help us spread the news with a
                Star!
              </p>
              <a
                href="/"
                target="_blank"
                className="inline-block px-6 py-4 mt-4 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-700 rounded shadow outline-none github-star focus:outline-none active:bg-gray-600 hover:shadow-lg"
              >
                Github Star
              </a>
            </div>

            <div className="relative justify-end w-full px-4 mt-32 mr-auto ml-36 md:w-4/12 bg-grey-500">
            <FaGithub className="absolute top-0 right-0 w-full h-full text-5xl text-gray-700 opacity-80"></FaGithub>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bottom-0 pt-32 pb-16">
        <div className="container mx-auto">
          <div className="relative flex flex-wrap justify-center px-12 py-16 -mt-64 bg-gray-600 rounded-lg shadow-xl bg-opacity-30">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="text-3xl font-semibold">
              Get in Touch
              </h3>
              <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-500">
              Ready to transform your business with AI and ML? Contact us today for a consultation.
              </p>
              {/* <div className="flex w-full gap-2 mt-10 sm:block">
                <a
                  href="/"
                  target="_blank"
                  className="w-full px-6 py-4 mb-2 mr-1 text-sm font-bold text-black uppercase transition-all duration-150 ease-linear bg-blue-400 rounded shadow outline-none get-started focus:outline-none active:bg-blue-500 hover:shadow-lg"
                >
                  Get started
                </a>
                <a
                  href="/"
                  target="_blank"
                  className="w-full px-6 py-4 mb-1 mr-1 text-sm font-bold text-black uppercase bg-gray-700 rounded shadow outline-none github-star sm:ml-1 focus:outline-none active:bg-blue-600 hover:shadow-lg"
                >
                  <FaGithub className="text-sm fab fa-github"/>
                  <span>Help With a Star</span>
                </a>
              </div> */}
              <div className="mt-8">
            <a
              href="/contact"
              className="px-6 py-3 text-white transition duration-300 bg-blue-500 rounded-full hover:bg-blue-600"
            >
              Contact Us
            </a>
          </div>
            </div>
          </div>
        </div>
      </section>

      
        {/* <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-700">
            Ready to transform your business with AI and ML? Contact us today for a consultation.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="px-6 py-3 text-white transition duration-300 bg-blue-500 rounded-full hover:bg-blue-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section> */}

      </main>
    </>
  );
};

export default Home;
