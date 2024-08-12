import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button, Input } from "../../../components/UserComponents";
import Header from "../../../components/UserComponents/Header";
import Footer from "../../../components/UserComponents/Footer";
import { useNavigate } from "react-router-dom";
import { getLogin } from "../../../utils/api/login";
import { toast } from "react-toastify";

export default function Login() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    const response =  getLogin({ phone });
    localStorage.setItem("phone", phone);
    if (response?.success) {
      navigate("/otp");
      return;
    }
    toast.dark(`OTP was not send`);
    return;
  };

  return (
    <>
      <Helmet>
        <title>Secure Login - Access Your Nexton eCommerce Account</title>
        <meta
          name="description"
          content="Log in to your Nexton eCommerce account to continue shopping the latest products. New user? Create an account with us for a personalized shopping experience."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-A700">
        {/* header section */}
        {/* <Header className="self-stretch" /> */}
        {/* main content section */}
        <div className="container-xs mt-9 px-5 md:px-5 flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
            <div className="flex flex-col items-center gap-12">
              <a href="Login" target="_blank" rel="noreferrer">
                <Heading size="lg" as="h1">
                  Login
                </Heading>
              </a>
              <div className="flex flex-col items-center gap-6 w-full">
                <div className="flex flex-col gap-6 w-full pb-2">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <div className="flex">
                      <Heading as="h2">Phone Number</Heading>
                    </div>
                    <Input
                      size="xs"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      shape="round"
                      type="tel"
                      name="Phone Field"
                      placeholder="Enter phone number"
                      className="w-full border border-solid border-gray-200 px-3 py-2 rounded-md"
                    />
                  </div>

                  <Button
                    color="gray_900"
                    size="md"
                    shape="round"
                    className="w-full font-medium py-2 rounded-md cursor-pointer"
                    onClick={handleSendOTP}
                  >
                    Send OTP
                  </Button>
                </div>
                <div className="flex flex-col items-center gap-6">
                  <div className="flex bg-white px-4 py-1 rounded-md shadow-inner">
                    <Text size="s" as="p" className="font-medium">
                      OR
                    </Text>
                  </div>
                  <Text as="p">
                    <span className="text-blue_gray-700">New user?&nbsp;</span>
                    <a href="Register" className="text-light_blue-600">
                      Create an account
                    </a>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer bottom section */}
        <Footer />
      </div>
    </>
  );
}
