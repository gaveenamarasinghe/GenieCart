'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Heart,
  Menu, 
  X, 
  ChevronDown,
  Bot
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [wishlistCount, setWishlistCount] = useState(7);
  
  const userMenuRef = useRef<HTMLDivElement>(null);

  const categories = [
    { name: 'Electronics', href: '/electronics' },
    { name: 'Fashion', href: '/fashion' },
    { name: 'Home & Garden', href: '/home-garden' },
    { name: 'Sports', href: '/sports' },
    { name: 'Books', href: '/books' },
    { name: 'Beauty', href: '/beauty' }
  ];

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
       
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>Free shipping on orders over $50!</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/help" className="hover:underline">Help</Link>
              <span>|</span>
              <Link href="/signin" className="hover:underline">Sign In</Link>
            </div>
          </div>
        </div>

       
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
          
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ShopAI
              </span>
            </Link>

          
            <div className="hidden lg:flex items-center space-x-8">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
                >
                  {category.name}
                </Link>
              ))}
            </div>

            
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-4 pr-12 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

           
            <div className="flex items-center space-x-4">
              
              <Link
                href="/ai-assistant"
                className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
                title="AI Shopping Assistant"
              >
                <Bot className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></span>
              </Link>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                <Heart className="w-6 h-6" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Shopping Cart */}
              <Link
                href="/cart"
                className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* User Menu */}
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-1 p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
                >
                  <User className="w-6 h-6" />
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                      My Profile
                    </Link>
                    <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                      My Orders
                    </Link>
                    <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                      Settings
                    </Link>
                    <hr className="my-2" />
                    <Link href="/logout" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                      Sign Out
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-4 pr-12 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-4">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="block text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;