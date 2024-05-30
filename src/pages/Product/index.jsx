import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Button, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import QuantityButton from "../../components/QuantityButton";
import ProductCard from "../../components/ProductCard";
import { useParams } from "react-router-dom";
import { getProduct } from "../../utils/api/product";
import { toast } from "react-toastify";

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
];

export default function ProductPage({}) {
  const [product, setProduct] = useState({
    images: [
      "/images/dummy-product.jpeg",
      "/images/dummy-product.jpeg",
      "/images/dummy-product.jpeg",
      "/images/dummy-product.jpeg",
    ],
  });

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const { productId } = useParams();

  useEffect(() => {
    const getProductData = async () => {
      const data = await getProduct(productId);
      if (!data) {
        toast.dark("🧑‍💻️ Server error. Please check your internet.");
        return;
      }
      setProduct(data);
    };
    getProductData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Black Automatic Watch - Exclusive Men's Fashion Accessory</title>
        <meta
          name="description"
          content="Elevate your style with the Black Automatic Watch, a perfect blend of elegance and craftsmanship. Read customer reviews, explore detailed product information, and shop with confidence for your next fashion statement."
        />
      </Helmet>
      <div className="w-full bg-white-A700">
        {/* header section */}
        <Header />

        {/* product gallery section */}
        <div className="flex flex-col items-center pb-[72px] pt-10 md:pb-5 sm:py-5">
          {/* product details section */}
          <div className="container-xs flex flex-col gap-24 pb-6 md:gap-[72px] md:p-5 sm:gap-12 sm:pb-5">
            {/* product description section */}
            <div className="flex items-start gap-8 md:flex-col">
              <div className="flex flex-1 flex-col gap-12 md:self-stretch">
                <div className="flex gap-6 pb-3 md:flex-col">
                  <div className="flex w-[18%] flex-col gap-4 md:w-full">
                    {product.images.map((image, index) => (
                      <Img
                        key={"imageList" + index}
                        src={image}
                        alt="product image"
                        className="h-[157px] w-full flex-1 rounded-[16px] object-cover"
                      />
                    ))}
                  </div>
                  <div className="relative h-[678px] flex-1 rounded-[16px] md:h-auto md:w-full md:flex-none md:self-stretch">
                    <Img
                      src={selectedImage}
                      alt="Main Image"
                      className="h-[678px] w-full rounded-[16px] object-cover"
                    />
                    <div className="absolute left-0 right-0 top-[16.00px] m-auto flex w-[95%] items-center justify-between gap-5">
                      {/* <Button
                        size="xs"
                        leftIcon={
                          <Img
                            src="/images/img_close.svg"
                            alt="close"
                            className="h-[11px] w-[11px]"
                          />
                        }
                        className="min-w-[83px] gap-1 self-start rounded-[16px] text-blue_gray-700 shadow-xs"
                      >
                        New in
                      </Button> */}
                    </div>
                  </div>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex flex-col gap-[58px] sm:gap-[29px]">
                  <div className="flex w-[91%] flex-col gap-[9px] md:w-full">
                    <div className="flex">
                      <Heading size="lg" as="h1">
                        Black Automatic Watch
                      </Heading>
                    </div>
                    <div>
                      <Text as="p" className="leading-6">
                        <>
                          The St. Louis Meramec Canoe Company was founded by
                          Alfred Wickett in 1922. Wickett had
                          <br />
                          previously worked for the Old Town Canoe Co from 1900
                          to 1914. Manufacturing of the classic
                          <br />
                          wooden canoes in Valley Park, Missouri ceased in 1978.
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[3px]">
                    <Heading size="md" as="h2">
                      Fabric + Care
                    </Heading>
                    <div className="flex flex-col items-start">
                      <Text as="p">Material: Soft wool blend</Text>
                      <Text as="p">Color: Various</Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <Heading size="md" as="h3">
                      Sale performance
                    </Heading>
                    <div className="flex flex-col items-start">
                      <div className="flex">
                        <Text as="p">Sales: 0</Text>
                      </div>
                      <div className="flex">
                        <Text as="p">Review Count: -</Text>
                      </div>
                      <div className="flex">
                        <Text as="p">Review Average: -</Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <div className="flex">
                      <Heading size="md" as="h4">
                        Keywords
                      </Heading>
                    </div>
                    <div className="flex gap-2 sm:flex-col">
                      <Button
                        size="xs"
                        leftIcon={"👕"}
                        className="min-w-[127px] gap-1 rounded-[16px] border border-solid border-gray-200 text-blue_gray-700"
                      >
                        men&#39;s fashion
                      </Button>
                      <Button
                        size="xs"
                        leftIcon={"🎅"}
                        className="min-w-[104px] gap-[3px] rounded-[16px] border border-solid border-gray-200 text-blue_gray-700"
                      >
                        winter hat
                      </Button>
                      <Button
                        size="xs"
                        leftIcon={
                          <Img
                            src="/images/img_close.svg"
                            alt="close"
                            className="h-[11px] w-[11px]"
                          />
                        }
                        className="min-w-[153px] gap-[3px] rounded-[16px] border border-solid border-gray-200 text-blue_gray-700"
                      >
                        colorful accessory
                      </Button>
                      <Button
                        size="xs"
                        leftIcon={"🔥"}
                        className="min-w-[143px] gap-1 rounded-[16px] border border-solid border-gray-200 text-blue_gray-700"
                      >
                        warm headwear
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* product purchase section */}
              <div className="flex w-[36%] flex-col gap-[31px] rounded-[16px] border border-solid border-gray-200 px-[30px] pb-[33px] pt-[30px] md:w-full sm:p-5">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-center gap-1.5">
                    <Img
                      src="/images/star.svg"
                      alt="signal image"
                      className="h-[16px] w-[16px]"
                    />
                    <div className="flex pt-px">
                      <Heading as="h5" className="!text-blue_gray-700">
                        4.9
                      </Heading>
                    </div>
                    <div className="flex flex-col pt-px">
                      <Heading as="h6" className="!text-blue_gray-700">
                        ·
                      </Heading>
                    </div>
                    <div className="flex">
                      <Text as="p" className="!font-medium underline">
                        142 reviews
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <Heading size="md" as="h4">
                      $169.99
                    </Heading>
                    <Text size="s" as="p" className="!font-medium line-through">
                      $199.99
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-8">
                    {/* <div className="flex flex-col items-start gap-3">
                      <Heading as="h6">Size: S</Heading>
                      <div className="flex gap-2 self-stretch sm:flex-col">
                        <Button
                          color="light_blue_600"
                          size="lg"
                          shape="round"
                          className="w-full border border-solid border-light_blue-600 font-semibold sm:px-5"
                        >
                          S
                        </Button>
                        <Button
                          color="gray_200"
                          size="lg"
                          variant="outline"
                          shape="round"
                          className="w-full font-semibold sm:px-5"
                        >
                          M
                        </Button>
                        <Button
                          color="gray_200"
                          size="lg"
                          variant="outline"
                          shape="round"
                          className="w-full font-semibold sm:px-5"
                        >
                          L
                        </Button>
                        <Button
                          color="gray_200"
                          size="lg"
                          variant="outline"
                          shape="round"
                          className="w-full font-semibold sm:px-5"
                        >
                          XL
                        </Button>
                        <Button
                          color="gray_200"
                          size="lg"
                          variant="outline"
                          shape="round"
                          className="w-full font-semibold !text-blue_gray-700_66 sm:px-5"
                        >
                          2XL
                        </Button>
                      </div>
                    </div> */}
                    <div className="flex items-center justify-between gap-5">
                      <QuantityButton />
                      <Button
                        color="gray_900"
                        size="xl"
                        leftIcon={
                          <Img
                            src="/images/cart.svg"
                            alt="svg"
                            className="h-[16px] w-[16px]"
                          />
                        }
                        className="min-w-[178px] gap-2 rounded-[26px] font-medium sm:px-5"
                      >
                        Add to cart
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-[9px]">
                        <div className="flex justify-between gap-5">
                          <div className="flex">
                            <Text as="p">$169.99 x 1</Text>
                          </div>
                          <div className="flex">
                            <Text as="p">$169.99</Text>
                          </div>
                        </div>
                        <div className="flex justify-between gap-5">
                          <Text as="p">Tax estimate</Text>
                          <div className="flex flex-col pt-px">
                            <Text as="p">$0</Text>
                          </div>
                        </div>
                      </div>
                      <div className="h-px bg-gray-200" />
                    </div>
                    <div className="flex flex-wrap justify-between gap-5">
                      <Heading as="h6">Total</Heading>
                      <Heading as="h6">$169.99</Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* recommended products section */}
            <div className="flex flex-col items-start gap-7">
              <Heading size="lg" as="h1">
                Recommended products
              </Heading>
              <div className="flex gap-5 self-stretch md:flex-col">
                {data.map((d, index) => (
                  <ProductCard
                    {...d}
                    key={"productList" + index}
                    className="md:w-full md:gap-5"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* footer section */}
        <Footer />
      </div>
    </>
  );
}
