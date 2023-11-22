// pages/home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Navigation */}
      <nav className="p-4 text-white bg-gray-800">
        <div className="container flex items-center justify-between mx-auto">
          <h1 className="text-2xl font-bold">My Website</h1>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex items-center justify-center h-screen text-white bg-blue-500">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Welcome to My Awesome Website</h1>
          <p className="mb-6 text-lg">
            Explore, Discover, and Experience the Best in Technology.
          </p>
          <button className="px-4 py-2 mt-4 text-gray-800 bg-yellow-500 rounded-md">
            Get Started
          </button>
        </div>
      </header>

      {/* Featured Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="mb-4 text-3xl font-bold">Featured Content</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Featured Content Cards */}
            <div className="p-6 bg-white rounded-md shadow-md">
              <h3 className="mb-2 text-xl font-bold">Feature 1</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod,
                libero nec lobortis laoreet.
              </p>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md">
              <h3 className="mb-2 text-xl font-bold">Feature 2</h3>
              <p className="text-gray-700">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md">
              <h3 className="mb-2 text-xl font-bold">Feature 3</h3>
              <p className="text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="mb-4 text-3xl font-bold">What Our Users Say</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial Cards */}
            <div className="p-6 bg-white rounded-md shadow-md">
              <p className="text-gray-700">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod,
                libero nec lobortis laoreet."
              </p>
              <p className="mt-4 text-gray-600">- John Doe, CEO of Company X</p>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md">
              <p className="text-gray-700">
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat."
              </p>
              <p className="mt-4 text-gray-600">- Jane Smith, Creative Director</p>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md">
              <p className="text-gray-700">
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur."
              </p>
              <p className="mt-4 text-gray-600">- David Johnson, Product Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="mb-4 text-3xl font-bold">Get in Touch</h2>
          <p className="mb-6 text-gray-700">
            Have questions or want to collaborate? Reach out to us!
          </p>
          <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
