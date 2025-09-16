import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';

const Home = () => {
  // Sample product data
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 149.99,
      originalPrice: 199.99,
      image: "/api/placeholder/300/300",
      rating: 4.5,
      reviews: 128,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 299.99,
      originalPrice: 399.99,
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 89,
      badge: "New"
    },
    {
      id: 3,
      name: "Premium Coffee Maker",
      price: 89.99,
      originalPrice: 129.99,
      image: "/api/placeholder/300/300",
      rating: 4.6,
      reviews: 156,
      badge: "Sale"
    },
    {
      id: 4,
      name: "Gaming Mechanical Keyboard",
      price: 179.99,
      originalPrice: 229.99,
      image: "/api/placeholder/300/300",
      rating: 4.7,
      reviews: 203,
      badge: "Popular"
    }
  ];

  const categories = [
    { name: "Electronics", image: "/ele.png", count: "1,234 items" },
    { name: "Fashion", image: "/fash.png", count: "2,567 items" },
    { name: "Home & Garden", image: "/hg.png", count: "3,891 items" },
    { name: "Sports", image: "/sp.png", count: "1,678 items" },
    { name: "Books", image: "/book.png", count: "4,523 items" },
    { name: "Beauty", image: "/be.png", count: "2,345 items" }
  ];

  const ProductCard = ({ product }: { product: any }) => (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      {product.badge && (
        <span className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
          {product.badge}
        </span>
      )}
      
      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
            <Eye className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-purple-600">${product.price}</span>
            <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 group">
          <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform" />
          Add to Cart
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/90 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="max-w-2xl text-white">
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Discover Amazing Products with
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> AI Power</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Shop smarter with our intelligent recommendations and find exactly what you need
              </p>
              <div className="flex gap-4">
                <Link href="/shop">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Shop Now
                  </button>
                </Link>
                <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                  Learn More
                </button>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:ml-8">
              <Image
                src="/hero.svg"
                alt="Hero Image"
                width={700}
                height={400}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Find what you're looking for in our diverse collection</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={`/category/${category.name.toLowerCase()}`}>
                <div className="group text-center cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-4 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={200}
                      height={200}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">{category.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 z-10"></div>
            <Image
              src="/api/placeholder/1200/400"
              alt="Promotion Banner"
              width={1200}
              height={400}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  Summer Sale
                </h2>
                <p className="text-xl md:text-2xl mb-6">Up to 70% off on selected items</p>
                <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                  Shop Sale
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Handpicked items just for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-xl mb-8">Get exclusive deals and updates delivered to your inbox</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl text-gray-800 font-medium focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ShopAI
              </h3>
              <p className="text-gray-400 mb-4">
                Your intelligent shopping companion for the best deals and products.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/electronics" className="hover:text-white transition-colors">Electronics</Link></li>
                <li><Link href="/fashion" className="hover:text-white transition-colors">Fashion</Link></li>
                <li><Link href="/home" className="hover:text-white transition-colors">Home & Garden</Link></li>
                <li><Link href="/sports" className="hover:text-white transition-colors">Sports</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/returns" className="hover:text-white transition-colors">Returns</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ShopAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;