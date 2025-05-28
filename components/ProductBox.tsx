import React from 'react';
import Image from 'next/image';

interface ProductBoxProps {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
  onAddToCart: (id: number) => void;
}

const ProductBox: React.FC<ProductBoxProps> = ({
  id,
  title,
  price,
  onAddToCart,
}) => {
  return (
    <div className="flex flex-col items-center bg-[#EAE0D5]/80 p-4 rounded-lg shadow-md text-center backdrop-blur-sm">
      <div className="relative w-full h-64 mb-4">
        <Image
          src="/img/wine-demo.png"
          alt={title}
          layout="fill"
          objectFit="contain"
          className="rounded"
        />
      </div>
      <h3 className="text-xl font-semibold text-[#32080A] mb-1">{title}</h3>
      <p className="text-md text-[#5C4033] mb-3">{price}</p>
      <button
        onClick={() => onAddToCart(id)}
        className="flex items-center justify-center gap-2 rounded-full bg-[#32080A] px-5 py-2 text-sm text-white transition-transform hover:scale-105 hover:cursor-pointer w-full max-w-[150px]"
      >
        <span>Add to cart</span>
        <Image
          src="/img/cart.svg" // Assuming you have a white cart icon
          alt="Cart"
          width={16}
          height={16}
          className="object-contain"
        />
      </button>
    </div>
  );
};

export default ProductBox;
