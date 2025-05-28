'use client'; // Needed for useState

import React, { useState } from 'react';
import VittorioHeading from '../../components/VittorioHeading';
import ProductBox from '../../components/ProductBox';

// Dummy product data
const products = [
  {
    id: 1,
    title: 'Late Harvest Zinfandel (2022)',
    price: '$24.95 - 750ml',
    imageUrl: '/img/zinfandel.png', // Replace with actual or placeholder image path
  },
  {
    id: 2,
    title: 'Reisling (2022)',
    price: '$24.95 - 750ml',
    imageUrl: '/img/reisling.png', // Replace with actual or placeholder image path
  },
  {
    id: 3,
    title: 'Cabernet Sauvignon (2021)',
    price: '$29.95 - 750ml',
    imageUrl: '/img/cabernet.png', // Replace with actual or placeholder image path
  },
];

export default function TheCollectionPage() {
  const [cartItems, setCartItems] = useState<number[]>([]); // State to hold IDs of items in cart

  const handleAddToCart = (productId: number) => {
    setCartItems(prevItems => {
      if (!prevItems.includes(productId)) {
        console.log(`Added product ${productId} to cart`); // Simple console log for now
        return [...prevItems, productId];
      }
      console.log(`Product ${productId} already in cart`);
      return prevItems; // Avoid adding duplicates
    });
    // In a real app, you'd update global state/context or make an API call here
  };

  return (
    <main className="relative min-h-screen w-full p-6 md:p-12">
      {/* Desktop Background */}
      <div
        className="absolute inset-0 z-0 hidden md:block" // Show only on md and larger
        style={{
          backgroundImage: 'url("/img/bkg.png")', // Desktop background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Mobile Background */}
      <div
        className="absolute inset-0 z-0 md:hidden" // Show only below md
        style={{
          backgroundImage: 'url("/img/bkg-mobile.png")', // Mobile background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Dark Overlay - Applied over both backgrounds */}
      <div className="absolute inset-0 z-0 bg-black opacity-20" />

      {/* Content Container */}
      <div className="relative z-10">
        <VittorioHeading />
        {/* You might want the specific "Our Collection" title here instead of the full logo */}
        <h1 className="text-center text-4xl md:text-6xl text-[#FFEFCF] mb-12 mt-8 md:mt-0">
          Our Collection
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {products.map(product => (
            <ProductBox
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Simple cart display for debugging/demonstration */}
        <div className="mt-12 text-center text-[#FFEFCF]">
          <h3 className="text-2xl mb-2">Cart Items (IDs):</h3>
          <p>{cartItems.length > 0 ? cartItems.join(', ') : 'Cart is empty'}</p>
        </div>
      </div>
    </main>
  );
}
