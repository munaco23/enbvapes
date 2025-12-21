import React from 'react';

const ShippingPolicyPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative">
        <img src="/images/about/about.png" alt="Vape Products" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <h1 className="text-4xl font-bold text-white tracking-wider text-center px-2">Shipping & Refund Policy</h1>
        </div>
      </div>

      <div className="container mx-auto px-0 sm:px-4 py-0 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 6h18M3 14h18M3 18h18" /></svg>
              Shipping Policy
            </h2>
            <p className="text-gray-600 mb-6">At ENB Vapes, we aim to deliver the best quality disposable pods, vape accessories, and raw rolling papers to our customers as quickly and safely as possible.</p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start"><span className="font-bold mr-2">✓</span> We process all orders within 1–2 business days after order confirmation.</li>
              <li className="flex items-start"><span className="font-bold mr-2">✓</span> Shipping times may vary depending on your location, but orders are usually delivered within 3–7 business days.</li>
              <li className="flex items-start"><span className="font-bold mr-2">✓</span> Once your order is shipped, you may receive a tracking number (if available) to monitor your delivery.</li>
              <li className="flex items-start"><span className="font-bold mr-2">✓</span> ENB Vapes is not responsible for delays caused by courier services, weather conditions, or incorrect shipping information provided by the customer.</li>
              <li className="flex items-start"><span className="font-bold mr-2">✓</span> Please ensure your delivery address and contact details are accurate at the time of ordering.</li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l4 4m-4-4l4-4m6 1h.01M6 21h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Refund & Return Policy
            </h2>
            <p className="text-gray-600 mb-6">Customer satisfaction is important to us. If you are not fully satisfied with your purchase, we offer a refund policy under the following conditions:</p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start"><span className="font-bold mr-2">✓</span> Refunds or returns are accepted within 15 days of receiving your order.</li>
              <li className="flex items-start"><span className="font-bold mr-2">✓</span> The product must be unused, unopened, and in its original packaging.</li>
              <li className="flex items-start"><span className="font-bold mr-2">✓</span> Used, damaged, or tampered items are not eligible for a refund.</li>
              <li className="flex items-start"><span className="font-bold mr-2">✓</span> To request a refund, please contact us with your order number and reason for return.</li>
              <li className="flex items-start"><span className="font-bold mr-2">✓</span> Once the returned item is inspected and approved, the refund will be processed within 5–7 business days.</li>
              <li className="flex items-start"><span className="font-bold mr-2">✓</span> Shipping charges are non-refundable, unless the item received was defective or incorrect.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicyPage;
