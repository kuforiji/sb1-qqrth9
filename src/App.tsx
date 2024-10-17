import React, { useState } from 'react';
import Header from './components/Header';
import ExploreProducts from './components/ExploreProducts';
import ShoppingCart from './components/ShoppingCart';
import SupportCause from './components/SupportCause';
import DynamicSlider from './components/DynamicSlider';
import Footer from './components/Footer';

interface CartItem {
  name: string;
  quantity: number;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: string) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.name === item);
      if (existingItem) {
        return prevItems.map(i => 
          i.name === item ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { name: item, quantity: 1 }];
    });
  };

  const removeFromCart = (item: string) => {
    setCartItems(prevItems => prevItems.filter(i => i.name !== item));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Shop for a Cause</h1>
        <DynamicSlider />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <ExploreProducts addToCart={addToCart} />
          <ShoppingCart items={cartItems} removeFromCart={removeFromCart} />
          <SupportCause />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;