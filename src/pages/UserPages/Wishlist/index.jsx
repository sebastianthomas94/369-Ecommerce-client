import React, { useState } from "react";
import Header from "../../../components/UserComponents/Header";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Product 1",
      price: "$10.00",
      image: "/images/product1.png",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$20.00",
      image: "/images/product2.png",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$30.00",
      image: "/images/product3.png",
    },
  ]);

  const addToCart = (product) => {
    // Logic to add product to cart
    console.log(`${product.name} added to cart`);
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter((product) => product.id !== productId));
  };

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto mt-10 p-5 border border-gray-300 rounded-md">
        <h1 className="text-2xl font-bold mb-5">Wishlist</h1>
        <ul className="space-y-4">
          {wishlist.map((product) => (
            <li
              key={product.id}
              className="flex justify-between items-center p-4 border border-gray-300 rounded-md"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="text-gray-700">{product.price}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => addToCart(product)}
                  className="px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default WishlistPage;
