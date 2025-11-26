import React from "react";

const Contact = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-20 lg:px-40 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-semibold mb-10">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT — CONTACT INFO */}
        <div className="bg-white p-8 rounded-2xl shadow-xl space-y-6">

          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-gray-600">
            We're here to help! Whether you have a question about your order, returns,
            products, or anything else — our team is ready to assist you.
          </p>

          <div className="space-y-4 text-gray-700">

            <p>
              📍 <span className="font-medium">Address:</span>  
              Trendzy Headquarters, Sector 21, Mumbai, Maharashtra, India
            </p>

            <p>
              📞 <span className="font-medium">Phone:</span>  
              +91 98765 43210
            </p>

            <p>
              📧 <span className="font-medium">Email:</span>  
              support@trendzyshop.com
            </p>

            <p>
              🕒 <span className="font-medium">Working Hours:</span>  
              Mon – Sat, 10:00 AM – 7:00 PM
            </p>

          </div>
        </div>

        {/* RIGHT — CONTACT FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">

          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

          <form className="space-y-6">

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                           focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                           focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                           focus:ring-2 focus:ring-black outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl font-semibold 
                         hover:bg-gray-900 hover:scale-105 transition-transform duration-200"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
