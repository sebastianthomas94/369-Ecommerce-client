import React, { useState } from 'react';
import { Input } from '../../../components/UserComponents';
import Header from '../../../components/UserComponents/Header';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // You can also add code here to save the updated information to a server or database
  };

  return (
    <>
    <Header/>
        <div className="max-w-lg mx-auto mt-10 p-5 border border-gray-300 rounded-md">
      <h1 className="text-2xl font-bold mb-5">Profile</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Name:</label>
        {isEditing ? (
          <Input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            variant="fill"
            size="md"
            color="white_A700"
            className="mt-1 border border-gray-300"
          />
        ) : (
          <p className="mt-1 p-2  rounded-md">{userInfo.name}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email:</label>
        {isEditing ? (
          <Input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            variant="fill"
            size="md"
            color="white_A700"
            className="mt-1 border border-gray-300"
          />
        ) : (
          <p className="mt-1 p-2  rounded-md">{userInfo.email}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number:</label>
        {isEditing ? (
          <Input
            type="text"
            name="phoneNumber"
            value={userInfo.phoneNumber}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            variant="fill"
            size="md"
            color="white_A700"
            className="mt-1 border border-gray-300"
          />
        ) : (
          <p className="mt-1 p-2  rounded-md">{userInfo.phoneNumber}</p>
        )}
      </div>
      {isEditing ? (
        <button
          onClick={handleSaveClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Save
        </button>
      ) : (
        <button
          onClick={handleEditClick}
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
        >
          Edit
        </button>
      )}
    </div>
    </>

  );
};

export default ProfilePage;
