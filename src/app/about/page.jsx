"use client";

import aboutimage from "../../images/about.jpg";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            About Our Store
          </h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Learn more about our mission, vision, and why thousands of customers trust our e-commerce platform.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div>
          <Image
            src={aboutimage}
            alt="About us"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Who We Are
          </h2>

          <p className="text-gray-600 mb-4">
            We are a modern e-commerce platform dedicated to providing high-quality products at affordable prices. 
            Our goal is to make online shopping easy, secure, and enjoyable for everyone.
          </p>

          <p className="text-gray-600 mb-4">
            Since our launch, we have served thousands of happy customers by offering fast delivery, secure payments, 
            and excellent customer support.
          </p>

          <p className="text-gray-600">
            We continuously improve our platform to provide the best shopping experience possible.
          </p>
        </div>

      </section>

      {/* Mission Vision Values */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Mission */}
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide high-quality products at affordable prices and deliver the best online shopping experience.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To become the most trusted and customer-focused e-commerce platform worldwide.
              </p>
            </div>

            {/* Values */}
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                Our Values
              </h3>
              <p className="text-gray-600">
                Quality, trust, innovation, and customer satisfaction are at the heart of everything we do.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-3xl font-bold">10K+</h3>
            <p className="text-gray-200">Customers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">5K+</h3>
            <p className="text-gray-200">Products</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">99%</h3>
            <p className="text-gray-200">Satisfaction</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="text-gray-200">Support</p>
          </div>

        </div>
      </section>

    </div>
  );
}
