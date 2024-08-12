import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-100 bg-gray-800 text-white w-64 flex flex-col p-4 ">
      <NavLink 
        to="/admin"
        className="mb-4 p-2 hover:bg-gray-700 rounded text-white-A700"
        activeClassName="bg-gray-700"
      >
        Home Page (banner edit)
      </NavLink>
      <NavLink 
        to="/admin/orders"
        className="mb-4 p-2 hover:bg-gray-700 rounded text-white-A700"
        activeClassName="bg-gray-700"
      >
        Orders
      </NavLink>
      <NavLink 
        to="/admin/products"
        className="mb-4 p-2 hover:bg-gray-700 rounded text-white-A700"
        activeClassName="bg-gray-700"
      >
        Products
      </NavLink>
      <NavLink 
        to="/admin/categories"
        className="mb-4 p-2 hover:bg-gray-700 rounded text-white-A700"
        activeClassName="bg-gray-700"
      >
        Categories
      </NavLink>
      <NavLink 
        to="/admin/users"
        className="mb-4 p-2 hover:bg-gray-700 rounded text-white-A700"
        activeClassName="bg-gray-700"
      >
        Users
      </NavLink>
    </div>
  );
};

export default Sidebar;
