import React from 'react';

const StatCard = ({ label, value, isCurrency = false }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/4">
      <h4 className="text-sm text-gray-500 mb-2">{label}</h4>
      <p className={`text-xl font-semibold ${isCurrency ? 'text-green-500' : 'text-gray-900'}`}>
        {isCurrency ? `$${value.toFixed(2)}` : value}
      </p>
    </div>
  );
};

export default StatCard;
