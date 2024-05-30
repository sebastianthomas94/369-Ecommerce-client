import React from "react";
import { Helmet } from "react-helmet";
import { Img, Input, Text, Heading, Button } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { CheckBox } from "../../components/CheckBox";

import ProductCard from "../../components/ProductCard";
import { RadioGroup } from "../../components/RadioGroup";
import { Radio } from "../../components/Radio";

const data = [
  {
    headingtext: "Black Automatic Watch",
    accessoriestext: "Accessories",
    ratingtext: "4.9 (98)",
    priceheading: "$169.99",
    pricetext: "$199.99",
  },
  {
    headingtext: "Black Automatic Watch",
    accessoriestext: "Accessories",
    ratingtext: "4.9 (98)",
    priceheading: "$169.99",
    pricetext: "$199.99",
  },
  {
    headingtext: "Black Automatic Watch",
    accessoriestext: "Accessories",
    ratingtext: "4.9 (98)",
    priceheading: "$169.99",
    pricetext: "$199.99",
  },
  {
    headingtext: "Black Automatic Watch",
    accessoriestext: "Accessories",
    ratingtext: "4.9 (98)",
    priceheading: "$169.99",
    pricetext: "$199.99",
  },
  {
    headingtext: "Black Automatic Watch",
    accessoriestext: "Accessories",
    ratingtext: "4.9 (98)",
    priceheading: "$169.99",
    pricetext: "$199.99",
  },
  {
    headingtext: "Black Automatic Watch",
    accessoriestext: "Accessories",
    ratingtext: "4.9 (98)",
    priceheading: "$169.99",
    pricetext: "$199.99",
  },
  {
    headingtext: "Black Automatic Watch",
    accessoriestext: "Accessories",
    ratingtext: "4.9 (98)",
    priceheading: "$169.99",
    pricetext: "$199.99",
  },
  {
    headingtext: "Black Automatic Watch",
    accessoriestext: "Accessories",
    ratingtext: "4.9 (98)",
    priceheading: "$169.99",
    pricetext: "$199.99",
  },
  {
    headingtext: "Black Automatic Watch",
    accessoriestext: "Accessories",
    ratingtext: "4.9 (98)",
    priceheading: "$169.99",
    pricetext: "$199.99",
  },
];

