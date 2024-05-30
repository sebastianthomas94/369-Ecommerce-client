import React from "react";
import { CloseSVG } from "../../assets/images";
import { Text, Img, Input } from "./..";
import { useNavigate } from "react-router-dom";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const navigate = useNavigate();

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      navigate("/shop");
    }
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
          onChange={(e) => setSearchBarValue(e)}
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
        <div className="flex w-[6%] items-center justify-center gap-[22px] self-start md:w-full">
          <a href="#">
            <Img
              src="/images/user.svg"
              alt="user button"
              className="h-[24px] w-[24px] self-end cursor-pointer"
              onClick={() => navigate("/login")}
            />
          </a>
          <div className="relative h-[34px] flex-1">
            <a href="#">
              <Img
                src="/images/cart.svg"
                alt="cart icon"
                className="absolute bottom-[0.00px] left-[0.00px] m-auto h-[24px] w-[24px] cursor-pointer"
                onClick={() => navigate("/cart")}
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
        </div>
      </div>
    </header>
  );
}
