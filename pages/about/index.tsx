// pages/about.tsx
import Head from 'next/head';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tucker AI | About</title>
      </Head>
      <main className="container mx-auto mt-8">
        <h1 className="mb-4 text-4xl font-bold">About Tucker AI</h1>
        {/* About content goes here */}
      </main>
    </>
  );
};

export default About;
