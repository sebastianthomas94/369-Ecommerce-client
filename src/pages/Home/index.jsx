import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img, Slider } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import { v4 as uuidv4 } from "uuid";
import { getMostRatedProducts, getRecentProducts } from "./Home";
import { toast } from "react-toastify";
import products from '../../assets/json/products.json';

export default function HomePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState2, setSliderState2] = React.useState(0);
  const sliderRef2 = React.useRef(null);
  const [sliderState3, setSliderState3] = React.useState(0);
  const sliderRef3 = React.useRef(null);


  const [latest, setLatest] = React.useState(new Array(12).fill({}));
  const [bestRated, setBestRated] = React.useState(new Array(12).fill({}));

  useEffect(() => {
    const handleGetRecentProducts = async () => {
      const data = await getRecentProducts();
      if (!data) {
        toast.dark("🧑‍💻️ Server error. Please check your internet.");
        return;
      }
      setLatest(data);
    };

    const handleGetMostRatedProducts = async () => {
      const data = await getMostRatedProducts();
      if (!data) {
        toast.dark("🧑‍💻️ Server error. Please check your internet.");
        return;
      }
      setBestRated(data);
    };

    handleGetRecentProducts();
    handleGetMostRatedProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Shop the Latest Fashion and Accessories - Home | Nexton eCommerce
        </title>
        <meta
          name="description"
          content="Discover our exclusive collection with free shipping on orders over $50. Explore best sellers and new arrivals in fashion and accessories. Start your shopping journey with Nexton eCommerce."
        />
      </Helmet>
      <div className="w-full bg-white-A700">
        {/* header section */}
        <Header />

        {/* hero slider section */}
        <div className="flex flex-col gap-[52px] pb-[52px] md:pb-5 sm:gap-[26px]">
          <div className="flex flex-col items-center">
            <div className="max-w-screen-2xl flex w-full self-stretch">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 1 },
                }}
                renderDotsItem={(props) => {
                  return props?.isActive ? (
                    <div className="mr-3 h-[8px] w-[40px] rounded bg-gray-900" />
                  ) : (
                    <div className="mr-3 h-[8px] w-[8px] rounded bg-gray_900_cc" />
                  );
                }}
                activeIndex={sliderState3}
                onSlideChanged={(e) => {
                  setSliderState3(e?.item);
                }}
                ref={sliderRef3}
                items={[...Array(3)].map(() => (
                  <React.Fragment key={uuidv4()}>
                    <div className="flex h-[600px] items-center bg-[url(/public/images/carousel1.png)] bg-cover bg-no-repeat py-[148px] md:h-auto md:py-5">
                      <div className="container-xs flex md:p-5">
                        <div className="flex w-[49%] flex-col items-start gap-[23px] pb-5 md:w-full">
                          <div className="flex">
                            <Text size="lg" as="p">
                              Starting from: $49.99
                            </Text>
                          </div>
                          <Heading
                            size="xl"
                            as="h1"
                            className="w-full leading-[72px]"
                          >
                            <>
                              Exclusive collection
                              <br />
                              for everyone
                            </>
                          </Heading>
                          <Button
                            color="gray_900"
                            size="lg"
                            rightIcon={
                              <Img
                                src="images/search.svg"
                                alt="reply"
                                className="h-[20px] w-[30px]"
                              />
                            }
                            className="min-w-[198px] gap-px rounded-[32px] font-medium sm:px-5"
                          >
                            Explore now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
          </div>

          {/* features section */}
          <div className="flex flex-col items-center">
            <div className="container-xs flex items-center justify-center rounded-[16px] border border-solid border-gray-200 bg-white-A700 px-6 pb-[23px] pt-6 md:flex-col md:p-5">
              <div className="flex w-[24%] justify-between gap-5 md:w-full">
                <div className="flex items-center gap-4">
                  <Img
                    src="images/shipping.svg"
                    alt="shipping icon"
                    className="h-[24px] w-[24px]"
                  />
                  <div className="flex flex-col items-start">
                    <div className="flex">
                      <Heading size="s" as="h2">
                        Free shipping
                      </Heading>
                    </div>
                    <Text size="s" as="p">
                      On orders over $50.00
                    </Text>
                  </div>
                </div>
                <div className="h-full w-px bg-gray-200" />
              </div>
              <div className="flex flex-1 items-center gap-[0.5px] md:flex-col md:self-stretch">
                <div className="flex items-center gap-4 pl-8 pr-[57px] md:pr-5 sm:px-5">
                  <Img
                    src="images/return.svg"
                    alt="return icon"
                    className="h-[24px] w-[24px]"
                  />
                  <div className="flex flex-col items-start">
                    <div className="flex">
                      <Heading size="s" as="h3">
                        Very easy to return
                      </Heading>
                    </div>
                    <div className="flex">
                      <Text size="s" as="p">
                        Just phone number
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-[50px] w-px bg-gray-200" />
                <div className="flex items-center gap-4 pl-8 pr-[55px] md:pr-5 sm:px-5">
                  <Img
                    src="images/worldwide.svg"
                    alt="delivery icon"
                    className="h-[24px] w-[24px]"
                  />
                  <div className="flex flex-col items-start">
                    <div className="flex">
                      <Heading size="s" as="h4">
                        Worldwide delivery
                      </Heading>
                    </div>
                    <div className="flex">
                      <Text size="s" as="p">
                        Fast delivery worldwide
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-[50px] w-px bg-gray-200" />
                <div className="flex items-center">
                  <div className="h-[50px] w-px bg-gray-200" />
                  <div className="flex items-center gap-4 pl-8 pr-6 sm:px-5">
                    <Img
                      src="images/refund.svg"
                      alt="svg"
                      className="h-[24px] w-[24px]"
                    />
                    <div className="flex flex-col items-start">
                      <div className="flex">
                        <Heading size="s" as="h5">
                          Refunds policy
                        </Heading>
                      </div>
                      <div className="flex">
                        <Text size="s" as="p">
                          60 days return for any reason
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* collections section */}
            <div className="container-xs mt-[116px] flex flex-col items-center gap-[34px] md:p-5">
              <div className="flex self-start">
                <Heading size="lg" as="h6">
                  <span className="text-gray-900">Start exploring.&nbsp;</span>
                  <span className="text-blue_gray_700_cc">
                    Good things are waiting for you
                  </span>
                </Heading>
              </div>
              <div className="mx-[9.5px] flex w-full max-w-[1296px] gap-[19px] self-stretch md:mx-0 md:flex-col">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 1 },
                    1050: { items: 3 },
                  }}
                  renderDotsItem={(props) => {
                    return props?.isActive ? (
                      <div className="mr-1.5 h-[6px] w-[6px] rounded-[3px] bg-gray_900_cc" />
                    ) : (
                      <div className="mr-1.5 h-[6px] w-[6px] rounded-[3px] bg-gray_900_66" />
                    );
                  }}
                  activeIndex={sliderState2}
                  onSlideChanged={(e) => {
                    setSliderState2(e?.item);
                  }}
                  ref={sliderRef2}
                  items={[...Array(9)].map(() => (
                    <React.Fragment key={uuidv4()}>
                      <div className="flex items-center rounded-[16px] bg-gray-50_01 px-10 pb-[39px] pt-9 sm:p-5">
                        <div className="flex flex-col items-start">
                          <Heading size="md" as="h4">
                            For Men&#39;s
                          </Heading>
                          <div className="flex">
                            <Text size="s" as="p">
                              Starting at $24
                            </Text>
                          </div>
                        </div>
                        <Button
                          color="gray_200"
                          size="sm"
                          variant="outline"
                          shape="square"
                          rightIcon={
                            <Img
                              src="images/rightarrow.svg"
                              alt="svg"
                              className="h-[16px] w-[16px]"
                            />
                          }
                          className="min-w-[113px] gap-2 font-medium uppercase"
                        >
                          Shop Now
                        </Button>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>

            {/* Latest section */}
            <div className="container-xs mt-10 flex flex-col items-start gap-[29px] md:p-5">
              <Heading size="lg" as="h1">
                <span className="text-gray-900">Latest.&nbsp;</span>
                <span className="text-blue_gray_700_cc">
                  Best matching products for you
                </span>
              </Heading>
              <div className="flex flex-col items-center gap-16 self-stretch sm:gap-8">
                <div className="mx-2.5 flex w-full max-w-[1296px] gap-5 self-stretch md:mx-0 md:flex-col">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{
                      0: { items: 1 },
                      550: { items: 1 },
                      1050: { items: 4 },
                    }}
                    renderDotsItem={(props) => {
                      return props?.isActive ? (
                        <div className="mr-1.5 h-[6px] w-[6px] rounded-[3px] bg-gray_900_cc" />
                      ) : (
                        <div className="mr-1.5 h-[6px] w-[6px] rounded-[3px] bg-gray_900_66" />
                      );
                    }}
                    activeIndex={sliderState1}
                    onSlideChanged={(e) => {
                      setSliderState1(e?.item);
                    }}
                    ref={sliderRef1}
                    items={latest.map((item) => (
                      <React.Fragment key={uuidv4()}>
                        <ProductCard title={item?.name} price={item?.price} imageUri={item?.imageUri}  />
                      </React.Fragment>
                    ))}
                  />
                </div>
              </div>
            </div>

            {/* bestsellers section */}
            <div className="container-xs mt-10 flex flex-col items-start gap-[29px] md:p-5">
              <Heading size="lg" as="h1">
                <span className="text-gray-900">Best Seller.&nbsp;</span>
                <span className="text-blue_gray_700_cc">
                  Best matching products for you
                </span>
              </Heading>
              <div className="flex flex-col items-center gap-16 self-stretch sm:gap-8">
                <div className="mx-2.5 flex w-full max-w-[1296px] gap-5 self-stretch md:mx-0 md:flex-col">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{
                      0: { items: 1 },
                      550: { items: 1 },
                      1050: { items: 4 },
                    }}
                    renderDotsItem={(props) => {
                      return props?.isActive ? (
                        <div className="mr-1.5 h-[6px] w-[6px] rounded-[3px] bg-gray_900_cc" />
                      ) : (
                        <div className="mr-1.5 h-[6px] w-[6px] rounded-[3px] bg-gray_900_66" />
                      );
                    }}
                    activeIndex={sliderState1}
                    onSlideChanged={(e) => {
                      setSliderState1(e?.item);
                    }}
                    ref={sliderRef1}
                    items={latest.map((item) => (
                      <React.Fragment key={uuidv4()}>
                        <ProductCard title={item.name} price={item.price} imageUri={item.imageUri} />
                      </React.Fragment>
                    ))}
                  />
                </div>
              </div>
            </div>

            {/* banner section */}
            <div className="container-xs relative mt-[52px] h-[437px] rounded-[24px] bg-gray-100 md:p-5">
              <Img
                src="images/background.png"
                alt="backgroundimage"
                className="absolute bottom-0 right-[0.00px] top-0 my-auto h-[437px] w-[57%] object-cover"
              />
              <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max w-[75%] py-[93px] pl-[120px] pr-14 md:p-5">
                <div className="flex w-[69%] flex-col items-start gap-[23px] md:w-full">
                  <div className="flex w-[66%] flex-col gap-3 md:w-full">
                    <div className="flex">
                      <Text size="lg" as="p">
                        100% Original Products
                      </Text>
                    </div>
                    <Heading size="lg" as="h1" className="leading-10">
                      <>
                        The All New Fashion
                        <br />
                        Collection Items
                      </>
                    </Heading>
                  </div>
                  <div className="flex">
                    <Text size="lg" as="p">
                      Starting from: $59.99
                    </Text>
                  </div>
                  <Button
                    color="gray_900"
                    size="md"
                    shape="round"
                    className="min-w-[144px] font-medium sm:px-5"
                  >
                    Shop now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
