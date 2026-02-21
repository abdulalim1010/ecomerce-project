"use client";

export default function TopRatedCard({ product, onClick }) {

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer w-full max-w-sm"
    >

      {/* Card Container */}
      <div className="relative h-80 overflow-hidden rounded-2xl shadow-lg">

        {/* Back Image - Reveals from inside */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={product.images.back}
            alt="back"
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-2000 ease-in-out"
          />
        </div>

        {/* Front Image - Slides/zooms to reveal back image */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <img
            src={product.images.front}
            alt="front"
            className="
              w-full h-full object-cover
              transition-all duration-1000 ease-in-out
              group-hover:scale-110
              group-hover:opacity-0
            "
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-1000" />

        {/* Text Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10">

          {/* Product name with animation */}
          <h3 className="
            text-xl font-bold mb-1
            transform transition-all duration-700
            group-hover:-translate-y-2
          ">
            {product.name}
          </h3>

          {/* Price tag */}
          <div className="flex items-center gap-2 mb-2">
            <span className="
              text-2xl font-bold
              transition-all duration-700 delay-100
            ">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Rating stars */}
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-400'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Action text */}
          <p className="
            text-sm text-gray-300 flex items-center gap-2
            opacity-0 group-hover:opacity-100
            transform translate-y-4 group-hover:translate-y-0
            transition-all duration-1000 delay-300
          ">
            <span>View Details</span>
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </p>

        </div>

      </div>

      {/* Card title below */}
      <div className="mt-3 text-center">
        <p className="text-sm text-gray-500">
          {product.category || "Premium Collection"}
        </p>
      </div>

    </div>
  );
}
