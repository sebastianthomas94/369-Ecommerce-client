import React, { useState } from "react";
import Header from "../../../components/UserComponents/Header";

const AddressPage = () => {
  const [addresses, setAddresses] = useState([
    { id: 1, name: "Home", details: "123 Main St, Anytown, USA" },
    { id: 2, name: "Office", details: "456 Office Rd, Worktown, USA" },
  ]);

  const [newAddress, setNewAddress] = useState({ name: "", details: "" });
  const [isEditing, setIsEditing] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({ ...newAddress, [name]: value });
  };

  const handleAddAddress = () => {
    if (newAddress.name && newAddress.details) {
      setAddresses([...addresses, { id: addresses.length + 1, ...newAddress }]);
      setNewAddress({ name: "", details: "" });
    }
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  const handleEditAddress = (id) => {
    const address = addresses.find((address) => address.id === id);
    setNewAddress({ name: address.name, details: address.details });
    setIsEditing(id);
  };

  const handleSaveAddress = () => {
    setAddresses(
      addresses.map((address) =>
        address.id === isEditing ? { ...address, ...newAddress } : address
      )
    );
    setIsEditing(null);
    setNewAddress({ name: "", details: "" });
  };

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto mt-10 p-5 border border-gray-300 rounded-md">
        <h1 className="text-2xl font-bold mb-5">Addresses</h1>
        <ul className="space-y-4 mb-6">
          {addresses.map((address) => (
            <li
              key={address.id}
              className="flex justify-between items-center p-4 border border-gray-300 rounded-md"
            >
              <div>
                <h2 className="text-xl font-semibold">{address.name}</h2>
                <p className="text-gray-700">{address.details}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditAddress(address.id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteAddress(address.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <h2 className="text-xl font-bold mb-2">
            {isEditing ? "Edit Address" : "Add Address"}
          </h2>
          <div className="flex flex-col space-y-4 mb-4">
            <input
              type="text"
              name="name"
              value={newAddress.name}
              onChange={handleInputChange}
              placeholder="Address Name"
              className="p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="details"
              value={newAddress.details}
              onChange={handleInputChange}
              placeholder="Address Details"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            onClick={isEditing ? handleSaveAddress : handleAddAddress}
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            {isEditing ? "Save" : "Add"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AddressPage;
