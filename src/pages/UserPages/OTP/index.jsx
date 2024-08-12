import React, { useState } from "react";
import Helmet from "react-helmet";
import Header from "../../../components/UserComponents/Header";
import Footer from "../../../components/UserComponents/Footer";
import { Heading, Input, Button, Text } from "../../../components/UserComponents";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../../utils/api/login";
import { toast } from "react-toastify";

function OTP() {
  const [otp, setOtp] = useState("");
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };

  const navigate = useNavigate();

  const handleVerify = () => {
    const phone = localStorage.getItem("phone");
    if (!phone) {
      navigate("/login");
      return;
    }
    const response = postLogin({ phone });
    localStorage.setItem("phone", phone);
    if (response?.success) {
      navigate("/otp");
      return;
    }
    toast.dark(`OTP was not send`);
    return;
  };

  const inputStyle = {
    width: "3rem", // Adjust as needed for size
    height: "3rem", // Adjust as needed for size
    border: "1px solid #d1d5db", // Equivalent to Tailwind's border-gray-300
    borderRadius: "0.25rem", // Equivalent to Tailwind's rounded
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)", // Equivalent to Tailwind's shadow-md
    textAlign: "center",
    marginLeft: "15px",
    marginRight: "15px",
  };

  return (
    <>
      <Helmet>
        <title>Secure Login - Access Your 369 eCommerce Account</title>
        <meta
          name="description"
          content="Log in to your 369 eCommerce account to continue shopping the latest products. New user? Create an account with us for a personalized shopping experience."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-A700">
        {/* header section */}
        <Header className="self-stretch" />
        {/* main content section */}
        <div className="container-xs mt-9 px-5 md:px-5 flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
            <div className="flex flex-col items-center gap-12">
              <a href="Login" target="_blank" rel="noreferrer">
                <Heading size="lg" as="h1">
                  Enter OTP
                </Heading>
              </a>
              <div className="flex flex-col items-center gap-6 w-full">
                <div className="flex flex-col gap-6 w-full pb-2">
                  <div className="flex flex-col items-center gap-2 w-full">
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={4}
                      renderSeparator={<span> - </span>}
                      containerStyle={containerStyle}
                      inputStyle={inputStyle}
                      renderInput={(props) => <input {...props} />}
                    />
                  </div>

                  <Button
                    color="gray_900"
                    size="md"
                    shape="round"
                    className="w-full font-medium py-2 rounded-md cursor-pointer"
                    onClick={handleVerify}
                  >
                    Verify
                  </Button>
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

export default OTP;
