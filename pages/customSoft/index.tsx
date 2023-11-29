// src/pages/index.tsx
import ParticleComponent from '@/components/ParticleComponent';
import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen mt-8">
        <ParticleComponent/>
      <div className="container p-8 mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-center">Custom Software Development</h1>

        <h1 className="mt-2 mb-6 text-3xl font-bold text-left">Automate Video Editing</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Video */}
          {/* <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="object-cover w-full h-56 md:h-64"
              src="https://www.youtube.com/watch?v=ZFQB3bygnTI&ab_channel=RomRomJi"
              frameBorder="0"
              allowFullScreen
              title="ASL Recognition App Video"
            />
          </div> */}

          {/* Product Image 1 */}
          <div className="overflow-hidden border-2 border-black rounded-lg shadow-lg">
            <img
              className="object-cover w-full h-56 md:h-64"
              src="https://source.unsplash.com/400x300/?Mobile,ai,ml,1"
              alt="App Screenshot 1"
            />
          </div>

          {/* Product Image 2 */}
          <div className="overflow-hidden border-2 border-black rounded-lg shadow-lg">
            <img
              className="object-cover w-full h-56 md:h-64"
              src="https://source.unsplash.com/400x300/?Mobile,ai,ml,2"
              alt="App Screenshot 2"
            />
          </div>

            {/* Product Image 3 */}
            <div className="overflow-hidden border-2 border-black rounded-lg shadow-lg">
            <img
              className="object-cover w-full h-56 md:h-64"
              src="https://source.unsplash.com/400x300/?Mobile,ai,ml,3"
              alt="App Screenshot 3"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="mb-4 text-2xl font-bold">Key Features</h2>
          <ul className="pl-4 list-disc">
            <li className="mb-2">Real-time American Sign Language recognition.</li>
            <li className="mb-2">User-friendly interface for seamless communication.</li>
            <li className="mb-2">Enhanced accuracy through machine learning algorithms.</li>
            <li className="mb-2">Compatible with a wide range of Android devices.</li>
            <li className="mb-2">Regular updates for improved performance and new features.</li>
          </ul>
        </div>

        <section className="flex flex-col justify-center w-full h-auto mt-8">
        <div className="w-full mx-auto ">
          <div className="flex flex-wrap justify-center w-full px-12 py-16 bg-gray-800 bg-opacity-50 border-2 border-black rounded-lg shadow-xl">
            <div className="w-full text-center ">
              <p className="text-4xl text-center">
                {/* <span role="img" aria-label="love">
                  😍
                </span> */}
              </p>
              <h3 className="text-3xl font-semibold text-blue-100">
              Get in Touch
              </h3>
              <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-100">
              Ready to transform your business with AI and ML? Contact us today for a consultation.
              </p>
              <div className="mt-4">
              <div className='flex flex-row items-center justify-center w-full h-auto mt-2'>   
              <Link
                href="/contact"
                className="px-6 py-3 font-bold text-black transition duration-300 bg-white border-2 border-black rounded-lg hover:bg-blue-300"
              >
                Contact Us
                </Link>
                </div>
          </div>
            </div>
          </div>
        </div>
      </section>


      </div>
    </div>
  );
};

export default Home;
