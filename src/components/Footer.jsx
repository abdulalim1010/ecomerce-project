"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        
        {/* Logo & About */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">
            E-Shop
          </h2>

          <p className="text-sm text-gray-400 max-w-md">
            Your trusted online store for quality products at the best prices. 
            We offer fast delivery, secure payment, and excellent customer service.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-5">
            <Link href="#" className="hover:text-white">
              <Facebook size={20} />
            </Link>

            <Link href="#" className="hover:text-white">
              <Twitter size={20} />
            </Link>

            <Link href="#" className="hover:text-white">
              <Instagram size={20} />
            </Link>

            <Link href="#" className="hover:text-white">
              <Youtube size={20} />
            </Link>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Shop
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/products" className="hover:text-white">
                All Products
              </Link>
            </li>

            <li>
              <Link href="/categories" className="hover:text-white">
                Categories
              </Link>
            </li>

            <li>
              <Link href="/cart" className="hover:text-white">
                Cart
              </Link>
            </li>

            <li>
              <Link href="/checkout" className="hover:text-white">
                Checkout
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Support
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>

            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              Rangpur, Bangladesh
            </li>

            <li className="flex items-center gap-2">
              <Phone size={16} />
              +880 1234 567890
            </li>

            <li className="flex items-center gap-2">
              <Mail size={16} />
              support@eshop.com
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
          
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} E-Shop. All rights reserved.
          </p>

          <div className="flex gap-4 text-sm">
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>

            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>

            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}
