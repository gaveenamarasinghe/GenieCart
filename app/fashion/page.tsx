"use client";

import { useState } from "react";
import { ShoppingCart, Star, Heart, Search, ChevronRight } from "lucide-react";
import Footer from "@/Components/Footer/footer";

export default function Fashion() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "Classic Leather Jacket",
      price: 249.99,
      rating: 4.8,
      reviews: 1800,
      category: "Men",
      image: "https://images.unsplash.com/photo-1520975918318-3d4a7a8b4d4b?w=500&q=80",
      description: "Premium leather with modern fit and timeless design.",
    },
    {
      id: 2,
      name: "Elegant Evening Dress",
      price: 199.99,
      rating: 4.7,
      reviews: 1450,
      category: "Women",
      image: "https://images.unsplash.com/photo-1520975657287-4f2e9d6a7f33?w=500&q=80",
      description: "Beautiful long evening gown perfect for any occasion.",
    },
    {
      id: 3,
      name: "Trendy Sneakers",
      price: 129.99,
      rating: 4.6,
      reviews: 2300,
      category: "Footwear",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      description: "Comfortable, lightweight sneakers for daily wear.",
    },
    {
      id: 4,
      name: "Luxury Handbag",
      price: 349.99,
      rating: 4.9,
      reviews: 950,
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
      description: "High-end leather handbag with stylish gold accents.",
    },
    {
      id: 5,
      name: "Casual Hoodie",
      price: 79.99,
      rating: 4.5,
      reviews: 1100,
      category: "Men",
      image: "https://images.unsplash.com/photo-1600180758895-2e8f4b5c4f63?w=500&q=80",
      description: "Soft cotton hoodie perfect for casual wear.",
    },
    {
      id: 6,
      name: "Floral Summer Dress",
      price: 149.99,
      rating: 4.7,
      reviews: 1320,
      category: "Women",
      image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&q=80",
      description: "Light and breezy dress for summer outings.",
    },
    {
      id: 7,
      name: "Running Shoes",
      price: 139.99,
      rating: 4.6,
      reviews: 2000,
      category: "Footwear",
      image: "https://images.unsplash.com/photo-1612440553579-51b6c61d1ff7?w=500&q=80",
      description: "High-performance running shoes for everyday training.",
    },
    {
      id: 8,
      name: "Stylish Sunglasses",
      price: 99.99,
      rating: 4.8,
      reviews: 800,
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1518546305923-d00fdf418f03?w=500&q=80",
      description: "UV-protected sunglasses with sleek design.",
    },
    {
      id: 9,
      name: "Denim Jeans",
      price: 89.99,
      rating: 4.5,
      reviews: 1750,
      category: "Men",
      image: "https://images.unsplash.com/photo-1600185366408-84a5c6f5ef09?w=500&q=80",
      description: "Comfortable and durable denim jeans for daily wear.",
    },
    {
      id: 10,
      name: "Cocktail Party Dress",
      price: 179.99,
      rating: 4.7,
      reviews: 1020,
      category: "Women",
      image: "https://images.unsplash.com/photo-1520962915850-4d9855a84c9b?w=500&q=80",
      description: "Elegant dress ideal for cocktail parties and events.",
    },
    {
      id: 11,
      name: "Leather Boots",
      price: 199.99,
      rating: 4.8,
      reviews: 980,
      category: "Footwear",
      image: "https://images.unsplash.com/photo-1611852220702-045e89e85b38?w=500&q=80",
      description: "Durable and stylish leather boots for outdoor use.",
    },
    {
      id: 12,
      name: "Chic Scarf",
      price: 49.99,
      rating: 4.6,
      reviews: 600,
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=500&q=80",
      description: "Soft, lightweight scarf to complement any outfit.",
    },
  ];

  const categories = ["All", "Men", "Women", "Footwear", "Accessories"];

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product) => setCart([...cart, product]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-3 tracking-tight">
          Fashion Collection
        </h1>
        <p className="text-lg text-pink-100 mb-8">
          Stay stylish with the latest trends
        </p>

        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
          <input
            type="text"
            placeholder="Search fashion items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-pink-300 shadow-lg"
          />
        </div>
      </section>

      {/* Category Filter */}
      <nav className="bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex space-x-3 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                selectedCategory === category
                  ? "bg-pink-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </nav>

      {/* Product Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {selectedCategory === "All"
            ? "All Fashion Items"
            : `${selectedCategory} Collection`}
        </h2>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    aria-label="Toggle Favorite"
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-md hover:scale-110 transition"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.includes(product.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-600"
                      }`}
                    />
                  </button>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 truncate">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center mb-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-sm font-medium">
                      {product.rating}
                    </span>
                    <span className="ml-2 text-gray-500 text-sm">
                      ({product.reviews.toLocaleString()} reviews)
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="flex items-center bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
                    >
                      Add <ChevronRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center text-lg">
            No products found matching your search.
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}
