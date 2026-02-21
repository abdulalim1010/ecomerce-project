"use client";

import { useEffect, useState } from "react";
import TopRatedCard from "./TopRatedCard";
import ProductModal from "./ProductModal";

export default function TopRatedSection() {

  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/api/toprated")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <section className="py-20">
      
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Top Rated Products
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Discover our most loved products, carefully selected for their exceptional quality and design
          </p>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-16 h-0.5 bg-gray-300" />
            <div className="w-2 h-2 rounded-full bg-gray-400" />
            <div className="w-16 h-0.5 bg-gray-300" />
          </div>
        
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {products.map((product, index) => (
            <div 
              key={product._id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <TopRatedCard
                product={product}
                onClick={() => setSelected(product)}
              />
            </div>
          ))}

        </div>

      </div>

      {/* Modal */}
      {selected && (
        <ProductModal
          product={selected}
          onClose={() => setSelected(null)}
        />
      )}

    </section>
  );
}
