// pages/support.tsx
import React from 'react';

const Support: React.FC = () => {
  return (
    <div className="container mx-auto mt-[72px] h-screen flex flex-col justify-center items-center gap-2 p-10">
      <h1 className="mb-4 text-3xl font-bold">Support</h1>
      <p>
        Thank you for reaching out to our support team. We are here to assist you with any questions or concerns you may have.
      </p>
      <p>
        For general inquiries, you can contact us at <a href="mailto:mukundsoni082001@gmail.com">mukundsoni082001@gmail.com</a>.
      </p>
      <p>
        If you are facing technical issues, please provide detailed information about the problem, including any error messages you may have encountered.
      </p>
      <p>
        Our support team is available during business hours and will respond to your inquiry as soon as possible.
      </p>
    </div>
  );
};

export default Support;