export default function ShoppageDesktopPage() {
  return (
    <>
      <Helmet>
        <title>
          Shop the Latest Fashion and Accessories - Nexton eCommerce
        </title>
        <meta
          name="description"
          content="Discover the latest in men's and women's fashion, kids' toys, and accessories at Nexton eCommerce. Find your style with our range of products, from affordable to luxury items. Shop now for the best deals!"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-14 bg-white-A700 sm:gap-7">
        {/* header section */}
        <Header className="self-stretch" />

        {/* sidebar section */}
        <div className="container-xs md:p-5">
          {/* main content section */}
          <div className="flex items-start gap-11 md:flex-col">
            <div className="flex w-[23%] flex-col gap-8 md:w-full">
              <div className="flex flex-col items-start gap-[23px] border-b border-solid border-gray-200 pb-10 sm:pb-5">
                <div className="flex">
                  <Heading size="s" as="h1">
                    Categories
                  </Heading>
                </div>
                <div className="flex w-[54%] flex-col gap-[15px] md:w-full">
                  <CheckBox
                    name="Men's Fashion Checkbox"
                    label="Men’s fashion"
                    id="MensFashionCheckbox"
                    className="gap-3 text-sm text-blue_gray-700"
                  />
                  <CheckBox
                    name="Women's Fashion Checkbox"
                    label="Women’s fashion"
                    id="WomensFashionCheckbox"
                    className="gap-3 text-sm text-blue_gray-700"
                  />
                  <CheckBox
                    name="Kids & Toys Checkbox"
                    label="Kids & Toys"
                    id="KidsToysCheckbox"
                    className="gap-3 p-px text-sm text-blue_gray-700"
                  />
                  <CheckBox
                    name="Accessories Checkbox"
                    label="Accessories"
                    id="AccessoriesCheckbox"
                    className="gap-3 text-sm text-blue_gray-700"
                  />
                  <CheckBox
                    name="Cosmetics Checkbox"
                    label="Cosmetics"
                    id="CosmeticsCheckbox"
                    className="gap-3 text-sm text-blue_gray-700"
                  />
                  <CheckBox
                    name="Shoes Checkbox"
                    label="Shoes"
                    id="ShoesCheckbox"
                    className="gap-3 text-sm text-blue_gray-700"
                  />
                  <CheckBox
                    name="Sports Checkbox"
                    label="Sports"
                    id="SportsCheckbox"
                    className="gap-3 p-px text-sm text-blue_gray-700"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6 border-b border-solid border-gray-200 pb-10 sm:pb-5">
                <div className="flex">
                  <Heading size="s" as="h2">
                    Price range
                  </Heading>
                </div>
                <div className="flex flex-col gap-5">
                  {/* <div className="relative h-[14px]">
                    <div className="relative bottom-0 left-0 right-0 top-0 m-auto h-[4px] w-[98%] rounded-sm bg-gray-200">
                      <div style={{ width: "80%" }}
                        className="absolute h-full rounded-sm bg-light_blue-600"
                      />
                    </div>
                    <div className="absolute bottom-0 right-[0.45px] top-0 my-auto flex h-max w-[83%] justify-between gap-5">
                      <div className="h-[14px] w-[13px] rounded-md border border-solid border-light_blue-600_a2 bg-white-A700_a2 opacity-0.8" />
                      <div className="h-[14px] w-[13px] rounded-md border border-solid border-light_blue-600_a2 bg-white-A700_a2 opacity-0.8" />
                    </div>
                  </div> */}
                  <div className="flex gap-6">
                    <div className="flex w-full flex-col items-start gap-1">
                      <div className="flex">
                        <Text as="p">Min price</Text>
                      </div>
                      <Input
                        color="gray_200"
                        size="xs"
                        variant="outline"
                        name="Min Price Field"
                        placeholder={`100`}
                        className="gap-[35px] self-stretch rounded-[18px] font-medium"
                      />
                    </div>
                    <div className="flex w-full flex-col items-start gap-1">
                      <div className="flex">
                        <Text as="p">Max price</Text>
                      </div>
                      <Input
                        color="gray_200"
                        size="xs"
                        variant="outline"
                        name="Max Price Field"
                        placeholder={`500`}
                        className="gap-[35px] self-stretch rounded-[18px] font-medium"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-6 pb-[15px]">
                <div className="flex">
                  <Heading size="s" as="h3">
                    Sort order
                  </Heading>
                </div>
                <RadioGroup name="sortoptions" className="flex flex-col">
                  <Radio
                    value="mostpopular"
                    label="Most Popular"
                    className="mr-[26px] flex-1 gap-3 p-px text-sm text-blue_gray-700 md:mr-0"
                  />
                  <Radio
                    value="bestrating"
                    label="Best Rating"
                    className="mr-[38px] mt-[15px] flex-1 gap-3 p-px text-sm text-blue_gray-700 md:mr-0"
                  />
                  <Radio
                    value="newest"
                    label="Newest"
                    className="mr-[65px] mt-3.5 flex-1 gap-3 text-sm text-blue_gray-700 md:mr-0"
                  />
                  <Radio
                    value="pricelowhight"
                    label="Price Low - Hight"
                    className="mt-[15px] flex-1 gap-3 p-px text-sm text-blue_gray-700"
                  />
                  <Radio
                    value="pricehightlow"
                    label="Price Hight - Low"
                    className="mt-[15px] flex-1 gap-3 p-px text-sm text-blue_gray-700"
                  />
                </RadioGroup>
              </div>
            </div>

            {/* products grid section */}
            <div className="flex flex-1 flex-col items-end gap-[52px] md:self-stretch sm:gap-[26px]">
              <div className="grid grid-cols-3 gap-5 self-stretch md:grid-cols-2 sm:grid-cols-1">
                {data.map((d, index) => (
                  <ProductCard
                    {...d}
                    key={"productsList" + index}
                    className="md:gap-5"
                  />
                ))}
              </div>

              {/* pagination section */}
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Img
                    src="images/rightarrow.svg"
                    alt="left arrow"
                    className="h-[26px] transform -scale-x-100 "
                  />
                  <Button
                    color="gray_200_7f"
                    size="sm"
                    shape="round"
                    className="min-w-[36px]"
                  >
                    1
                  </Button>
                  <div className="ml-[17px] flex flex-col pt-px">
                    <Text as="p">2</Text>
                  </div>
                  <div className="ml-[30px] flex flex-col pt-px">
                    <Text as="p">3</Text>
                  </div>
                  <div className="ml-[29px] flex flex-col pt-px">
                    <Text as="p">4</Text>
                  </div>
                  <div className="ml-[29px] flex flex-col pt-px">
                    <Text as="p">5</Text>
                  </div>
                </div>
                <Img
                  src="images/rightarrow.svg"
                  alt="right arrow"
                  className="h-[26px]"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer className="self-stretch" />
      </div>
    </>
  );
}
