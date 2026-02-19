"use client";

import bannerImg from "../images/baqnner.jpg";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Discover Amazing Products <br />
            at <span className="text-yellow-300">Best Prices</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-md">
            Shop the latest fashion, electronics, and accessories with exclusive deals and fast delivery.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/products">
              <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
                Shop Now
              </button>
            </Link>

            <Link href="/offers">
              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition">
                View Offers
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src={bannerImg}
            alt="Ecommerce Banner"
            width={500}
            height={400}
            className="w-full max-w-md object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
