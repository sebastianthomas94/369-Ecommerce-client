import React, { useState } from "react";
import Header from "../../../components/UserComponents/Header";

const OrdersPage = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: "Product 1",
      price: "$10.00",
      status: "Delivered on 2024-06-20",
      image: "/images/product1.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$20.00",
      status: "Pending",
      image: "/images/product2.png",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$30.00",
      status: "Returned on 2024-06-15",
      image: "/images/product3.png",
    },
  ]);

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto mt-10 p-5 border border-gray-300 rounded-md">
        <h1 className="text-2xl font-bold mb-5">Orders</h1>
        <ul className="space-y-4">
          {orders.map((order) => (
            <li
              key={order.id}
              className="flex justify-between items-center p-4 border border-gray-300 rounded-md"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={order.image}
                  alt={order.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-xl font-semibold">{order.name}</h2>
                  <p className="text-gray-700">{order.price}</p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`text-sm ${
                    order.status.includes("Delivered")
                      ? "text-green-500"
                      : order.status.includes("Pending")
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {order.status}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default OrdersPage;
