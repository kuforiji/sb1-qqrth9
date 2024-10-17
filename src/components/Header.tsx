import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <ShoppingBag className="h-8 w-8 text-indigo-600 mr-2" />
          <span className="text-xl font-semibold text-gray-800">ShopForGood</span>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-4 mr-4">
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Products</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Causes</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">About</a></li>
          </ul>
          <div className="relative">
            <ShoppingBag className="h-6 w-6 text-indigo-600" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemsCount}
              </span>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;