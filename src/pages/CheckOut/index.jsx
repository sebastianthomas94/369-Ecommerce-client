import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, Input, Img } from "../../components";
import CheckoutProduct from "../../components/CheckoutProduct";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OrderPlacedMessage from "../../components/OrderPlaced";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();
  const confirmOrder = () => {
    setConfirm(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>
          Secure Checkout - Complete Your Purchase with Nexton eCommerce
        </title>
        <meta
          name="description"
          content="Ready to finalize your order? Proceed through our secure checkout process to confirm your purchase. Enjoy a seamless shopping experience with Nexton eCommerce, from cart to confirmation."
        />
      </Helmet>
      <div className="w-full bg-white-A700">
        {/* header section */}
        <Header />
        <div className="flex justify-center pb-[72px] pt-10 md:pb-5 sm:py-5">
          {/* breadcrumb section */}
          <div className="container-xs flex flex-col gap-[52px] md:p-5 sm:gap-[26px]">
            <div className="flex flex-col items-start gap-[5px]">
              <Heading size="lg" as="h1">
                Checkout
              </Heading>
              <div className="flex gap-3">
                <div className="flex">
                  <Text as="p" className="!font-medium">
                    Homepage
                  </Text>
                </div>
                <Text as="p" className="!font-medium">
                  /
                </Text>
                <div className="flex">
                  <Text as="p" className="!font-medium">
                    Checkout
                  </Text>
                </div>
              </div>
            </div>

            {/* checkout form section */}
            <div className="flex items-start gap-10 md:flex-col">
              <div className="flex w-full flex-col gap-10">
                <div className="flex flex-col rounded-[16px] border border-solid border-gray-200">
                  <div className="flex gap-3 self-start p-6 sm:p-5">
                    <Img
                      src="images/img_lock.svg"
                      alt="lock icon"
                      className="h-[24px] w-[24px]"
                    />
                    <div className="flex">
                      <Text as="p" className="!font-medium">
                        CONTACT INFO
                      </Text>
                    </div>
                  </div>
                  <div className="border-t border-solid border-gray-200 px-6 pb-8 pt-6 sm:p-5">
                    <div className="flex gap-6 sm:flex-col">
                      <div className="flex w-full flex-col items-start gap-2 sm:w-full">
                        <Heading as="h2">Your phone number</Heading>
                        <Input
                          shape="round"
                          name="Phone Field"
                          className="self-stretch border border-solid border-gray-200"
                        />
                      </div>
                      <div className="flex w-full flex-col items-start gap-2 sm:w-full">
                        <Heading as="h3">Email address</Heading>
                        <Input
                          shape="round"
                          name="Email Field"
                          className="self-stretch border border-solid border-gray-200"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-6 rounded-[16px] border border-solid border-gray-200 pt-[25px] sm:pt-5">
                  <div className="ml-6 flex gap-3 md:ml-0">
                    <Img
                      src="images/img_svg_blue_gray_700_24x24.svg"
                      alt="shipping icon"
                      className="h-[24px] w-[24px]"
                    />
                    <div className="flex">
                      <Text as="p" className="!font-medium">
                        SHIPPING ADDRESS
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[23px] self-stretch border-t border-solid border-gray-200 px-[23px] pb-8 pt-[23px] sm:p-5">
                    <div className="flex gap-6 sm:flex-col">
                      <div className="flex w-full flex-col items-start gap-2 sm:w-full">
                        <Heading as="h4">First name</Heading>
                        <Input
                          shape="round"
                          name="FirstName Field"
                          className="self-stretch border border-solid border-gray-200"
                        />
                      </div>
                      <div className="flex w-full flex-col items-start gap-2 sm:w-full">
                        <Heading as="h5">Last name</Heading>
                        <Input
                          shape="round"
                          name="LastName Field"
                          className="self-stretch border border-solid border-gray-200"
                        />
                      </div>
                    </div>
                    <div className="flex gap-6 sm:flex-col">
                      <div className="flex flex-1 flex-col items-start gap-2 sm:self-stretch">
                        <Heading as="h6">Address line 1</Heading>
                        <Input
                          shape="round"
                          name="Address1 Field"
                          className="self-stretch border border-solid border-gray-200"
                        />
                      </div>
                      <div className="flex w-[32%] flex-col items-start gap-2 sm:w-full">
                        <Heading as="h6">Apt, Suite</Heading>
                        <Input
                          shape="round"
                          name="Apt Field"
                          className="self-stretch border border-solid border-gray-200"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                      <Heading as="h6">Address line 2</Heading>
                      <Input
                        shape="round"
                        name="Address2 Field"
                        className="self-stretch border border-solid border-gray-200"
                      />
                    </div>
                    <div className="flex flex-col gap-[23px]">
                      <div className="flex gap-6 sm:flex-col">
                        <div className="flex w-full flex-col items-start gap-2 sm:w-full">
                          <Heading as="h6">City</Heading>
                          <Input
                            shape="round"
                            name="Country Input"
                            className="self-stretch border border-solid border-gray-200"
                          />
                        </div>
                        <div className="flex w-full flex-col items-start gap-2 sm:w-full">
                          <Heading as="h6">Country</Heading>
                          <Input
                            shape="round"
                            name="State Postal Row"
                            className="self-stretch border border-solid border-gray-200"
                          />
                        </div>
                      </div>
                      <div className="flex gap-6 sm:flex-col">
                        <div className="flex w-full flex-col items-start gap-2 sm:w-full">
                          <Heading as="h6">State/Province</Heading>
                          <Input
                            shape="round"
                            name="Postal Input"
                            className="self-stretch border border-solid border-gray-200"
                          />
                        </div>
                        <div className="flex w-full flex-col items-start gap-2 sm:w-full">
                          <Heading as="h6">Postal code</Heading>
                          <Input
                            shape="round"
                            name="Payment Column"
                            className="self-stretch border border-solid border-gray-200"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col rounded-[16px] border border-solid border-gray-200">
                  <div className="flex gap-3 self-start p-6 sm:p-5">
                    <Img
                      src="images/img_svg_24x24.svg"
                      alt="payment title"
                      className="h-[24px] w-[24px]"
                    />
                    <div className="flex">
                      <Text as="p" className="!font-medium">
                        PAYMENT
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 border-t border-solid border-gray-200 px-6 pb-8 pt-6 sm:p-5">
                    <div className="flex flex-col items-start gap-2">
                      <Heading as="h6">Card number</Heading>
                      <Input
                        shape="round"
                        name="CardNumber Field"
                        className="self-stretch border border-solid border-gray-200"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                      <Heading as="h6">Name on the card</Heading>
                      <Input
                        shape="round"
                        name="CardName Field"
                        className="self-stretch border border-solid border-gray-200"
                      />
                    </div>
                    <div className="flex gap-6 sm:flex-col">
                      <div className="flex flex-1 flex-col items-start gap-2 sm:self-stretch">
                        <Heading as="h6">Expiration date (MM/YY)</Heading>
                        <Input
                          shape="round"
                          name="ExpiryDate Field"
                          className="self-stretch border border-solid border-gray-200"
                        />
                      </div>
                      <div className="flex w-[32%] flex-col items-start gap-2 sm:w-full">
                        <Heading as="h6">CVC</Heading>
                        <Input
                          shape="round"
                          name="CVC Field"
                          className="self-stretch border border-solid border-gray-200"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-6">
                {/* order summary section */}
                <div className="flex flex-col gap-5">
                  <div className="flex">
                    <Heading size="md" as="h4">
                      Order summary
                    </Heading>
                  </div>
                  <div className="flex flex-col gap-6">
                    <CheckoutProduct />
                    <div className="flex flex-col gap-px">
                      {[...Array(1)].map((d, index) => (
                        <CheckoutProduct
                          productname="Black Automatic Watch"
                          productsize="One size"
                          productquantity="1"
                          price="$169.99"
                          price1="$199.99"
                          key={"cartList" + index}
                          className="flex-1"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* order total section */}
                <div className="flex flex-col gap-6 border-t border-solid border-gray-200 pt-6 sm:pt-5">
                  <div className="flex flex-col gap-[7px]">
                    <div className="flex justify-between gap-5">
                      <div className="flex">
                        <Text as="p">Subtotal</Text>
                      </div>
                      <div className="flex">
                        <Text as="p">$169.99</Text>
                      </div>
                    </div>
                    <div className="flex justify-between gap-5">
                      <div className="flex">
                        <Text as="p">Shipping estimate</Text>
                      </div>
                      <div className="flex pt-px">
                        <Text as="p">$5.00</Text>
                      </div>
                    </div>
                    <div className="flex justify-between gap-5">
                      <Text as="p">Tax estimate</Text>
                      <div className="flex">
                        <Text as="p">$24.90</Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between gap-5">
                    <Heading as="h6">Order total</Heading>
                    <Heading as="h6">$199.89</Heading>
                  </div>
                </div>
                {/* confirm order button section */}
                <Button
                  color="gray_900"
                  size="xl"
                  className="w-full rounded-[26px] font-medium sm:px-5"
                  onClick={confirmOrder}
                >
                  Confirm order
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* footer section */}
        <Footer />
      </div>

      <OrderPlacedMessage show={confirm} />
    </>
  );
}
