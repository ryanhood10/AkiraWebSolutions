import React, { useState, useEffect, useRef } from "react";
import Engagement1 from "./assets/pictures/Engagment1.webp";
import { useNavigate } from "react-router-dom";
import AkiraLogo from "./assets/pictures/Icons/AkiraLogoTransparent.webp";
import LaptopIcon from "./assets/pictures/Icons/laptopicon.webp";
import SearchEngine from "./assets/pictures/Icons/searchicon.webp";
import Ecommerce from "./assets/partnerLogos/ShopifyLogoBlack.webp";

const Engagement = () => {
  const navigate = useNavigate();

  const [contentIsVisible, setContentIsVisible] = useState(false);
  const contentRef = useRef(null);

  const [imgIsVisible, setImgIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === contentRef.current && entry.isIntersecting) {
          setContentIsVisible(true);
        } else if (entry.target === imgRef.current && entry.isIntersecting) {
          setImgIsVisible(true);
        }
      });
    });

    const currentContentRef = contentRef.current;
    const currentImgRef = imgRef.current;

    if (currentContentRef) {
      observer.observe(currentContentRef);
    }

    if (currentImgRef) {
      observer.observe(currentImgRef);
    }

    return () => {
      if (currentContentRef) {
        observer.unobserve(currentContentRef);
      }
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, []);

  const handleViewSolutions = () => {
    navigate("/solutions");
  };

  const animationClasses = (isVisible) =>
    `transform transition duration-1000 ease-in-out ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`;

  return (
    <div className="w-full  py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div>
      <p className="text-center text-gray-600 text-1xl">
            Akira Web Solutions
          </p>
          <h1 className="text-center md:text-4xl text-2xl  text-gray-800">
            Our Solutions
          </h1>
          <p className="text-gray-600 mt-2">
          Our dynamic web solutions combine stunning design, powerful SEO, and user-friendly E-commerce stores built on Shopify. 
           Plus, leverage the power of AI chatbots to engage visitors 24/7 and streamline operations.
              </p>
             
        <img
          ref={imgRef}
          className={`w-full h-auto mx-auto my-4 rounded-lg shadow-lg ${animationClasses(
            imgIsVisible
          )}`}
          src={Engagement1}
          alt="AI-web-solutions"
        />
        <div
          ref={contentRef}
          className={`flex flex-col space-y-4 ${animationClasses(
            contentIsVisible
          )}`}
        >
           </div>
           </div>

          

          <div className="space-y-4">
          <div className="bg-white border border-red-500 rounded-lg p-4 shadow-xl">
              <div className="flex items-center space-x-4">
                <img
                  className="h-12"
                  src={SearchEngine}
                  alt="seo-services-nashville"
                />
                <h2 className="text-1xl ">Dominate Your Niche's Google Searches with Expert SEO & Web Design
</h2>
              </div>
              <p className="text-gray-600 mt-2">
              Craft a stunning website that ranks high on Google. 
              Our SEO experts in the greater Nashville area ensure your business is seen by 
              local & national customers.  Get a free quote today!
              </p>
            </div>
            <div className="bg-white border border-red-500 rounded-lg pt-2 shadow-xl">
              <div className="flex items-center space-x-4">
                <img
                  className="h-12"
                  src={AkiraLogo}
                  alt="ai-chatbots-nashville"
                />
                <h2 className="text-1xl ">Customer Service AI Chatbots</h2>
              </div>
              <p className="text-gray-600 mt-2">
              Engage customers 24/7 and cut costs. Our AI chatbots answer questions, improve satisfaction, and provide valuable insights. 


              </p>
            </div>
           
            <div className="bg-white border border-red-500 rounded-lg p-4 shadow-xl">
              <div className="flex items-center space-x-4">
                <img
                  className="h-12"
                  src={Ecommerce}
                  alt="custom-ecommerce-build-nashville"
                />
                <h2 className="text-1xl ">Sell more online with a powerful Shopify store built by Akira Web Solutions</h2>
              </div>
              <p className="text-gray-600 mt-2">
              Sell more online with a powerful Shopify store built by Akira Web Solutions. 
              Reach new customers and boost your sales!  Free Quote Today!
              </p>
            </div>
            <div className="bg-white border border-red-500 rounded-lg p-4 shadow-xl">
              <div className="flex items-center space-x-4">
                <img
                  className="h-12"
                  src={LaptopIcon}
                  alt="custom-website-build-nashville"
                />
                <h2 className="text-1xl ">Streamline and Automate with Custom Apps
</h2>
              </div>
              <p className="text-gray-600 mt-2">
              Akira Web Solutions builds custom solutions for your unique needs. Want to know how technology can improve your business? Free Consultation Today!
              </p>
            </div>
            <div className="flex justify-center items-center">
            <button
            aria-label="Learn More"
            onClick={handleViewSolutions}
            style={{ marginTop: "40px" }}
            className="bg-red-500 hover:bg-red-600 text-white  py-2 px-6 rounded-lg transition duration-300 mx-auto "
          >
            Learn More
          </button></div>
          </div>

      </div>
    </div>
  );
};

export default Engagement;
