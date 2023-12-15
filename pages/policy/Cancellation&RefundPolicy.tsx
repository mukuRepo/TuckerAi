// pages/booking.tsx

import React from 'react';

const Booking: React.FC = () => {
  return (
    <div className="container mx-auto mt-[72px] p-8">
      <h1 className="mb-4 text-3xl font-bold">AI Solutions and Services</h1>

      <div className="p-6 bg-white rounded-md shadow-md bg-opacity-30">
        <h2 className="mb-4 text-xl font-bold">Service Agreement</h2>

        <p className="mb-4">
          We understand that your AI requirements may evolve, and adjustments to your service plan might be necessary.
          Please take note of our service agreement below:
        </p>

        <div className="mb-4">
          <strong>1. Modification Period:</strong>
          <ul>
            <li>Changes requested 30 or more days before the scheduled service date will be accommodated without additional charges.</li>
          </ul>
        </div>

        <div className="mb-4">
          <strong>2. Early Termination:</strong>
          <ul>
            <li>In the event of early termination, clients will be billed for the entire reserved service period.</li>
          </ul>
        </div>

        <div className="mb-4">
          <strong>3. Customization Policy:</strong>
          <ul>
            <li>Customizations to the service plan or features are subject to availability and may result in a pricing adjustment.</li>
          </ul>
        </div>

        <div className="mb-4">
          <strong>4. Refund Process:</strong>
          <ul>
            <li>Refunds for service cancellations will be processed within 10 business days and may take additional time to reflect in your account.</li>
          </ul>
        </div>

        <div className="mb-4">
          <strong>5. Special Offers and Non-Refundable Plans:</strong>
          <ul>
            <li>Some promotional rates or non-refundable plans may have different cancellation policies. Please review the terms and conditions associated with these offerings.</li>
          </ul>
        </div>

        <div className="mb-4">
          <strong>6. Enterprise Agreements:</strong>
          <ul>
            <li>Enterprise agreements are subject to different terms and conditions as outlined in the contract.</li>
          </ul>
        </div>

        <p>
          Please note that this is a general example, and the actual service agreement for your specific AI solution may differ. It is recommended to review the service agreement at the time of booking to ensure clarity and avoid any misunderstandings.
        </p>
      </div>
    </div>
  );
};

export default Booking;
