// src/components/snacks/SnackCard.jsx
import React from 'react';

const SnackCard = ({ snack, onOrder }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-bold">{snack.name}</h3>
      <p className="text-gray-600">Price: ₹{snack.price}</p>
      <p className="text-sm text-gray-500">Orders: {snack.ordersCount}</p>
      <button 
        onClick={() => onOrder(snack)}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Order Now
      </button>
    </div>
  );
};

export default SnackCard;