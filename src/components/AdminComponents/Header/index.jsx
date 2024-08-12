import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white-A700">Admin</h1>
      <button className="bg-red-500 hover:bg-red-700 text-white-A700 text-white font-bold py-2 px-4 rounded">
        Logout
      </button>
    </header>
  );
};

export default Header;
