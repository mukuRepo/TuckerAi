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
          <h1 className="w-full mb-4 text-2xl font-extrabold text-center text-gray-800 sm:w-11/12 sm:text-4xl">
            Welcome to Tucker Ai
          </h1>
          <p className="w-full text-justify text-gray-600 sm:w-11/12">
            <br></br>
            Tucker AI is a cutting-edge artificial intelligence company dedicated to pushing the boundaries of what is possible in the field of machine learning. Our team of experts is passionate about creating innovative solutions that harness the power of AI to solve real-world problems.
            <br></br>
            <br></br> 
            Transforming businesses with our cutting-edge machine learning and artificial intelligence solutions. 
          </p>
            <div className="flex justify-center w-full mt-8 sm:w-11/12">
              <Link
                href="/contact"
                className="px-6 py-3 font-bold text-black transition duration-300 bg-white border-2 border-black rounded-lg hover:bg-blue-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center w-full sm:w-9/12'>
            <div>
              <ParticleSliderComponent logoSrc='/ds.png'/>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Replace these placeholder images and content with your actual content */}
            <Link href={"/Custom Application Development"}>
              <div className="relative p-6 bg-gray-100 border-2 border-black rounded-lg shadow-md hover:bg-blue-300 hover:-mt-4">
                <img
                  src={`https://source.unsplash.com/400x300/?ai,ml,1`}
                  alt={`AI/ML 1`}
                  className="object-cover w-full h-48 mb-4 border-2 border-black rounded-md"
                />
                <h2 className="mb-2 text-xl font-semibold text-gray-800">
                  Custom Application Development
                </h2>
                <p className="text-gray-600">
                Explore our cutting-edge ML applications for Android and iOS! Dive into a world of custom-developed solutions that leverage machine learning, enhancing user experiences. Visit now to witness innovation in action.
                </p>
              </div>
              </Link>
              <Link href={"/Custom Website Development"}>
              <div className="relative p-6 bg-gray-100 border-2 border-black rounded-lg shadow-md hover:bg-pink-300 hover:-mt-4">
                <img
                  src={`https://source.unsplash.com/400x300/?ai,ml,2`}
                  alt={`AI/ML 1`}
                  className="object-cover w-full h-48 mb-4 border-2 border-black rounded-md"
                />
                <h2 className="mb-2 text-xl font-semibold text-gray-800">
                  Custom Website Development
                </h2>
                <p className="text-gray-600">
                Discover our bespoke web solutions, from NFT platforms to blockchain-based gaming sites. Dive into our portfolio to witness the seamless integration of technology and creativity. Explore the future of web development with us.
                </p>
              </div>
              </Link>
              <Link href={"/Custom Software Development"}>
              <div className="relative p-6 bg-gray-100 border-2 border-black rounded-lg shadow-md hover:bg-green-300 hover:-mt-4">
                <img
                  src={`https://source.unsplash.com/400x300/?ai,ml,3`}
                  alt={`AI/ML 1`}
                  className="object-cover w-full h-48 mb-4 border-2 border-black rounded-md"
                />
                <h2 className="mb-2 text-xl font-semibold text-gray-800">
                  Custom Software Development
                </h2>
                <p className="text-gray-600">
                Discover our bespoke video editing software, seamlessly blending creativity and efficiency. Experience AI-driven automation that transforms editing workflows. Explore our custom solutions and elevate your video editing experience.
                </p>
              </div>
              </Link>
          </div>
        </section>

        <section className="flex flex-col gap-1 mt-12 text-justify">
          <h1 className="mb-4 text-2xl font-bold text-justify">Why Choose Tucker AI</h1>
          <div className="text-justify list-decimal list-inside">
          <p className="mb-2 text-[18px] text-gray-700">
            At Tucker AI, we are dedicated to delivering top-notch AI and ML services. Here's why you should choose us:
          </p>
            <p className='font-bold text-[17px]'>Expert Team:<span className='font-normal'> Our seasoned AI and ML professionals bring a wealth of experience to ensure the success of your projects.</span></p>
            <p className='font-bold text-[17px]'>Cutting-Edge Solutions:<span className='font-normal'> We leverage the latest in technology, providing you with innovative AI and ML solutions that stay ahead of the curve.</span></p>
            <p className='font-bold text-[17px]'>Proven Track Record:<span className='font-normal'> With a history of successful projects, we've consistently delivered results, earning the trust of our clients.</span></p>
            <p className='font-bold text-[17px]'>Customized Services:<span className='font-normal'> Tailoring our offerings to your specific business goals, we prioritize your unique needs, ensuring a personalized and effective approach.</span></p>
            
          </div>
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
              <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-100 border-2 border-black rounded-lg shadow-lg">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle border-b-2 border-black rounded-t-lg"
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
                      <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-black bg-white border-2 border-black rounded-full shadow-lg">
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
                      <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-black bg-white border-2 border-black rounded-full shadow-lg">
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
                      <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-black bg-white border-2 border-black rounded-full shadow-lg">
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
                      <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center text-black bg-white border-2 border-black rounded-full shadow-lg">
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
              <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-black bg-white border-2 border-black rounded-full shadow-lg">
                <TbSitemap className="text-xl fas fa-sitemap"/>
              </div>
              <h3 className="mb-2 text-3xl font-semibold leading-normal">
                AI Components
              </h3>
              <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-500">
                Every element that you need in a product comes built in as a
                component. All components fit perfectly with each other and can
                have different functions for your usecase.
              </p>
              <div className="block pb-6">
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-gray-100 rounded-full last:mr-0">
                  OpenCV
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-gray-100 rounded-full last:mr-0">
                  Tensorflow
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-gray-100 rounded-full last:mr-0">
                SmartFlow
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-gray-100 rounded-full last:mr-0">
                NeuraKit
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-gray-100 rounded-full last:mr-0">
                CogniLib  
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-gray-100 rounded-full last:mr-0">
                VisionForge
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-gray-100 rounded-full last:mr-0">
                DeepMindCraft
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-gray-100 rounded-full last:mr-0">
                DataQuotient
                </span>
              </div>
            </div>

            <div className="w-full px-4 mt-32 ml-auto mr-auto md:w-5/12">
            <div className="relative flex flex-col w-full min-w-0 mt-48 mb-6 md:mt-0">
                <img
                  alt="..."
                  src="https://source.unsplash.com/400x300/?ai,ml,12"
                  className="absolute w-full border-2 border-black align-middle rounded shadow-lg max-w-[100px] left-[145px] -top-[29px] z-3"
                />
                <img
                  alt="..."
                  src="https://source.unsplash.com/400x300/?ai,ml,8"
                  className="absolute w-full align-middle border-2 border-black rounded-lg shadow-lg max-w-[210px] left-[260px] -top-[160px]"
                />
                <img
                  alt="..."
                  src="https://source.unsplash.com/400x300/?ai,ml,15"
                  className="absolute w-full align-middle rounded-lg border-2 border-black shadow-lg max-w-[180px] left-[40px] -top-[225px] z-2"
                />
                <img
                  alt="..."
                  src="https://source.unsplash.com/400x300/?ai,ml,2"
                  className="absolute w-full align-middle rounded-lg border-2 border-black shadow-2xl max-w-[200px] -left-[50px] top-[25px]"
                />
                <img
                  alt="..."
                  src="https://source.unsplash.com/400x50/?ai,ml,5"
                  className="absolute w-full align-middle rounded shadow-lg border-2 border-black max-w-[580px] max-h-[40px] -left-[20px] top-[210px]"
                />
                <img
                  alt="..."
                  src="https://source.unsplash.com/400x300/?ai,ml,1"
                  className="absolute w-full align-middle rounded shadow-xl border-2 border-black max-w-[120px] left-[195px] top-[95px]"
                />
            </div>

            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full px-4 ml-auto mr-auto md:w-6/12">
              <div className="relative flex flex-row items-center justify-center md:flex-wrap">
                <div className="w-full px-4 my-4 lg:w-6/12">
                  <Link
                    href="\"
                  >
                    <div className="p-8 text-center bg-red-600 border-2 border-black rounded-lg shadow-lg">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-1 mx-auto bg-white border-2 border-black rounded-full shadow-md"
                        src="https://source.unsplash.com/200x200/?ai,ml,3"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                      Object Detection
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="\"
                  >
                    <div className="p-8 mt-8 text-center bg-blue-500 border-2 border-black rounded-lg shadow-lg">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-1 mx-auto bg-white border-2 border-black rounded-full shadow-md"
                        src="https://source.unsplash.com/400x400/?ai,ml,5"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                      Neural network
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="\"
                    target="_blank"
                  >
                    <div className="p-8 mt-8 text-center bg-gray-700 border-2 border-black rounded-lg shadow-lg">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-1 mx-auto bg-white border-2 border-black rounded-full shadow-md"
                        src="https://source.unsplash.com/400x400/?ai,ml,6"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                      Machine Learning
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="w-full px-4 my-4 mt-16 lg:w-6/12 lg:mt-16">
                  <Link
                    href="\"
                    target="_blank"
                  >
                    <div className="p-8 text-center bg-yellow-500 border-2 border-black rounded-lg shadow-lg">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-1 mx-auto bg-white border-2 border-black rounded-full shadow-md"
                        src="https://source.unsplash.com/400x400/?ai,ml,8"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                      Computer Vision
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/"
                    target="_blank"
                  >
                    <div className="p-8 mt-8 text-center bg-red-700 border-2 border-black rounded-lg shadow-lg">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-1 mx-auto bg-white border-2 border-black rounded-full shadow-md"
                        src="https://source.unsplash.com/400x400/?ai,ml,10"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                      Character Recognition
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/"
                    target="_blank"
                  >
                    <div className="p-8 mt-8 text-center border-2 border-black rounded-lg shadow-lg bg-emerald-500">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-1 mx-auto bg-white border-2 border-black rounded-full shadow-md"
                        src="https://source.unsplash.com/400x400/?ai,ml,21"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                      Transfer Learning
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full px-12 mt-20 ml-auto mr-auto md:w-4/12 md:px-4">
              <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center bg-white border-2 border-black rounded-full shadow-lg text-balck">
                <FaDraftingCompass className="text-xl fas fa-drafting-compass"/>
              </div>
              <h3 className="mb-2 text-3xl font-semibold leading-normal">
                Custom Solutions
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Tailor-made products, services, or systems that are specifically designed and developed to meet the 
              unique requirements of a particular client, business, or situation. These solutions are crafted to address 
              specific challenges, leverage opportunities, 
              or fulfill particular needs that may not be adequately met by off-the-shelf or generic alternatives.
              </p>
              <p className="mt-4 mb-2 text-lg leading-relaxed text-gray-500">
                We created a set of Solutions that are dynamic and come to help
                you.
              </p>
              <div className="block pb-6">
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-gray-100 rounded-full last:mr-0">
                Visual Tracking
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-gray-100 rounded-full last:mr-0">
                Video Tracking
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-gray-100 rounded-full last:mr-0">
                Image Tracking
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-gray-100 rounded-full last:mr-0">
                Object tracking camera
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-gray-100 rounded-full last:mr-0">
                YOLO 
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-gray-100 rounded-full last:mr-0">
                YOLO 
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-gray-100 rounded-full last:mr-0">
                ImageAI
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold text-gray-500 uppercase bg-gray-100 rounded-full last:mr-0">
                Faster R-CNN
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 pt-48 pb-32 mx-auto mt-[-100px]">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-12 ml-auto md:w-5/12 md:px-4">
              <div className="md:pr-12">
                <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-black bg-white border-2 border-black rounded-full shadow-lg">
                  <FaFileAlt className="text-xl fas fa-file-alt"/>
                </div>
                <h3 className="text-3xl font-semibold">
                  Complex Documentation
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-500">
                  We help to provide a lot of fully coded examples that help
                  you get started faster. You can adjust the requirements and also the
                  programming language. You can change the data and images and variables and
                  you're good to go.
                </p>
                <ul className="mt-6 list-none">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold text-black uppercase rounded-full bg-gray-50">
                          <FaFingerprint className="fas fa-fingerprint"/>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-black">
                          Built by Developers for Developers
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-gray-1000 bg-gray-50">
                          <FaHtml5 className="fab fa-html5"/>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-1000">
                          Carefully crafted code for Components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold uppercase rounded-full text-gray-1000 bg-gray-50">
                          <FaPaperPlane className="far fa-paper-plane"/>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-1000">
                          Dynamic Custom Components
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
                className="max-w-full border-2 border-black rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="https://source.unsplash.com/400x300/?ai,ml,11"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center text-center">
          <div className="w-full px-12 md:w-6/12 md:px-4">
            <h2 className="text-4xl font-semibold">Examine Our Exemplar Solution</h2>
            <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-500">
            Sample solutions provide diverse insights and practical examples, 
            aiding understanding and problem-solving across various domains.
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
                    Custom Detection
                  </h5>
                  <Link href="/">
                    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white border-2 border-black rounded-lg shadow-lg hover:-mt-4">
                      <img
                        alt="..."
                        className="h-auto max-w-full align-middle border-2 border-black rounded-lg"
                        src="https://source.unsplash.com/400x300/?ai,ml,45"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full px-4 lg:w-4/12">
                  <h5 className="pb-4 text-xl font-semibold text-center">
                    Human AI Development
                  </h5>
                  <Link href="/">
                    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white border-2 border-black rounded-lg shadow-lg hover:-mt-4">
                      <img
                        alt="..."
                        className="h-auto max-w-full align-middle border-none rounded-lg "
                        src="https://source.unsplash.com/400x300/?ai,ml,28"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full px-4 lg:w-4/12">
                  <h5 className="pb-4 text-xl font-semibold text-center">
                    Web3 Development
                  </h5>
                  <Link href="/">
                    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white border-2 border-black rounded-lg shadow-lg hover:-mt-4">
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


      <section className="w-full py-20 overflow-hidden mt-0 sm:mt-[-250px]">
        <div className="container pb-64 mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-12 ml-auto mr-auto md:w-5/12 md:px-4 md:mt-64">
              <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-black bg-red-500 border-2 border-black rounded-full shadow-lg">
              <PiGitBranchFill className="text-xl fas fa-code-branch"/>
              </div>
              <h3 className="mb-2 text-3xl font-semibold leading-normal text-black">
                Use Open Source
              </h3>
              <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-900">
              As an open-source project, we extend the ethos. Feel the design, 
              test the code quality in this version. Join the movement!
              </p>
              <p className="mt-0 mb-4 text-lg font-light leading-relaxed text-gray-900">
                Try to get it free on Github and please help us spread the news with Us!
              </p>
              <a
                href="/"
                target="_blank"
                className="inline-block px-6 py-4 mt-4 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-700 rounded shadow outline-none github-star focus:outline-none active:bg-gray-600 hover:shadow-lg"
              >
                Github Star
              </a>
            </div>

            <div className="relative justify-end w-full px-4 mt-32 mr-auto ml-36 md:w-4/12 bg-grey-500 ">
            <FaGithub className="absolute top-0 right-0 w-full h-full text-5xl text-gray-700 opacity-80 "></FaGithub>
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
            <Link
              href="/contact"
              className="px-6 py-3 text-white transition duration-300 bg-blue-500 rounded-full hover:bg-blue-600"
            >
              Contact Us
            </Link>
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
