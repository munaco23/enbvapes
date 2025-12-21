import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative">
        <img src="/images/hero-section/slider1.jfif" alt="Privacy" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <h1 className="text-4xl font-bold text-white tracking-wider text-center px-2">Privacy Policy</h1>
        </div>
      </div>

      <div className="container mx-auto px-0 sm:px-4 py-0 sm:py-16">
        <div className="bg-white shadow-lg rounded-lg p-4 md:p-8 max-w-4xl mx-auto">
          <p className="text-gray-600 mb-8 text-left">At ENB Vapes, your privacy and trust are very important to us. We are committed to protecting your personal information while providing the best quality disposable pods, vape accessories, and raw rolling papers.</p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Information We Collect</h2>
              <p className="text-gray-700 mb-4">We may collect basic personal information such as:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Full name</li>
                <li>Contact number</li>
                <li>Email address (if provided)</li>
                <li>Shipping address</li>
                <li>Order and purchase details</li>
              </ul>
              <p className="text-gray-700 mt-4">This information is collected only to process orders, provide customer support, and improve our services.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Use of Information</h2>
              <p className="text-gray-700">Your information is used strictly for order processing, delivery, and communication regarding your purchase. We do not use your personal data for unauthorized marketing or activities.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Data Protection</h2>
              <p className="text-gray-700">All customer information is stored securely and protected against unauthorized access. We follow standard security practices to ensure your data remains safe and confidential.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sharing of Information</h2>
              <p className="text-gray-700">ENB Vapes does not sell, trade, or rent customer information to third parties. Information may only be shared with trusted courier or service partners when necessary to complete deliveries.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Customer Rights</h2>
              <p className="text-gray-700">You have the right to request access, correction, or deletion of your personal data by contacting us. We respect your privacy choices and handle all requests responsibly.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Policy Updates</h2>
              <p className="text-gray-700">ENB Vapes may update this Privacy Policy from time to time. Any changes will be reflected on our platform.</p>
            </div>

            <p className="text-gray-600 mt-8 text-center">By using our services, you agree to the privacy practices described above.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
