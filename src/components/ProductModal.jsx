"use client";

export default function ProductModal({ product, onClose }) {
  // Fallback placeholder image (same style as TopRatedCard)
  const placeholderImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='320' viewBox='0 0 400 320'%3E%3Crect fill='%23e5e7eb' width='400' height='320'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='20' x='50%25' y='50%25' text-anchor='middle'%3ENo Image%3C/text%3E%3C/svg%3E";

  const primaryImage =
    product?.images?.front ||
    product?.image ||
    product?.imageUrl ||
    product?.thumbnail ||
    "";

  const secondaryImage =
    product?.images?.back ||
    product?.secondaryImage ||
    product?.image ||
    product?.imageUrl ||
    "";

  const frontImage = primaryImage || placeholderImage;
  const backImage = secondaryImage || primaryImage || placeholderImage;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[800px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl"
          aria-label="Close product details"
        >
          ✕
        </button>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <img
              src={frontImage}
              alt={product?.name || "Product front view"}
              className="rounded-lg mb-4 w-full object-cover max-h-72"
              onError={(e) => {
                e.target.src = placeholderImage;
              }}
            />

            <img
              src={backImage}
              alt={product?.name ? `${product.name} back view` : "Product back view"}
              className="rounded-lg w-full object-cover max-h-72"
              onError={(e) => {
                e.target.src = placeholderImage;
              }}
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold">{product?.name}</h2>

            <p className="text-xl text-red-500 mt-2">
              {product?.price != null ? `$${product.price}` : "Price not available"}
            </p>

            <p className="mt-4 text-gray-700">
              {product?.description || "No description available for this product."}
            </p>

            <div className="flex gap-4 mt-6">
              <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-900 transition">
                Buy Now
              </button>

              <button className="border border-gray-300 px-6 py-2 rounded hover:bg-gray-100 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}