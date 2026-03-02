'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Load cart function
  const loadCart = () => {
    const cartKey = user ? `cart_${user._id || user.email}` : 'cart_guest';
    const cartData = JSON.parse(localStorage.getItem(cartKey) || '[]');
    setCart(cartData);
    setLoading(false);
  };

  useEffect(() => {
    // Get user data
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
    }

    // Load cart
    loadCart();
  }, []);

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    
    const cartKey = user ? `cart_${user._id || user.email}` : 'cart_guest';
    localStorage.setItem(cartKey, JSON.stringify(updatedCart));
    setCart(updatedCart);
    
    // Trigger cart update event
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    
    const cartKey = user ? `cart_${user._id || user.email}` : 'cart_guest';
    localStorage.setItem(cartKey, JSON.stringify(updatedCart));
    setCart(updatedCart);
    
    // Trigger cart update event
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const clearCart = () => {
    const cartKey = user ? `cart_${user._id || user.email}` : 'cart_guest';
    localStorage.removeItem(cartKey);
    setCart([]);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = async () => {
    if (!user) {
      router.push('/login?redirect=/cart');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }

    try {
      const orderData = {
        userId: user._id || user.email,
        products: cart.map(item => ({
          productId: item.productId,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        total: getSubtotal(),
        status: 'pending',
        createdAt: new Date()
      };

      const res = await fetch('/api/admin/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });

      const data = await res.json();

      if (data.success) {
        alert('Order placed successfully!');
        clearCart();
        router.push('/orders');
      } else {
        alert('Failed to place order: ' + data.error);
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

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-16">
          <svg className="w-24 h-24 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <p className="text-xl text-gray-500 mb-4">Your cart is empty</p>
          <Link 
            href="/product" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Price</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Quantity</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Total</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                            <img 
                              src={item.image || '/file.svg'} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-indigo-600 font-semibold">৳ {item.price?.toLocaleString()}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button 
                            onClick={() => updateQuantity(index, item.quantity - 1)}
                            className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="w-12 text-center font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(index, item.quantity + 1)}
                            className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="font-bold text-indigo-600">৳ {(item.price * item.quantity).toLocaleString()}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={() => removeFromCart(index)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className="px-6 py-4 border-t border-gray-200">
                <button 
                  onClick={clearCart}
                  className="text-sm text-red-600 hover:text-red-900"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">৳ {getSubtotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-lg text-indigo-600">৳ {getSubtotal().toLocaleString()}</span>
                </div>
              </div>

              {!user && (
                <p className="text-sm text-gray-500 mb-4">
                  Please login to place an order
                </p>
              )}

              <button 
                onClick={handleCheckout}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition-colors"
              >
                {user ? 'Proceed to Checkout' : 'Login to Checkout'}
              </button>

              <Link 
                href="/product"
                className="block text-center mt-4 text-indigo-600 hover:text-indigo-700"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
