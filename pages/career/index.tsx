// pages/under-development.tsx
import Head from 'next/head';

const UnderDevelopment: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tucker AI | Under Development</title>
      </Head>
      <main className="container mx-auto mt-20 text-center">
        <h1 className="mb-4 text-4xl font-bold">Under Development</h1>
        <p className="mb-6 text-lg">
          We're sorry, but this page is currently under development. 
          Please check back soon for exciting updates!
        </p>
        <img
          src="https://i0.wp.com/cliqist.com/wp-content/uploads/2014/07/underdevelopmentlogo.jpg?fit=1126%2C451"  // Replace with your image path
          alt="Under Construction"
          className="mx-auto w-[800px] h-100"
        />
      </main>
    </>
  );
};

export default UnderDevelopment;
