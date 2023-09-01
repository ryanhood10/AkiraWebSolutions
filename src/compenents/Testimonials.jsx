import React, { useState } from 'react';
import KroegerRealEstate from './assets/pictures/KroegerRealEstate.png';
import BitcoinBayBot from './assets/pictures/BitcoinBayBot.png';
import SeaverMarketing1 from './assets/pictures/SeaverMarketing1.png';

const Modal = ({ image, title, content, onClose }) => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 rounded-xl">
      <div className="bg-white p-8 rounded shadow-lg relative w-4/5 h-4/5 overflow-y-auto">
          <img src={image} alt={title} className="w-full h-1/2 object-contain rounded-t mb-4 rounded-xl"/>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className='text-xl'>{content}</p>
          <button onClick={onClose} className="absolute top-2 right-2 text-xl">&times;</button>
      </div>
      <div className="absolute top-0 left-0 w-full h-full" onClick={onClose}></div>
  </div>
);


const CaseStudies = () => {
    const [selectedModal, setSelectedModal] = useState(null);

    const getImageForModal = (study) => {
      switch (study) {
          case 'kroeger':
              return KroegerRealEstate;
          case 'bitcoinbay':
              return BitcoinBayBot;
          case 'seaver':
              return SeaverMarketing1;
          default:
              return null;
      }
  };
  
  const getTitleForModal = (study) => {
      switch (study) {
          case 'kroeger':
              return "Kroeger Real Estates: A Modern Transformation";
          case 'bitcoinbay':
              return "Bitcoinbay: AI-Powered Customer Service";
          case 'seaver':
              return "SeaverMarketingGroup: A Digital Revamp";
          default:
              return null;
      }
  };
  


    const renderModalContent = (study) => {
        switch (study) {
            case 'kroeger':
                return (
                    <>
                        <h2 className="text-2xl font-bold mb-2">Kroeger Real Estates: A Modern Transformation</h2>
                        <p>In 2023, we revitalized the Kroeger Real Estates website, bringing it to the forefront of modern design. The last update in 2014 left it lagging behind current trends. Our redesign focused on user experience, mobile responsiveness, and SEO-optimized content. The result? A site that not only looks contemporary but also drives more organic traffic and engages users effectively. This transformation ensures Kroeger Real Estates stands out in today's competitive real estate market.</p>
                        <p><a href="https://kroeger-real-estate-ee7b62451f9f.herokuapp.com/">See Their Website!</a></p>
                    </>
                );
            case 'bitcoinbay':
                return (
                    <>
                        <h2 className="text-2xl font-bold mb-2">Bitcoinbay: AI-Powered Customer Service</h2>
                        <p>We introduced an AI-driven chatbot for Bitcoinbay, designed to swiftly address customer queries and guide them to the right personnel. This not only enhanced user experience but also streamlined support. Leveraging data analytics, we continuously refine the bot's interactions, ensuring customer satisfaction remains at its peak. The future of customer support is here, and Bitcoinbay is leading the charge.</p>
                        <p><a href="https:/bitcoinbay.com">See Their Website!</a></p>
                    </>
                );
            case 'seaver':
                return (
                    <>
                        <h2 className="text-2xl font-bold mb-2">SeaverMarketingGroup: A Digital Revamp</h2>
                        <p>For SeaverMarketingGroup, we crafted a website that's more than just visually appealing—it's a conversion machine. Designed to guide visitors towards booking meetings, every element is optimized for engagement. Beyond aesthetics, we fortified their online presence with robust search engine optimization, ensuring they rank prominently and attract a consistent stream of potential clients.</p>
                        <p><a href="https://seaver-marketing-group.web.app/">See Their Website!</a></p>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="relative">
            <h1 className='text-4xl text-center font-bold py-4'>Click to Read these Case Studies!</h1>
             {selectedModal && <Modal  image={getImageForModal(selectedModal)} content={renderModalContent(selectedModal)} onClose={() => setSelectedModal(null)} />}
            <div className="flex justify-center space-x-4">
                <div 
                    className="w-1/3 h-auto bg-gray-100 p-4 rounded cursor-pointer"
                    onClick={() => setSelectedModal('kroeger')}
                >
                    <img src={KroegerRealEstate} alt="Kroeger Real Estate Website Redesign" className="w-full h-auto rounded mb-4"/>
                    <h2 className="text-2xl font-bold mb-2">Kroeger Real Estates: A Modern Transformation</h2>
                    <p>In 2023, we revitalized the Kroeger Real Estates website, bringing it to the forefront of modern design...</p>
                </div>

                <div 
                    className="w-1/3 h-auto bg-gray-100 p-4 rounded cursor-pointer"
                    onClick={() => setSelectedModal('bitcoinbay')}
                >
                    <img src={BitcoinBayBot} alt="Bitcoinbay AI Chatbot Solution" className="w-full h-auto rounded mb-4"/>
                    <h2 className="text-2xl font-bold mb-2">Bitcoinbay: AI-Powered Customer Service</h2>
                    <p>We introduced an AI-driven chatbot for Bitcoinbay...</p>
                </div>

                <div 
                    className="w-1/3 h-auto bg-gray-100 p-4 rounded cursor-pointer"
                    onClick={() => setSelectedModal('seaver')}
                >
                    <img src={SeaverMarketing1} alt="SeaverMarketingGroup Website Design" className="w-full h-auto rounded mb-4"/>
                    <h2 className="text-2xl font-bold mb-2">SeaverMarketingGroup: A Digital Revamp</h2>
                    <p>For SeaverMarketingGroup, we crafted a website...</p>
                </div>
            </div>
        </div>
    );
}

export default CaseStudies;
