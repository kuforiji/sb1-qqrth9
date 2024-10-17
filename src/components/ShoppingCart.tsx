import React from 'react';
import { ShoppingCart as CartIcon, Trash2 } from 'lucide-react';

interface CartItem {
  name: string;
  quantity: number;
}

interface ShoppingCartProps {
  items: CartItem[];
  removeFromCart: (item: string) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ items, removeFromCart }) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Step 2: Fill Your Cart</h2>
      <div className="flex items-center justify-between mb-4">
        <CartIcon className="h-6 w-6 text-indigo-600" />
        <span className="text-lg font-medium">{totalItems} item{totalItems !== 1 ? 's' : ''}</span>
      </div>
      {items.length > 0 ? (
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.name} className="flex justify-between items-center">
              <span>{item.name} (x{item.quantity})</span>
              <button
                onClick={() => removeFromCart(item.name)}
                className="text-red-500 hover:text-red-700"
                aria-label={`Remove ${item.name} from cart`}
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">Your cart is empty</p>
      )}
      <button
        className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={items.length === 0}
      >
        Proceed to Checkout
      </button>
    </section>
  );
};

export default ShoppingCart;