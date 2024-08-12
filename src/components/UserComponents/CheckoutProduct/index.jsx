import React from "react";
import { Text, Heading, Img } from "./..";
import QuantityButton from "../QuantityButton";
export default function CheckoutProduct({
  productname = "Dummy product",
  productsize = "One size",
  productquantity = "1",
  price = "$169.99",
  price1 = "$199.99",
  image = "/images/dummy-product.jpeg",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex md:flex-col items-center pt-[23px] gap-6 sm:pt-5 border-gray-200 border-t border-solid`}
    >
      <div className="w-[16%] rounded-[12px] bg-gray-100 md:w-full">
        <Img
          src={image}
          alt="product image"
          className="h-[108px] w-full rounded-[12px] object-cover md:h-auto"
        />
      </div>
      <div className="flex flex-1 items-center justify-between md:self-stretch">
        <div className="flex flex-1 flex-col items-start gap-[19px] sm:self-stretch">
          <div className="flex flex-col items-start gap-[3px]">
            <Heading as="h6">{productname}</Heading>
          </div>
          <div className="flex w-[26%] md:w-full">
            <div className="flex w-full justify-evenly gap-4 rounded-[20px] bg-gray-50 py-2">
            <QuantityButton />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <Heading as="h6">{price}</Heading>
          <Text size="s" as="p" className="line-through">
            {price1}
          </Text>
        </div>
      </div>
    </div>
  );
}
