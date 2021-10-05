import React from 'react';
import { connect } from 'react-redux';
import Image from 'next/image';
import { addProductToCart } from '../../redux/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

const index = ({ product, currency }) => {
  const dispatch = useDispatch();
  const { id, name, image_url, prices } = product;

  const addToCart = () => {
    dispatch(addProductToCart(product));
  };

  // console.log(key);
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-sm mx-auto mt-5">
        <Link href={`/product/${id}`}>
          <Image
            className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            src={image_url}
            alt={name}
            width={450}
            height={380}
          />
        </Link>
        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800 z-10">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {name}
          </h3>
          <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="font-bold text-gray-800 dark:text-gray-200">{`${prices[currency].currency} ${prices[currency].price}`}</span>
            <button
              onClick={() => addToCart()}
              className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


export default index;
