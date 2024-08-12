import React, { useState } from 'react';

const ordersData = [
  // Sample data; you should replace this with actual data from your API or state
  {
    id: 1,
    photo: 'https://via.placeholder.com/150',
    name: 'Product 1',
    price: '$10.00',
    paymentMethod: 'Credit Card',
    status: 'Placed',
  },
  {
    id: 2,
    photo: 'https://via.placeholder.com/150',
    name: 'Product 2',
    price: '$20.00',
    paymentMethod: 'PayPal',
    status: 'Shipped',
  },
  {
    id: 3,
    photo: 'https://via.placeholder.com/150',
    name: 'Product 3',
    price: '$30.00',
    paymentMethod: 'Credit Card',
    status: 'Delivered',
  },
  // Add more orders as needed
];

const OrdersList = () => {
  const [orders, setOrders] = useState(ordersData);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 2;

  // Calculate pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const handleStatusChange = (id, status) => {
    const updatedOrders = orders.map(order => 
      order.id === id ? { ...order, status } : order
    );
    setOrders(updatedOrders);
  };

  const totalPages = Math.ceil(orders.length / ordersPerPage);

  return (
    <div className="p-8 w-full">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Photo</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Price</th>
              <th className="py-2 px-4 border">Payment Method</th>
              <th className="py-2 px-4 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map(order => (
              <tr key={order.id}>
                <td className="py-2 px-4 border">
                  <img src={order.photo} alt={order.name} className="w-16 h-16" />
                </td>
                <td className="py-2 px-4 border">{order.name}</td>
                <td className="py-2 px-4 border">{order.price}</td>
                <td className="py-2 px-4 border">{order.paymentMethod}</td>
                <td className="py-2 px-4 border">
                  <select 
                    value={order.status} 
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    className="p-2 border rounded"
                  >
                    <option value="Placed">Placed</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <button 
          onClick={() => setCurrentPage(currentPage - 1)} 
          disabled={currentPage === 1}
          className="p-2 border rounded bg-gray-200"
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => setCurrentPage(currentPage + 1)} 
          disabled={currentPage === totalPages}
          className="p-2 border rounded bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OrdersList;
