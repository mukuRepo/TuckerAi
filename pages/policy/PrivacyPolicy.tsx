// pages/privacy.tsx

import Head from 'next/head';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className=" mt-[72px] h-full">
      <Head>
        <title>Privacy Policy - Tucker Ai</title>
      </Head>

      <header className="p-4 text-center text-black">
        <h1 className="text-2xl font-semibold">Privacy Policy</h1>
      </header>

      <main className="container p-8 mx-auto mb-4 bg-red-200 bg-opacity-25 shadow rounded-xl">
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">1. Information We Collect:</h2>
          <p>1. We may collect personal information such as your name, contact details, payment information, and other relevant details necessary for booking.</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">2. How We Use Your Information:</h2>
          <ul>
          <li>1. Your personal information is used to process your Product.</li>
          <li>2. We may use your contact information to send you updates, and 
            other relevant information related to our product.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">3. Information Sharing:</h2>
          <p>1. We may disclose your information if required by law or in response to legal requests, such as court orders or subpoenas.</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">4. Security:</h2>
          <p>1. We employ industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, and destruction.</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">5. Your Rights:</h2>
          {/* Include your content for Your Rights */}
          <p>1. You have the right to access, correct, or delete your personal information. You can do so by logging into your account or contacting our customer support.</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">7. Changes to the Privacy Policy:</h2>
          <p>1. We may update this Privacy Policy from time to time. Any changes will be effective upon posting the revised policy on our website.</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">8. Contact Us:</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at mukundsoni082001@gmail.com</p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
