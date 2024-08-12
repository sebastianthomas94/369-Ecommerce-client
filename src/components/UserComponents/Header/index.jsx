import React, { useRef, useState, useEffect } from "react";
import { CloseSVG } from "../../../assets/images";
import { Text, Img, Input } from "./..";
import { useNavigate } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch";
import useOutsideAlerter from "../../../Hooks/OutsideClickAlerter";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [isB2B, setIsB2B] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  useOutsideAlerter(dropdownRef, () => setIsDropdownVisible(false));

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      // Handle search
    }
  };

  const toggleMode = () => {
    setIsB2B(!isB2B);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center py-6 sm:py-5 border-gray-200 border-b border-solid bg-white-A700`}
    >
      <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
        <Img
          src="/images/1.png"
          alt="header logo"
          className="h-[46px] w-[119px] object-contain cursor-pointer"
          onClick={() => navigate("/")}
        />
        <Input
          color="gray_50_01"
          name="Search Bar"
          placeholder={`Search in products...`}
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e.target.value)}
          onKeyDown={handleEnter}
          prefix={
            <Img
              src="/images/search.svg"
              alt="svg"
              className="h-[20px] w-[20px] cursor-pointer"
              onClick={() => navigate("/shop")}
            />
          }
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG
                onClick={() => setSearchBarValue("")}
                fillColor="#4b5563ff"
              />
            ) : null
          }
          className="w-[31%] gap-2.5 rounded-[26px] text-blue_gray-700 md:w-full sm:px-5"
        />
        <div className="flex items-center">
          <span className="mr-2">{isB2B ? "B2B" : "B2C"}</span>
          <ToggleSwitch isOn={isB2B} handleToggle={toggleMode} />
        </div>
        <div className="relative flex w-[6%] items-center justify-center gap-[22px] self-start md:w-full">
          {isLoggedIn ? (
            <>
              <a href="#" onClick={toggleDropdown}>
                <Img
                  src="/images/user.svg"
                  alt="user button"
                  className="h-[24px] w-[24px] self-end cursor-pointer"
                />
              </a>
              {isDropdownVisible && (
                <div
                  ref={dropdownRef}
                  className="absolute top-10 right-0 mt-2 w-48 bg-white-A700 border border-gray-200 rounded-md shadow-lg z-50"
                >
                  <ul className="py-1">
                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/wishlist"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/addresses"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Addresses
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              <div
                className="relative h-[34px] flex-1 cursor-pointer"
                onClick={() => navigate("/cart")}
              >
                <a href="#">
                  <Img
                    src="/images/cart.svg"
                    alt="cart icon"
                    className="absolute bottom-[0.00px] left-[0.00px] m-auto h-[24px] w-[24px] cursor-pointer"
                  />
                </a>
                <Text
                  size="xs"
                  as="p"
                  className="absolute right-[0.00px] top-[0.00px] m-auto flex h-[20px] w-[20px] items-center justify-center rounded-[10px] bg-light_blue-600 text-center !text-white-A700"
                >
                  1
                </Text>
              </div>
            </>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
