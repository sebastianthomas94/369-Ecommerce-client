import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button, Heading, Text } from "../../components";
import CheckoutProduct from "../../components/CheckoutProduct";
import { useNavigate } from "react-router-dom";

function Cart() {
    const navigate = useNavigate();
  return (
    <>
      <Header />

      {/* order summary section */}
      <div className="flex flex-col gap-5 mx-52 mt-5">
        <div className="flex">
          <Heading size="md" as="h4">
            Your Cart
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
      <div className="flex flex-col gap-6 mx-40 border-t border-solid border-gray-200 pt-6 sm:pt-5">
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
      <div className="w-full flex flex-col items-center justify-center">
      <Button
        color="gray_900"
        size="xl"
        className="items-center rounded-[26px] w-1/12 my-5 py-3 font-medium sm:px-5 cursor-pointer"
        onClick={()=>navigate('/checkout')}
      >
        Checkout
      </Button>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
