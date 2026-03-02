'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function UnauthorizedPage() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Try to get user info from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        // Use setTimeout to avoid direct setState in effect
        setTimeout(() => setUserRole(user.role), 0);
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        {/* Error Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h1>
        <p className="text-gray-600 mb-4">
          You do not have permission to access this page. This area is restricted to administrators only.
        </p>

        {/* Debug Info */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
          <p className="text-sm text-gray-600">
            <strong>Your current role:</strong> {userRole || 'Not logged in'}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Required role: <span className="font-medium text-indigo-600">admin</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Go to Home Page
          </Link>
          
          {userRole !== 'admin' && (
            <div className="text-sm text-gray-500 p-3 bg-yellow-50 rounded-lg">
              <p className="font-medium text-yellow-700">To access admin panel:</p>
              <p className="mt-1">1. Log out from the navbar</p>
              <p>2. An admin must change your role to &quot;admin&quot; in the database</p>
              <p>3. Log in again with your credentials</p>
            </div>
          )}
        </div>

        {/* Contact Support */}
        <p className="mt-6 text-sm text-gray-500">
          If you believe this is an error, please contact support.
        </p>
      </div>
    </div>
  );
}
