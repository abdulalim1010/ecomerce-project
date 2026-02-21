"use client";

export default function ProductModal({ product, onClose }) {

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white p-6 rounded-lg w-[800px] relative">

        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl"
        >
          ✕
        </button>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <img
              src={product.images.front}
              className="rounded-lg mb-4"
            />

            <img
              src={product.images.back}
              className="rounded-lg"
            />
          </div>

          <div>

            <h2 className="text-2xl font-bold">
              {product.name}
            </h2>

            <p className="text-xl text-red-500">
              ${product.price}
            </p>

            <p className="mt-4">
              {product.description}
            </p>

            <div className="flex gap-4 mt-6">

              <button className="bg-black text-white px-6 py-2 rounded">
                Buy Now
              </button>

              <button className="border px-6 py-2 rounded">
                Add to Cart
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}