"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Have questions? We d love to hear from you. Send us a message and we ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Send Message
          </h2>

          <form className="space-y-4">

            {/* Name */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>

          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">

          <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
            <MapPin className="text-indigo-600" />
            <div>
              <h3 className="font-semibold text-gray-800">
                Address
              </h3>
              <p className="text-gray-600">
                Rangpur, Bangladesh
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
            <Phone className="text-indigo-600" />
            <div>
              <h3 className="font-semibold text-gray-800">
                Phone
              </h3>
              <p className="text-gray-600">
                +880 1234 567890
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
            <Mail className="text-indigo-600" />
            <div>
              <h3 className="font-semibold text-gray-800">
                Email
              </h3>
              <p className="text-gray-600">
                support@eshop.com
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
            <Clock className="text-indigo-600" />
            <div>
              <h3 className="font-semibold text-gray-800">
                Working Hours
              </h3>
              <p className="text-gray-600">
                Sat - Fri: 9 AM - 10 PM
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* Google Map */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps?q=Rangpur,Bangladesh&output=embed"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
