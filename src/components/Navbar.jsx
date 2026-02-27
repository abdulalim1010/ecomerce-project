"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Navbar({ isHomePage = false }) {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/collections", label: "Collections" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // Dynamic offers - can be changed from admin or fetched from API
  const offers = [
    { text: "🎉 Free Shipping on Orders Over $50!", link: "/shipping" },
    { text: "🔥 Big Sale - Up to 50% OFF!", link: "/sale" },
    { text: "💰 New User? Get 20% OFF First Order!", link: "/register" },
    { text: "📦 Express Delivery Available!", link: "/delivery" },
    { text: "🏷️ Flat 10% OFF on Electronics!", link: "/electronics" },
    { text: "👗 New Arrivals - Up to 40% OFF!", link: "/fashion" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-gray-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            {/* Left - Contact Info */}
            <div className="hidden md:flex items-center gap-6">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-violet-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 234 567 890</span>
              </a>
              <a href="mailto:info@shopzone.com" className="flex items-center gap-2 hover:text-violet-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@shopzone.com</span>
              </a>
            </div>

            {/* Center - Dynamic Offers */}
            <div className="flex-1 md:text-center">
              <p className="text-xs md:text-sm">
                <span className="hidden sm:inline">Welcome to ShopZone - </span>
                <span className="text-violet-400 font-medium">Free Shipping on Orders Over $50!</span>
              </p>
            </div>

            {/* Right - Sign In / Join Us */}
            <div className="flex items-center gap-4">
              <Link href="/login" className="hover:text-violet-400 transition-colors">
                Sign In
              </Link>
              <Link 
                href="/register" 
                className="hidden md:inline-flex items-center gap-1 px-3 py-1 bg-violet-600 hover:bg-violet-700 rounded-md transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-3 md:h-20 gap-3 md:gap-0">
            {/* Logo - Left */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 via-purple-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                ShopZone
              </span>
            </Link>

            {/* Navigation Links - Center */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeLink === link.href
                      ? "text-white"
                      : "text-gray-700 hover:text-violet-600"
                  }`}
                >
                  {activeLink === link.href && (
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg"></div>
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Search Bar & Icons - Right */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              {/* Search Bar */}
              <div className="hidden md:flex flex-1 md:w-64 lg:w-80">
                <form onSubmit={handleSearch} className="flex w-full">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-4 pr-4 py-2 border-2 border-gray-300 rounded-l-lg focus:border-violet-500 focus:outline-none transition-colors text-gray-700 text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-r-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Right Icons */}
              <div className="flex items-center gap-2 md:gap-3">
                {/* User Icon */}
                <Link
                  href="/login"
                  className="flex flex-col items-center p-2 hover:text-violet-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </Link>

                {/* Wishlist */}
                <Link
                  href="/wishlist"
                  className="flex flex-col items-center p-2 hover:text-red-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </Link>

                {/* Cart */}
                <Link
                  href="/cart"
                  className="flex flex-col items-center p-2 hover:text-violet-600 transition-colors"
                >
                  <div className="relative">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">3</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden pb-3">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 pl-4 pr-4 py-2 border-2 border-gray-300 rounded-l-lg focus:border-violet-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-4 bg-violet-600 hover:bg-violet-700 text-white rounded-r-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setOpen(false);
                  }}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    activeLink === link.href
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-2 mt-4">
                <Link
                  href="/wishlist"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-100 text-gray-700 font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>Wishlist</span>
                </Link>
                <Link
                  href="/cart"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-violet-600 text-white font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span>Cart (3)</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Violet Offer/Discount Section - Only on Home Page */}
      {isHomePage && (
        <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Infinite Scrolling Offers */}
            <div className="overflow-hidden">
              <div className="flex animate-scroll whitespace-nowrap py-2 md:py-3">
                {/* Duplicate offers for seamless infinite scroll */}
                {[...offers, ...offers, ...offers].map((offer, index) => (
                  <Link
                    key={index}
                    href={offer.link}
                    className="inline-flex items-center gap-2 mx-8 text-sm md:text-base font-medium hover:text-violet-200 transition-colors"
                  >
                    <span>{offer.text}</span>
                    <span className="mx-4">|</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
