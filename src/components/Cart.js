import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemList } from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items); 
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">🛒 Cart Items</h1>

      <div className="text-right mb-4">
        <button
          className="px-5 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition duration-200 disabled:opacity-50"
          onClick={handleClearCart}
          disabled={cartItems.length === 0}
        >
          Clear Cart
        </button>
      </div>

      {cartItems.length === 0 ? (
        <h2 className="text-xl text-center text-gray-600 mt-8">Go to the restaurant and order some food 😋</h2>
      ) : (
        <ItemList items={cartItems} />
      )}
    </div>
  );
};

export default Cart;
