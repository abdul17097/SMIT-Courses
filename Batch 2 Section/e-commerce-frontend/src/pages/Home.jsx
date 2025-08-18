// src/pages/Home.jsx
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://source.unsplash.com/400x300/?electronics",
  },
  {
    id: 2,
    name: "Fashion",
    image: "https://source.unsplash.com/400x300/?fashion",
  },
  {
    id: 3,
    name: "Home & Living",
    image: "https://source.unsplash.com/400x300/?interior",
  },
];

const featuredProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 99,
    image: "https://source.unsplash.com/400x400/?headphones",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 149,
    image: "https://source.unsplash.com/400x400/?watch",
  },
  {
    id: 3,
    title: "Sneakers",
    price: 89,
    image: "https://source.unsplash.com/400x400/?sneakers",
  },
  {
    id: 4,
    title: "Gaming Laptop",
    price: 1299,
    image: "https://source.unsplash.com/400x400/?laptop",
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Shop the Latest Trends Online
            </h1>
            <p className="text-lg mb-6 text-gray-300">
              Discover top products at the best prices. Fast delivery, secure
              checkout, and exclusive deals just for you.
            </p>
            <Link
              to="/products"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Shop Now
            </Link>
          </div>
          <img
            src="https://source.unsplash.com/600x500/?shopping,store"
            alt="Hero banner"
            className="mt-10 md:mt-0 rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.name}`}
              className="relative group overflow-hidden rounded-xl shadow hover:shadow-lg"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl shadow hover:shadow-lg p-4 flex flex-col"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-gray-600">${p.price}</p>
                <button className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Get the Best Deals Delivered to Your Inbox
        </h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter and never miss out on exclusive offers.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
          />
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
