import React, { useState } from 'react';
import { Search, ShoppingBag } from 'lucide-react';

interface ExploreProductsProps {
  addToCart: (item: string) => void;
}

const ExploreProducts: React.FC<ExploreProductsProps> = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Clothing', 'Electronics', 'Home Goods'];
  const featuredItems = [
    { name: 'Eco-friendly T-shirt', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { name: 'Solar Power Bank', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { name: 'Recycled Throw Pillow', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Step 1: Explore Products</h2>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-indigo-100"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-2">Featured Items</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {featuredItems.map((item) => (
            <div key={item.name} className="relative group">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => addToCart(item.name)}
                  className="bg-white text-indigo-600 px-3 py-2 rounded-lg flex items-center"
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add to Cart
                </button>
              </div>
              <p className="mt-2 text-sm font-medium text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreProducts;