import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <main>
        {/* Hero Section */}
        <section
          className="relative flex items-center justify-center min-h-[85vh] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1920&q=80')",
          }}
          aria-label="Hero - featured products"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/80 via-purple-900/70 to-indigo-900/80 backdrop-blur-sm"></div>
          <div className="relative z-10 max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              New Collection Available Now
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
              Elevate Your Style
              <span className="block bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                Shop the Latest Trends
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-white/90">
              Discover handpicked premium products with unbeatable prices. Fast shipping & easy returns on every order.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-violet-600 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Shop Now</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/collections"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/50 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Explore Collections</span>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Free Shipping $50+</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Easy Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Secure Payment</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bar */}
        <section className="bg-white dark:bg-gray-900 py-8 border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-violet-50 dark:hover:bg-gray-700 transition-colors duration-300">
                <span className="text-3xl">🚚</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Free Shipping</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-violet-50 dark:hover:bg-gray-700 transition-colors duration-300">
                <span className="text-3xl">↩️</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Easy Returns</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">30-day return policy</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-violet-50 dark:hover:bg-gray-700 transition-colors duration-300">
                <span className="text-3xl">🔒</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Secure Payment</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">100% protected</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-violet-50 dark:hover:bg-gray-700 transition-colors duration-300">
                <span className="text-3xl">💬</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">24/7 Support</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Dedicated support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Picks */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-violet-600 dark:text-violet-400 font-medium">Discover</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Featured Products</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Handpicked selection of our most popular items, curated just for you.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <span className="text-7xl">👜</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button className="w-full py-3 rounded-xl bg-white text-violet-600 font-semibold hover:bg-violet-50 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 transition-colors">Classic Leather Bag</h3>
                  <p className="mt-1 text-lg font-bold text-violet-600">$129</p>
                </div>
              </div>
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <span className="text-7xl">⌚</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button className="w-full py-3 rounded-xl bg-white text-violet-600 font-semibold hover:bg-violet-50 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 transition-colors">Minimal Watch</h3>
                  <p className="mt-1 text-lg font-bold text-violet-600">$89</p>
                </div>
              </div>
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <span className="text-7xl">👟</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button className="w-full py-3 rounded-xl bg-white text-violet-600 font-semibold hover:bg-violet-50 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 transition-colors">Comfort Sneakers</h3>
                  <p className="mt-1 text-lg font-bold text-violet-600">$99</p>
                </div>
              </div>
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <span className="text-7xl">🎧</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button className="w-full py-3 rounded-xl bg-white text-violet-600 font-semibold hover:bg-violet-50 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 transition-colors">Wireless Headphones</h3>
                  <p className="mt-1 text-lg font-bold text-violet-600">$149</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>View All Products</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl blur-3xl opacity-20"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 rounded-2xl p-6 text-center">
                      <span className="text-4xl">🏆</span>
                      <h3 className="mt-2 font-bold text-2xl text-gray-900 dark:text-white">10K+</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</p>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30 rounded-2xl p-6 text-center">
                      <span className="text-4xl">📦</span>
                      <h3 className="mt-2 font-bold text-2xl text-gray-900 dark:text-white">50K+</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Products Sold</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-6 text-center">
                      <span className="text-4xl">⭐</span>
                      <h3 className="mt-2 font-bold text-2xl text-gray-900 dark:text-white">4.9</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Average Rating</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl p-6 text-center">
                      <span className="text-4xl">🌍</span>
                      <h3 className="mt-2 font-bold text-2xl text-gray-900 dark:text-white">50+</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Countries Served</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-violet-600 dark:text-violet-400 font-medium">About Us</span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                  We are Dedicated to
                  <span className="block text-violet-600">Your Satisfaction</span>
                </h2>
                <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Founded with a passion for quality and style, ShopZone has been delivering exceptional products to customers worldwide since 2020. Our mission is to make premium products accessible to everyone.
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  We believe in sustainable fashion, ethical sourcing, and creating products that stand the test of time. Every item in our collection is carefully curated to ensure the highest quality.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/about"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-full border-2 border-violet-600 text-violet-600 dark:text-violet-400 font-semibold hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Stay in the Loop</h2>
            <p className="mt-4 text-lg text-white/80">Subscribe to our newsletter for exclusive deals, new arrivals, and style tips.</p>
            <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-white text-violet-600 font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 via-purple-500 to-indigo-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-bold">ShopZone</span>
              </Link>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                Your destination for premium products and exceptional shopping experiences. Quality meets style.
              </p>
              <div className="mt-6 flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all duration-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-violet-400 transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="text-gray-400 hover:text-violet-400 transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="text-gray-400 hover:text-violet-400 transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Collections
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-violet-400 transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-violet-400 transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Order Tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Returns & Refunds
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-violet-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Commerce Street, New York, NY 10001, USA</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:support@shopzone.com" className="hover:text-violet-400 transition-colors">support@shopzone.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+1234567890" className="hover:text-violet-400 transition-colors">+1 (234) 567-890</a>
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-sm text-gray-500">Mon - Fri: 9AM - 6PM EST</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 ShopZone. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-violet-400 text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
