"use client";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

function Footer() {
  const router = useRouter();

  const [cookies, setCookies] = React.useState([]);

  const [productId, setProductId] = React.useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3005/api/v1/web/footerProductDetails",
        {}
      );
      setCookies(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  console.log(cookies);

  const productsByCategory = {};

  cookies?.forEach((product) => {
    const categoryType = product?.categoryType || "Other"; // Default category for products without a categoryType
    if (!productsByCategory[categoryType]) {
      productsByCategory[categoryType] = [];
    }
    productsByCategory[categoryType].push(product);
  });

  console.log(productsByCategory);

  return (
    <div className="flex flex-col h-full mx-auto border-t pt-4 text-[#553230]">
      <div className="">
        {/* <div className="mt-5 flex flex-col items-center justify-center">
          <img
            src="https://res.cloudinary.com/dd0nu3k5p/image/upload/v1691349695/Mingmorsels_large_h7qd6k.svg"
            className="w-24 sm:w-32"
            alt="image"
          />
          <p className="mt-5 w-[90vw] text-center sm:max-w-[600px]">
            Experience the divine flavors and the sheer delight that our
            products bring. It's time to savor the sweetness and make every
            moment an unforgettable celebration. Choose us, and let your special
            events be adorned with the irresistible magic of our confectionery
            creations
          </p>
        </div> */}
        <div className="mx-auto my-10 grid w-[95vw] grid-cols-2 place-items-center items-start gap-2 sm:gap-5 sm:grid-cols-4">
          <div className="max-w-[150px]">
            <p className="font-semibold">Cookies</p>
            <ul>
              {productsByCategory["COOKIES"]?.map((each, index) => {
                return (
                  <li
                    key={index}
                    className="py-2 text-xs sm:text-sm cursor-pointer hover:underline"
                  >
                    <p
                      href="/product"
                      onClick={() => {
                        alert(each?.productId);
                      }}
                    >
                      {each?.name}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="max-w-[150px]">
            <p className="font-semibold">Muffins</p>
            <ul>
              {productsByCategory["MUFFINS"]?.map((each, index) => {
                return (
                  <li
                    key={index}
                    className="py-2 text-xs sm:text-sm cursor-pointer hover:underline"
                  >
                    <p href="/product" onClick={() => alert(each?.productId)}>
                      {each?.name}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
