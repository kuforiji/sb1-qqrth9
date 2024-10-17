import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">ShopForGood</h3>
            <p className="text-sm">Making a difference, one purchase at a time.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400">Our Causes</a></li>
              <li><a href="#" className="hover:text-indigo-400">How It Works</a></li>
              <li><a href="#" className="hover:text-indigo-400">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
            <p className="text-sm mb-2">Subscribe to our newsletter for updates on new products and causes.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="px-3 py-2 text-gray-700 rounded-l-lg focus:outline-none" />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 ShopForGood. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for a better world
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;