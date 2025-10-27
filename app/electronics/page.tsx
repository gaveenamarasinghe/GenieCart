"use client";

import { useState } from 'react';
import { ShoppingCart, Star, Heart, Search, Menu, User, ChevronRight } from 'lucide-react';
import Footer from '@/Components/Footer/footer';

export default function Electronics() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299.99,
      rating: 4.8,
      reviews: 1250,
      category: 'Audio',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
      description: 'High-quality noise cancellation with premium sound'
    },
    {
      id: 2,
      name: 'Smart Watch Pro',
      price: 399.99,
      rating: 4.6,
      reviews: 890,
      category: 'Wearables',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
      description: 'Advanced fitness tracking and health monitoring'
    },
    {
      id: 3,
      name: 'Professional Camera',
      price: 1299.99,
      rating: 4.9,
      reviews: 2100,
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80',
      description: 'Mirrorless camera with 4K video capability'
    },
    {
      id: 4,
      name: 'Wireless Earbuds',
      price: 179.99,
      rating: 4.7,
      reviews: 3400,
      category: 'Audio',
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&q=80',
      description: 'True wireless with active noise cancellation'
    },
    {
      id: 5,
      name: 'Gaming Laptop',
      price: 1899.99,
      rating: 4.8,
      reviews: 670,
      category: 'Computers',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80',
      description: 'High-performance gaming with RTX graphics'
    },
    {
      id: 6,
      name: 'Smartphone Pro Max',
      price: 1099.99,
      rating: 4.9,
      reviews: 5600,
      category: 'Mobile',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80',
      description: 'Latest flagship with advanced camera system'
    },
    {
      id: 7,
      name: 'Tablet Ultra',
      price: 799.99,
      rating: 4.7,
      reviews: 1890,
      category: 'Tablets',
      image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&q=80',
      description: 'Large display perfect for work and entertainment'
    },
    {
      id: 8,
      name: 'Portable Speaker',
      price: 149.99,
      rating: 4.6,
      reviews: 2300,
      category: 'Audio',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80',
      description: 'Waterproof with 360° sound and long battery life'
    }
  ];

  const categories = ['All', 'Audio', 'Wearables', 'Photography', 'Computers', 'Mobile', 'Tablets'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Premium Electronics</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">Discover the latest in technology</p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex space-x-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </h2>
          <p className="text-gray-600 mt-2">{filteredProducts.length} products found</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(product.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium text-gray-900">
                      {product.rating}
                    </span>
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    ({product.reviews.toLocaleString()} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
                  >
                    Add
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your search.</p>
          </div>
        )}
      </main>
      <Footer/>
    </div>
  );
}