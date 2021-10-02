import React from 'react';
import Image from 'next/image';

const CartCard = ({ product }) => {
  const { name, prices, cartQuantity, image_url } = product;
  return (
    <li className="py-6 flex">
      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
        <Image
          className="w-full h-full object-center object-cover"
          src={image_url}
          width={200}
          height={200}
          alt={name}
        />
      </div>
      <div className="ml-4 flex-1 flex flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{name}</a>
            </h3>
            <p className="ml-4">{prices[0].price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Salmon</p>
        </div>
        <div className="flex-1 flex items-end justify-between text-sm">
          <p className="text-gray-500">Qty {cartQuantity}</p>
          <div className="flex">
            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartCard;
