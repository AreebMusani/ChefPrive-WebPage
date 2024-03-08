import React from "react";
import logo from "../../assets/images/whiteLogo.png";
import { Link } from "react-router-dom";
import {
  FaLocationArrow,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const listOfLinks = [
    { name: "Home", url: "/" },
    { name: "How It Works", url: "/" },
    { name: "Our Chefs", url: "/" },
    { name: "Reviews", url: "/" },
    { name: "What's new", url: "/" },
  ];

  return (
    <div className="w-full bg-black py-10 flex flex-col items-center">
      <div className="w-[90%] grid max-[650px]:grid-cols-1 grid-cols-4 max-[1080px]:grid-cols-2 max-[1080px]:gap-y-10">
        <div className="">
          <img src={logo} alt="my logo" className="max-[650px]:mx-auto w-[230px]" />
        </div>
        <div className="max-[1080px]:order-4">
          <h1 className="mb-5 text-[#FF9E2C] text-lg">Address</h1>
          <div>
            <div className="flex space-x-2 mb-5">
              <div className="w-6">
                <FaLocationDot className="mt-[5px]" color="#fff" size={20} />
              </div>
              <p className="text-white p-0">
                Park Avenue South, New York,
                <br /> 74812, United States
              </p>
            </div>

            <div className="flex space-x-2 mb-5">
              <div className="w-6">
                <FaEnvelope className="mt-[5px]" color="#fff" size={20} />
              </div>
              <p className="text-white p-0">contact@chefprive.com</p>
            </div>

            <div className="flex space-x-2 mb-5">
              <div className="w-6">
                <FaPhoneAlt className="mt-[5px]" color="#fff" size={20} />
              </div>
              <p className="text-white p-0">000-123-456</p>
            </div>

            <div className="flex space-x-5">
              <Link className="text-white">{"FAQ’s"}</Link>
              <Link className="text-white">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="max-[1080px]:order-3">
          <h1 className="mb-5 text-[#FF9E2C] text-lg">Links</h1>
          <ul>
            {listOfLinks.map((item, index) => (
              <li className="pb-4" key={index}>
                <Link className="text-white" to={item.url}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-[650px]:mx-auto max-[650px]:order-4">
          <h1 className="max-[650px]:text-center mb-5 text-[#FF9E2C] text-lg">
            Subcribe to Newsletter
          </h1>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-white h-12 px-4 py-2 border outline-none rounded-lg"
            />
            <button className="bg-[#FF932C] min-w-12 h-12 rounded-lg flex justify-center items-center">
              <FaLocationArrow color="#fff" size={20} />
            </button>
          </div>
          <div className="mt-10 flex flex-col max-[650px]:items-center">
            <h1 className="max-[650px]:text-center mb-5 text-white text-lg">
              Our Social
            </h1>
            <div className="flex space-x-4">
              <FaFacebook
                className="cursor-pointer"
                color="#FF932C"
                size={30}
              />
              <FaTwitter className="cursor-pointer" color="#FF932C" size={30} />
              <FaInstagram
                className="cursor-pointer"
                color="#FF932C"
                size={30}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mt-10 flex items-center max-[650px]:flex-col max-[650px]:gap-4">
        <div className="h-[1px] bg-gray-500 w-[100%]"></div>
        <p className="text-white text-center mx-10 flex-shrink-0">
          Copyrights &copy; 2022 Chef Prive - All Rights Reserved
        </p>
        <div className="h-[1px] bg-gray-500 w-[100%]"></div>
      </div>
    </div>
  );
};

export default Footer;
