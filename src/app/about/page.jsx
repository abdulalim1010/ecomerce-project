"use client";

import aboutimage from "../../images/about.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            About Our Store
          </h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Learn more about our mission, vision, and why thousands of customers trust our e-commerce platform.
          </p>
        </div>
      </motion.section>

      {/* About Content */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        
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

      </motion.section>

      {/* Mission Vision Values */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Our Mission & Vision
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >

            {/* Mission */}
            <motion.div
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Target className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide high-quality products at affordable prices and deliver the best online shopping experience.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Eye className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To become the most trusted and customer-focused e-commerce platform worldwide.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Heart className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                Our Values
              </h3>
              <p className="text-gray-600">
                Quality, trust, innovation, and customer satisfaction are at the heart of everything we do.
              </p>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="bg-indigo-600 text-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
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
      </motion.section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              <details className="bg-white p-6 rounded-lg shadow">
                <summary className="font-semibold cursor-pointer text-indigo-600">What is your return policy?</summary>
                <p className="mt-2 text-gray-600">We offer a 30-day return policy on all products. If you're not satisfied, you can return the item for a full refund.</p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow">
                <summary className="font-semibold cursor-pointer text-indigo-600">Do you offer international shipping?</summary>
                <p className="mt-2 text-gray-600">Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location.</p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow">
                <summary className="font-semibold cursor-pointer text-indigo-600">How can I track my order?</summary>
                <p className="mt-2 text-gray-600">Once your order ships, you'll receive a tracking number via email. You can use it to track your package on our website.</p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow">
                <summary className="font-semibold cursor-pointer text-indigo-600">Are my payments secure?</summary>
                <p className="mt-2 text-gray-600">Absolutely. We use industry-standard encryption and secure payment gateways to protect your information.</p>
              </details>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
