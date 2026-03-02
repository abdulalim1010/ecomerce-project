'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check user authentication
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
    }

    // Fetch product
    if (params.id) {
      fetchProduct(params.id);
    }
  }, [params.id]);

  const fetchProduct = async (productId) => {
    try {
      const res = await fetch(`/api/product/${productId}`);
      if (res.ok) {
        const data = await res.json();
        setProduct(data);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Error fetching product:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const getImageSrc = () => {
    if (!product) return '/file.svg';
    return (
      product.image ||
      product.images?.front ||
      product.imageUrl ||
      product.thumbnail ||
      '/file.svg'
    );
  };

  const handleAddToCart = async () => {
    if (!user) {
      router.push('/login?redirect=/product/' + params.id);
      return;
    }

    // Get existing cart from localStorage or create new one
    const cartKey = `cart_${user._id || user.email}`;
    let cart = JSON.parse(localStorage.getItem(cartKey) || '[]');

    // Check if product already in cart
    const existingIndex = cart.findIndex(item => item.productId === params.id);
    
    if (existingIndex >= 0) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        productId: params.id,
        name: product.name,
        price: product.price,
        image: getImageSrc(),
        quantity: 1
      });
    }

    localStorage.setItem(cartKey, JSON.stringify(cart));
    alert('Product added to cart!');
    
    // Trigger cart update event
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleBuyNow = async () => {
    if (!user) {
      router.push('/login?redirect=/product/' + params.id);
      return;
    }

    // Create order directly
    try {
      const orderData = {
        userId: user._id || user.email,
        products: [{
          productId: params.id,
          name: product.name,
          price: product.price,
          quantity: 1
        }],
        total: product.price,
        status: 'pending',
        createdAt: new Date()
      };

      const res = await fetch('/api/admin/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });

      if (res.ok) {
        alert('Order placed successfully! You can track it in your orders.');
        router.push('/orders');
      } else {
        alert('Failed to place order. Please try again.');
      }
    } catch (err) {
      console.error('Error placing order:', err);
      alert('Failed to place order. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link
          href="/product"
          className="text-indigo-600 hover:underline mt-4 inline-block"
        >
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <Link
        href="/product"
        className="text-indigo-600 hover:underline mb-6 inline-block"
      >
        ← Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8 mt-4">
        <div className="relative h-96 rounded-xl overflow-hidden bg-gray-100">
          <img
            src={getImageSrc()}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = '/file.svg';
            }}
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            {product.name}
          </h1>

          <p className="text-2xl text-indigo-600 font-bold mb-4">
            ৳ {product.price?.toLocaleString()}
          </p>

          <p className="text-gray-600 mb-6">
            {product.description || "No description available."}
          </p>

          <div className="flex gap-4">
            <button 
              onClick={handleAddToCart}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition btn-primary"
            >
              Add to Cart
            </button>
            <button 
              onClick={handleBuyNow}
              className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition"
            >
              Buy Now
            </button>
          </div>

          {!user && (
            <p className="text-sm text-gray-500 mt-4">
              Please login to save your cart and track orders.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
