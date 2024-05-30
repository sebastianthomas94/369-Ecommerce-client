import React from "react";
import { Text, Heading, Img, Button } from "../../components";
import { useNavigate } from "react-router-dom";
export default function ProductCard({
  productId = "dummy",
  title = "Dummy Product",
  category = "category?",
  rating = "4.9 (98)",
  price = "$169.99",
  mrp = "$199.99",
  imageUri = "/images/dummy-product.jpeg",
  ...props
}) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${productId}`)
  };
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col gap-5`}
      onClick={handleClick}
    >
      <div className="relative h-[347px] self-center rounded-[16px] bg-gray-50 md:h-auto">
        <Img
          src={imageUri}
          alt="main image"
          className="h-[347px] w-full rounded-[16px] object-contain"
        />
        <Button
          shape="circle"
          className="absolute right-[12.00px] top-[12.00px] m-auto w-[36px] !rounded-[18px]"
        >
          <Img src="/images/productAddToCart.svg" />
        </Button>
      </div>
      <div className="flex items-start justify-evenly gap-5 self-stretch">
        <div className="flex flex-col items-start gap-3.5">
          <div className="flex flex-col items-start">
            <div className="flex self-center">
              <Heading as="h6">{title}</Heading>
            </div>
            <Text size="s" as="p">
              {category}
            </Text>
          </div>
          <div className="flex gap-1">
            <Img
              src="/images/star.svg"
              alt="rating image"
              className="h-[20px] w-[20px]"
            />
            <div className="flex">
              <Text size="s" as="p">
                {rating}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex self-start">
            <Heading as="h6">{price}</Heading>
          </div>
          <Text size="s" as="p" className="line-through">
            {mrp}
          </Text>
        </div>
      </div>
    </div>
  );
}
