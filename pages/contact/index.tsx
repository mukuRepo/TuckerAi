import ParticleComponent from '@/components/ParticleComponent';
import React from 'react';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='bg-transparent'>
    <ParticleComponent />   
     <div className="flex flex-col items-center justify-center gap-5 p-10 bg-transparent h-max ">
        
        <div className='text-3xl font-bold text-white'>
        Drop Your Message
        </div>
      <div className="w-full max-w-md p-8 text-white rounded-md shadow-lg bg-gradient-to-br from-green-500 to-purple-600">
        <div className="mb-6 text-3xl font-semibold text-center text-white">Contact Us</div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 mt-1 text-black border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 mt-1 text-black border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white">
              Your Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-2 mt-1 text-black border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-white">
              Your Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={4}
              className="w-full p-2 mt-1 text-black border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>

  );
};

export default ContactPage;
