import React, { useState } from "react";
import { Img, Text } from "..";
export default function Quantity({ ...props }) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrement = () => {
    if (quantity > 0) setQuantity((prev) => prev - 1);
  };

  return (
    <div
      {...props}
      className={`${props.className} flex justify-evenly items-center w-[28%] gap-4 py-2 bg-gray-50 rounded-[20px]`}
    >
      <div
        className="flex flex-col items-center rounded-[12px] border border-solid border-gray-200 bg-white-A700_87 p-[7px] opacity-0.5 cursor-pointer w-auto"
        onClick={decrement}
      >
        <Img
          src="/images/minus-icon.svg"
          alt="decrement icon"
          className="h-[10px] w-[10px] "
        />
      </div>
      <div className="flex flex-col pt-px">
        <Text as="p" className="!font-medium">
          {quantity}
        </Text>
      </div>
      <div
        className="flex flex-col items-center rounded-[12px] border border-solid border-gray-200 bg-white-A700_87 p-[7px] cursor-pointer"
        onClick={increment}
      >
        <Img
          src="/images/plus-icon.svg"
          alt="increment icon"
          className="h-[10px] w-[10px] "
        />
      </div>
    </div>
  );
}
