"use client";

import Link from "next/link";

function ProductCard({ id, name, price, image, images, imageUrl, thumbnail }) {
  const getImageSrc = () => {
    return (
      image ||
      images?.front ||
      imageUrl ||
      thumbnail ||
      "/file.svg"
    );
  };

  const src = getImageSrc();

  return (
    <div
      key={id}
      className="bg-white p-4 rounded-xl shadow card-hover"
    >
      <div className="w-full h-48 overflow-hidden rounded">
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/file.svg";
          }}
        />
      </div>

      <h2 className="text-lg font-semibold mt-3 text-gray-800">
        {name}
      </h2>

      <p className="text-indigo-600 font-bold mt-1">
        ৳ {price}
      </p>

      <Link href={`/product/${id}`}>
        <button className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg btn-primary">
          View Details
        </button>
      </Link>
    </div>
  );
}

export default ProductCard;
