import React from "react";
import Header from "../../../components/AdminComponents/Header";
import Sidebar from "../../../components/AdminComponents/Sidebar";
import OrdersList from "../../../components/AdminComponents/Orders";

const Orders = () => {
  return (
    <div>
      <Header />
      <div className="flex h-screen">
        <Sidebar />
        <OrdersList />
      </div>
    </div>
  );
};

export default Orders;
