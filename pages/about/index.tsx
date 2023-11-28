// pages/about.tsx
import ParticleComponent from '@/components/ParticleComponent';
import ParticleSliderComponent from '@/components/ParticleSlider';
import Head from 'next/head';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tucker AI | About</title>
      </Head>
      <main className="container flex flex-col gap-1 text-justify mt-[70px]">
      <ParticleComponent />
        <div className='flex flex-row w-full mx-auto text-justify'>
          <div className='flex flex-col w-full'>
        <h1 className="mb-4 text-4xl font-bold">About Tucker AI</h1>
        <p className="mb-6">
          Tucker AI is a cutting-edge artificial intelligence company dedicated to pushing the boundaries of what is possible in the field of machine learning. Our team of experts is passionate about creating innovative solutions that harness the power of AI to solve real-world problems.
        </p>
        <p className="mb-6">
          At Tucker AI, we believe in the transformative potential of artificial intelligence to revolutionize industries and improve lives. From developing advanced natural language processing models to creating state-of-the-art computer vision algorithms, we are committed to staying at the forefront of AI research and development.
        </p>
        <p className="mb-6">
          Our mission is to make AI accessible and beneficial to everyone. Whether you are a business looking to integrate AI into your operations or an individual curious about the latest advancements in machine learning, Tucker AI is here to provide solutions and insights.
        </p>



        <h2 className="mb-4 text-2xl font-bold">Our Team</h2>
        <p className="mb-6">
          Meet the talented individuals behind Tucker AI. Our diverse team brings together expertise in machine learning, data science, software engineering, and more. Together, we collaborate to tackle complex challenges and drive innovation in the AI landscape.
        </p>

        </div>
        <div className='flex flex-col justify-center w-7/12 h-auto mt-4 text-center'>

          <ParticleSliderComponent logoSrc='/kp.png'/>
          <p className='font-bold text-[18px] -mt-12'>
          Let's Build the future together
          </p>
          <div className='flex flex-row justify-center w-full mt-8 items-cneter'>             
              <Link
                href="/contact"
                className="px-6 py-3 font-bold text-white transition duration-300 bg-black rounded-lg hover:bg-blue-600"
              >
                Contact Us
              </Link>
            </div>
        </div>
        </div>


        <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
        <p>
          Have questions or want to explore how Tucker AI can assist you? Feel free to reach out to us at <a href="mailto:info@tuckerai.com" className="text-blue-500">info@tuckerai.com</a>. We're always excited to connect with those who share our passion for artificial intelligence.
        </p>
        <br></br>
      </main>
    </>
  );
};

export default About;
