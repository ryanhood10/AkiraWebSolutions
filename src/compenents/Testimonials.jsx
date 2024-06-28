import React, { useState } from "react";
import BondsSoutheast1 from "./assets/pictures/BondsSoutheastHomepage.png";
import BitcoinBayBot from "./assets/pictures/BitcoinBayBot.png";
import SeaverMarketing1 from "./assets/pictures/SeaverMarketing1.png";
// import BondsSoutheast2 from "./assets/pictures/BondsSoutheastPage2.png";
import PMTwebsite from "./assets/pictures/PMTwebsite.png";
import TrashHaul from "./assets/pictures/NashTrashHaul.png";


const Modal = ({ image, title, content, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div
      className="absolute inset-0 bg-black opacity-50"
      onClick={onClose}
    ></div>
    <div
      className="bg-gray-200 p-4 md:p-8 rounded-xl shadow-lg relative w-full md:w-4/5 h-4/5 overflow-y-auto z-10"
    >
      <h2 className="text-2xl mb-2">{title}</h2>
      <p className="text-lg">{content}</p>
      <button onClick={onClose}               aria-label="Close"
 className="absolute top-2 right-2 text-2xl">
        &times;
      </button>
    </div>
  </div>
);
;

const CaseStudies = () => {
  const [selectedModal, setSelectedModal] = useState(null);

  const getImageForModal = (study) => {
    switch (study) {
      case "kroeger":
        return BondsSoutheast1;
      case "bitcoinbay":
        return BitcoinBayBot;
      case "seaver":
        return SeaverMarketing1;
      case "PMT":
        return PMTwebsite;
      case "trashHaul":
        return TrashHaul;
      default:
        return null;
    }
  };

  const renderModalContent = (study) => {
    switch (study) {
      case "kroeger":
        return (
          <>
            <img
              src={BondsSoutheast1}
              alt="Bonds Southeast Website Redesign"
              className="w-auto rounded mb-4 py-4"
            />
            <h2 className="text-1xl  mb-2">
              Bonds Southeast Inc: A Modern Transformation
            </h2>
            <p className="text-1xl">
              In 20234, we revitalized Bonds Southeast Inc's website, bringing
              it to the forefront of modern design. The last update from years ago left
              it lagging behind current trends, and no longer scoring high on Google's Search Ranking.
              Our redesign focused on user
              experience, mobile responsiveness, and SEO-optimized content. The
              result? A site that not only looks contemporary but also drives
              more organic traffic and engages users effectively. This
              transformation ensures Bonds Southeast Inc stands out in today's
              competitive bonds market.
            </p>
            <br></br>
            <p>
              <a
                href="https://bondssoutheast.com/"
                className="hover:underline text-blue-500"
              >
                Click Here to See Their Website!{" "}
              </a>{" "}
            </p>
            {/* <img
              src={BondsSoutheast2}
              alt="Bonds Southeast Website Redesign 2"
              className="w-auto rounded mb-4 py-4"
            /> */}

          </>
        );
      case "bitcoinbay":
        return (
          <>
            <img
              src={BitcoinBayBot}
              alt="Bitcoin Bay Website"
              className="w-auto rounded mb-4 py-4"
            />
            <h2 className="text-1xl text-center  pb-2 mb-2">
              Bitcoinbay: AI-Powered Customer Service
            </h2>
            <p className="text-1xl pb-4">
              Bitcoin Bay, a leader in the cryptocurrency sportsbook industry,
              faced challenges in efficiently directing customer inquiries to
              the right personnel. This led to delays in customer support and
              missed opportunities. That's when they turned to our AI-powered
              chatbot solution.
            </p>
            <br></br>
            <p className="text-1xl">
              Our AI-driven chatbot is designed to swiftly address customer
              queries and guide them to the right personnel, available 24/7.
              This not only enhances the user experience but also streamlines
              customer support operations. The results were remarkable.
            </p>
            <br></br>
            <p className="text-1xl">
              With our solution in place, Bitcoin Bay now provides its clients
              with faster solutions to their inquiries, resulting in increased
              customer satisfaction and higher sales through improved account
              management. To further enhance performance, we continuously refine
              the chatbot's interactions based on data analytics.
            </p>
            <br></br>
            <p>
              <a
                href="https://bitcoinbay.com"
                className="hover:underline  text-blue-500"
              >
                See Their Website!
              </a>
            </p>
          </>
        );
      case "seaver":
        return (
          <>
            <img
              src={SeaverMarketing1}
              alt="Seaver Marketing Website"
              className="w-auto rounded mb-4 py-4"
            />
            <h2 className="text-1xl  text-center pb-2 mb-2">
              Seaver Marketing Group: A Digital Revamp
            </h2>
            <p className="text-1xl">
              Seaver Marketing Group, a leader in the marketing industry,
              embarked on a transformational journey with us. They didn't have
              an online presence, but we crafted a website that goes beyond
              aesthetics—it's a conversion powerhouse.
            </p>
            <br></br>
            <p className="text-1xl">
              Our website design is strategically optimized with clear and
              compelling Call-to-Actions (CTAs) that guide visitors towards
              booking meetings and engaging with their services. Every element
              is meticulously designed for maximum engagement and user
              experience.
            </p>
            <br></br>
            <p className="text-1xl">
              But it doesn't stop at visual appeal. We fortified Seaver
              Marketing Group's online presence with robust search engine
              optimization (SEO). This ensures that they not only look great
              online but also rank prominently in search engine results. The
              result? A consistent stream of potential clients discovering their
              services and taking action.
            </p>
            <br></br>
            <p className="text-1xl">
              To empower Seaver Marketing Group further, we integrated Google
              Analytics to track website traffic, providing invaluable insights
              into user behavior and performance. Additionally, we seamlessly
              integrated Calendly, allowing visitors to book meetings directly
              on the site, making the engagement process effortless.
            </p>
            <br></br>
            <p>
              <a
                href="https://seavermarketing.com/"
                className="hover:underline text-lg  text-blue-500"
              >
                See Their Website!
              </a>
            </p>
          </>
        );
      case "trashHaul":
        return (
          <>
            <img
              src={TrashHaul}
              alt="Nashville Trash Haul Website"
              className="w-auto rounded mb-4 py-4"
            />
            <h2 className="text-1xl  mb-2">
              Nashville Trash Haul: A Dynamic Website
            </h2>
            <p className="text-1xl">
              For Nashville Trash Haul, we created a website that brings visual
              appeal and information at ease with a dynamic website that reads
              well on mobile and on computer, giving them a stunning and
              professional online appearance. Beyond aesthetics, we fortified
              their online presence with robust search engine optimization,
              ensuring they rank prominently and attract a consistent stream of
              potential clients.
            </p>
            <br></br>
            <p>
              <a
                href="https://trash-haul-nash.web.app/"
                className="hover:underline text-lg text-blue-500"
              >
                See Their Website!
              </a>
            </p>
          </>
        );
      case "PMT":
        return (
          <>
            <img
              src={PMTwebsite}
              alt="PMT Site Nashville"
              className="w-auto rounded mb-4 py-4"
            />
            <h2 className="text-1xl  mb-2">
              PMT Site: Growing an Online Presence
            </h2>
            <p className="text-1xl">
              For PMT site, we crafted a website that's fortified their online
              presence with robust search engine optimization, style, and clear
              call-to-action to sell their services. We ensure that they rank
              prominently on online searches and attract a consistent stream of
              potential clients. Their website features{" "}
              <span className="">Social Sharing,</span>{" "}
              <span className="">Google Analytics,</span> and{" "}
              <span className="">Google Ads Tracking.</span>
            </p>
            <br></br>
            <p>
              <a
                href="https://pmt-site-nashville.web.app/"
                className="hover:underline text-lg text-blue-500"
              >
                See Their Website!
              </a>
            </p>
          </>
        );
      default:
        return null;
    }
  };

  const caseStudies = [
    {
      id: "kroeger",
      image: BondsSoutheast1,
      alt: "Kroeger Real Estate Website Redesign",
      title: "Kroeger Real Estate: A Modern Transformation",
      description:
        "In 2023, we revitalized the Kroeger Real Estates website, bringing it to the forefront of modern design...",
    },
    {
      id: "bitcoinbay",
      image: BitcoinBayBot,
      alt: "Bitcoin Bay Website",
      title: "Bitcoinbay: AI-Powered Customer Service",
      description:
        "We introduced an AI-driven chatbot for Bitcoinbay, designed to swiftly address customer queries...",
    },
    {
      id: "seaver",
      image: SeaverMarketing1,
      alt: "Seaver Marketing Website",
      title: "Seaver Marketing Group: A Digital Revamp",
      description:
        "For Seaver Marketing Group, we crafted a website that's more than just visually appealing—it's a conversion machine...",
    },
    {
      id: "trashHaul",
      image: TrashHaul,
      alt: "Nashville Trash Haul Website",
      title: "Nashville Trash Haul: A Dynamic Website",
      description:
        "For Nashville Trash Haul, we created a website that brings visual appeal and information at ease...",
    },
    {
      id: "PMT",
      image: PMTwebsite,
      alt: "PMT Site Nashville",
      title: "PMT Site: Growing an Online Presence",
      description:
        "For PMT site, we crafted a website that's fortified their online presence with robust search engine optimization...",
    },
  ];

  return (
    <div className="py-8 px-4 md:px-12">
      <h1 className="text-1xl sm:text-1xl md:text-2xl lg:text-3xl text-center  mb-10">
        Click to Read these Case Studies!
      </h1>

      {selectedModal && (
        <Modal
          image={getImageForModal(selectedModal)}
          content={renderModalContent(selectedModal)}
          onClose={() => setSelectedModal(null)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            onClick={() => setSelectedModal(study.id)}
            className="group rounded-lg bg-white p-6 border border-gray-200 shadow-xl hover:shadow-md transform hover:-translate-y-1 transition cursor-pointer"
          >
            <img
              src={study.image}
              alt={study.alt}
              className="w-full h-56 object-cover rounded mb-4"
            />
            <h2 className="text-1xl sm:text-1xl md:text-1xl lg:text-1xl mb-2">
              {study.title}
            </h2>
            <p className="text-gray-500 group-hover:text-gray-900 transition">
              {study.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
