import React from "react";
import robot1 from "./assets/pictures/bannerWeb.png";

const CaseStudies_UperBanner = () => {
  return (
    <div className="w-full mx-auto">
      <div className="relative">
        <div
          className="absolute w-full h-full flex flex-col justify-center items-center z-10 p-4"
          style={{ background: "rgba(0, 0, 0, 0.4)" }}
        >
          <h3 className="text-center text-4xl text-white my-2 sm:my-3">
            The <span className="text-red-500">Best</span>
          </h3>
          <h3 className="text-center text-3xl text-white my-2 sm:my-3">
            Solutions <span className="text-red-500">Delivered</span>
          </h3>
        </div>
        <img
          className="w-full object-cover"
          style={{ height: "57vh" }}
          src={robot1}
          alt="Innovative Solutions"
        />
      </div>
    </div>
  );
};

export default CaseStudies_UperBanner;
