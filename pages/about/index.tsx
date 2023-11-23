// pages/about.tsx
import Head from 'next/head';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tucker AI | About</title>
      </Head>
      <main className="container mx-auto mt-16 ml-3">
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
