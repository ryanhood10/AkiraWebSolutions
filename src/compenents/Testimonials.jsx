import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import KroegerRealEstate from './assets/pictures/KroegerRealEstate.png';
import BitcoinBayBot from './assets/pictures/BitcoinBayBot.png';
import SeaverMarketing1 from './assets/pictures/SeaverMarketing1.png';
import KroegerRealEstate2 from './assets/pictures/KroegerRealEstate2.png';
import PMTwebsite from './assets/pictures/PMTwebsite.png';
import TrashHaul from './assets/pictures/NashTrashHaul.png';


const Modal = ({ image, title, content, onClose }) => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 rounded-xl">
      <div className="absolute top-0 left-0 w-full h-full rounded-xl" onClick={onClose}></div>
      <div 
          className="bg-gray-200 p-8 rounded-xl shadow-lg relative w-4/5 h-4/5 overflow-y-auto z-10" // Added z-index here
      >
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className='text-xl'>{content}</p>
          <button onClick={onClose} className="absolute top-2 right-2 text-xl">&times;</button>
      </div>
  </div>
);



const CaseStudies = () => {
    const navigate = useNavigate();

    const [selectedModal, setSelectedModal] = useState(null);

    const getImageForModal = (study) => {
      switch (study) {
          case 'kroeger':
              return KroegerRealEstate;
          case 'bitcoinbay':
              return BitcoinBayBot;
          case 'seaver':
              return SeaverMarketing1;
              case 'PMT':
                return PMTwebsite;
                case 'trashHaul':
                    return TrashHaul;
          default:
              return null;
      }
  };

  const handleViewContact = () => {
    navigate('/Contact');
};

    const renderModalContent = (study) => {
        switch (study) {
            case 'kroeger':
                return (
                    <>
                        <img src={KroegerRealEstate} alt="Kroeger Real Estate Website Redesign" className="w-auto rounded mb-4 py-4"/>
                        <img src={KroegerRealEstate2} alt="Kroeger Real Estate Website Redesign 2" className="w-auto rounded mb-4 py-4"/>
                        <h2 className="text-2xl font-bold mb-2">Kroeger Real Estate: A Modern Transformation</h2>
                        <p className="text-2xl">In 2023, we revitalized the Kroeger Real Estates website, bringing it to the forefront of modern design.
                         The last update in 2014 left it lagging behind current trends. Our redesign focused on user experience, mobile responsiveness, and SEO-optimized content.
                          The result? A site that not only looks contemporary but also drives more organic traffic and engages users effectively.
                           This transformation ensures Kroeger Real Estates stands out in today's competitive real estate market.</p>
                        <br></br>
                        <p><a href="https://kroeger-real-estate-ee7b62451f9f.herokuapp.com/" className='hover:underline text-blue-500'>Click Here to See Their Website! </a> </p>
                    </>
                );
            case 'bitcoinbay':
                return (
                    <>
                        <img src={BitcoinBayBot} alt="Bitcoin Bay Website" className="w-auto rounded mb-4 py-4"/>
                        <h2 className="text-3xl font-bold mb-2">Bitcoinbay: AI-Powered Customer Service</h2>
                        <p className="text-2xl">We introduced an AI-driven chatbot for Bitcoinbay, 
                        designed to swiftly address customer queries and guide them to the right personnel.
                         This not only enhanced user experience but also streamlined support. Leveraging data analytics, 
                         we continuously refine the bot's interactions, ensuring customer satisfaction remains at its peak.
                         The future of customer support is here, and Bitcoinbay is leading the charge.</p>
                        <br></br>
                        <p><a href="https://bitcoinbay.com" className='hover:underline text-blue-500'>See Their Website!</a></p>
                    </>
                );
                case 'seaver':
                    return (
                        <>
                           <img src={SeaverMarketing1} alt="Seaver Marketing Website" className="w-auto rounded mb-4 py-4"/>
                            <h2 className="text-3xl font-bold mb-2">Seaver Marketing Group: A Digital Revamp</h2>
                            <p className="text-2xl">For Seaver Marketing Group, we crafted a website that's more than just visually appealing—it's a conversion machine.
                             Designed to guide visitors towards booking meetings, every element is optimized for engagement. 
                             Beyond aesthetics, we fortified their online presence with robust search engine optimization,
                              ensuring they rank prominently and attract a consistent stream of potential clients.</p>
                            <br></br>
                            <p><a href="https://seaver-marketing-group.web.app/" className='hover:underline text-lg text-blue-500'>See Their Website!</a></p>
                        </>
                    ); 
                      case 'trashHaul':
                    return (
                        <>
                           <img src={TrashHaul} alt="Nashville Trash Haul Website" className="w-auto rounded mb-4 py-4"/>
                            <h2 className="text-3xl font-bold mb-2">Nashville Trash Haul: A Dynamic Website</h2>
                            <p className="text-2xl">For Nashville Trash Haul, we created a website that brings visual appeal and information at ease 
                            with a dynamic website that reads well on mobile and on computer, giving them a stunning and professional online appearance.
                             Beyond aesthetics, we fortified their online presence with robust search engine optimization,
                              ensuring they rank prominently and attract a consistent stream of potential clients.</p>
                            <br></br>
                            <p><a href="https://trash-haul-nash.web.app/" className='hover:underline text-lg text-blue-500'>See Their Website!</a></p>
                        </>
                    );
                    case 'PMT':
                        return (
                            <>
                               <img src={PMTwebsite} alt="PMT Site Nashville" className="w-auto rounded mb-4 py-4"/>
                                <h2 className="text-3xl font-bold mb-2">PMT Site: Growing an Online Presence</h2>
                                <p className="text-2xl">For PMT site, we crafted a website that's fortified their online presence with 
                                robust search engine optimization, style, and clear call-to-action to sell their services.
                                  We ensure that they rank prominently on online searches and attract a consistent stream of potential clients.
                                  Their website features Social Sharing, Google Analytics, and Google Ads Tracking.</p>
                                <br></br>
                                <p><a href="https://pmt-site-nashville.web.app/" className='hover:underline text-lg text-blue-500'>See Their Website!</a></p>
                            </>
                        );
            default:
                return null;
        }
    };

    return (
<div>

        <section className="relative">
        <div className='py-4 px-16'>
    <p className='py-4 px-4 text-xl bg-gray-100 text-center shadow-black shadow-md '>
        🚀 Unlock Your Business's Digital Potential with Akira Web Solutions! 🚀
        <br></br>
        <br></br>
        Discover How We've Transformed Businesses: Dive into Our Case Studies!
        From AI chatbots that boost customer engagement and support to bespoke website designs and strategic search engine optimization, our expertise becomes your competitive advantage.
        <br></br>
        <br></br>
        <span className=' text-xl text-center font-bold'>Schedule a Meeting Today to Harness Exceptional Value for Your Business</span>
        <div className='items-center'>
            <button onClick={handleViewContact} className="bg-[#FF0033] w-[180px] rounded-md font-medium my-4 mx-auto py-2 text-white hover:bg-purple-400">Contact Us</button>
        </div>
        <br></br>
        Explore Our Success Stories below to Witness Our Impact on Web Visibility and Sales!
    </p>
</div>


            <h1 className='text-4xl text-center font-bold py-4'>Click to Read these Case Studies!</h1>


             {selectedModal && <Modal  image={getImageForModal(selectedModal)} content={renderModalContent(selectedModal)} onClose={() => setSelectedModal(null)} />}
            <div className="flex justify-center space-x-4 ">
      
                <div 
                    className="w-1/6 h-auto bg-gray-100 p-4 rounded cursor-pointer shadow-black shadow-sm hover:shadow-xl"
                    onClick={() => setSelectedModal('bitcoinbay')}
                >
                    <img src={BitcoinBayBot} alt="Bitcoinbay AI Chatbot Solution" className="w-full h-auto rounded mb-4"/>
                    <h2 className="text-2xl font-bold mb-2">Bitcoinbay: AI-Powered Customer Service</h2>
                    <p>We introduced an AI-driven chatbot for Bitcoinbay...</p>
                </div>

                <div 
                    className="w-1/6 h-auto bg-gray-100 p-4 rounded cursor-pointer shadow-black shadow-sm hover:shadow-xl"
                    onClick={() => setSelectedModal('seaver')}
                >
                    <img src={SeaverMarketing1} alt="SeaverMarketingGroup Website Design" className="w-full h-auto rounded mb-4"/>
                    <h2 className="text-2xl font-bold mb-2">Seaver Marketing Group: A Digital Revamp</h2>
                    <p>For SeaverMarketingGroup, we crafted a website...</p>
                </div>
            </div>
         

        </section>


        <section className="relative">
<br></br>
     

             {selectedModal && <Modal  image={getImageForModal(selectedModal)} content={renderModalContent(selectedModal)} onClose={() => setSelectedModal(null)} />}
            <div className="flex justify-center space-x-4 ">
                <div 
                    className="w-1/6 h-auto bg-gray-100 p-4 rounded cursor-pointer shadow-black shadow-sm hover:shadow-xl"
                    onClick={() => setSelectedModal('kroeger')}
                >
                    <img src={KroegerRealEstate} alt="Kroeger Real Estate Website Redesign" className="w-full h-auto rounded mb-4"/>
                    <h2 className="text-2xl font-bold mb-2">Kroeger Real Estate: A Modern Transformation</h2>
                    <p>In 2023, we revitalized the Kroeger Real Estates website, bringing it to the forefront of modern design...</p>
                </div>

                <div 
                    className="w-1/6 h-auto bg-gray-100 p-4 rounded cursor-pointer shadow-black shadow-sm hover:shadow-xl"
                    onClick={() => setSelectedModal('PMT')}
                >
                    <img src={PMTwebsite} alt="PMT Site Nashville" className="w-full h-auto rounded mb-4"/>
                    <h2 className="text-2xl font-bold mb-2">PMT Site: Growing an Online Presence </h2>
                    <p>For PMT site, we crafted a website that's fortified their online presence with ...</p>
                </div>

                <div 
                    className="w-1/6 h-auto bg-gray-100 p-4 rounded cursor-pointer shadow-black shadow-sm hover:shadow-xl"
                    onClick={() => setSelectedModal('trashHaul')}
                >
                    <img src={TrashHaul} alt="Nashville Trash Haul Website Design" className="w-full h-auto rounded mb-4"/>
                    <h2 className="text-2xl font-bold mb-2">Nashville Trash Haul: A Dynamic Website</h2>
                    <p>For Nashville Trash Haul, we created a website that brings visual appeal and information at ease 
                            with ...</p>
                </div>
            </div>
         

        </section>


       </div> 
    );
}

export default CaseStudies;
