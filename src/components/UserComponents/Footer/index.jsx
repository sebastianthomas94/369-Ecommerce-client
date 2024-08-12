import React from 'react'
import { Img, Text, Heading } from "../index.js";


function Footer() {
  return (
    <footer className="mt-[71px] self-stretch">
    {/* footer section */}
    <div className="flex justify-center border-t border-solid border-gray-200 py-[60px] md:py-5">
      <div className="container-xs flex md:p-5">
        <div className="flex w-[88%] items-start justify-between gap-5 md:w-full md:flex-col">
          <div className="flex w-[29%] flex-col gap-[19px] md:w-full">
            <Img
              src="/images/1.png"
              alt="footer logo"
              className="h-[46px] w-[119px] object-contain"
            />
            <ul className="flex flex-col gap-[11px]">
              <li>
                <a href="#">
                  <div className="flex items-center gap-2 self-start">
                    <Img
                      src="/images/facebookLogo.svg"
                      alt="facebook icon"
                      className="h-[20px] w-[20px]"
                    />
                    <Text as="p">Facebook</Text>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="flex items-center gap-2 self-start">
                    <Img
                      src="/images/youtubeLogo.svg"
                      alt="youtube icon"
                      className="h-[19px] w-[19px]"
                    />
                    <Text as="p">Youtube</Text>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="flex items-center gap-2 self-start">
                    <Img
                      src="/images/telegramLogo.png"
                      alt="telegram icon"
                      className="h-[20px] w-[20px] self-start object-cover"
                    />
                    <Text as="p">Telegram</Text>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="flex items-center gap-2 self-start">
                    <Img
                      src="/images/twitterLogo.svg"
                      alt="twitter icon"
                      className="h-[20px] w-[20px]"
                    />
                    <Text as="p">Twitter</Text>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[19px]">
            <Heading as="h6">Getting started</Heading>
            <ul className="flex flex-col gap-[11px]">
              <li>
                <a href="#">
                  <Text as="p">Release Notes</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Upgrade Guide</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Browser Support</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Dark Mode</Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[19px]">
            <Heading as="h6">Explore</Heading>
            <ul className="flex flex-col gap-[11px]">
              <li>
                <a href="#">
                  <Text as="p">Prototyping</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Design systems</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Pricing</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Security</Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-[19px]">
            <Heading as="h6">Community</Heading>
            <ul className="flex flex-col items-start gap-[11px]">
              <li>
                <a href="#">
                  <Text as="p">Discussion Forums</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Code of Conduct</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Contributing</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">API Reference</Text>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center border-t border-solid border-gray-200_01 py-8 sm:py-5">
      <div className="container-xs flex items-center justify-between gap-5 md:p-5 sm:flex-col">
        <a href="#">
          <div className="flex">
            <Text as="p">369 eCommerce. © 2024</Text>
          </div>
        </a>
        <div className="flex w-[18%] justify-center gap-1 sm:w-full">
          <Img
            src="/images/visaLogo.svg"
            alt="visa icon"
            className="h-[32px] w-[24%]"
          />
          <Img
            src="/images/paypalLogo.svg"
            alt="paypal icon"
            className="h-[32px] w-[24%]"
          />
          <div className="flex w-[24%] justify-center">
            <div className="w-full">
              <Img
                src="/images/tvLogo.svg"
                alt="television icon"
                className="h-[31px] w-full md:h-auto"
              />
              <Img
                src="/images/stripeLogo.png"
                alt="vector icon"
                className="relative mt-[-31px] h-[31px] w-full object-cover md:h-auto"
              />
            </div>
          </div>
          <Img
            src="/images/verisignLogo.svg"
            alt="verisign icon"
            className="h-[32px] w-[24%]"
          />
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer