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
                    <h2 className="text-3xl text-center font-bold pb-2 mb-2">Bitcoinbay: AI-Powered Customer Service</h2>
                    <p className="text-2xl pb-4">
                        Bitcoin Bay, a leader in the cryptocurrency sportsbook industry, faced challenges in efficiently directing customer inquiries to the right personnel. This led to delays in customer support and missed opportunities. That's when they turned to our AI-powered chatbot solution.
                    </p>
                    <br></br>
                    <p className="text-2xl">
                        Our AI-driven chatbot is designed to swiftly address customer queries and guide them to the right personnel, available 24/7. This not only enhances the user experience but also streamlines customer support operations. The results were remarkable.
                    </p>
                    <br></br>
                    <p className="text-2xl">
                        With our solution in place, Bitcoin Bay now provides its clients with faster solutions to their inquiries, resulting in increased customer satisfaction and higher sales through improved account management. To further enhance performance, we continuously refine the chatbot's interactions based on data analytics.
                    </p>
                    <br></br>
                    <p>
                        <a href="https://bitcoinbay.com" className='hover:underline font-semibold text-blue-500'>See Their Website!</a>
                    </p>
                </>
                
                );
                case 'seaver':
                    return (
                        <>
                        <img src={SeaverMarketing1} alt="Seaver Marketing Website" className="w-auto rounded mb-4 py-4"/>
                        <h2 className="text-3xl font-bold text-center pb-2 mb-2">Seaver Marketing Group: A Digital Revamp</h2>
                        <p className="text-2xl">
                            Seaver Marketing Group, a leader in the marketing industry, embarked on a transformational journey with us. They didn't have an online presence, but we crafted a website that goes beyond aesthetics—it's a conversion powerhouse.
                        </p>
                        <br></br>
                        <p className="text-2xl">
                            Our website design is strategically optimized with clear and compelling Call-to-Actions (CTAs) that guide visitors towards booking meetings and engaging with their services. Every element is meticulously designed for maximum engagement and user experience.
                        </p>
                        <br></br>
                        <p className="text-2xl">
                            But it doesn't stop at visual appeal. We fortified Seaver Marketing Group's online presence with robust search engine optimization (SEO). This ensures that they not only look great online but also rank prominently in search engine results. The result? A consistent stream of potential clients discovering their services and taking action.
                        </p>
                        <br></br>
                        <p className="text-2xl">
                            To empower Seaver Marketing Group further, we integrated Google Analytics to track website traffic, providing invaluable insights into user behavior and performance. Additionally, we seamlessly integrated Calendly, allowing visitors to book meetings directly on the site, making the engagement process effortless.
                        </p>
                        <br></br>
                        <p>
                            <a href="https://seavermarketing.com/" className='hover:underline text-lg font-semibold text-blue-500'>See Their Website!</a>
                        </p>
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
                                  Their website features <span className='font-bold'>Social Sharing,</span> <span className='font-bold'>Google Analytics,</span> and <span className='font-bold'>Google Ads Tracking.</span></p>
                                <br></br>
                                <p><a href="https://pmt-site-nashville.web.app/" className='hover:underline text-lg text-blue-500'>See Their Website!</a></p>
                            </>
                        );
            default:
                return null;
        }
    };

    const caseStudies = [
        {
          id: 'kroeger',
          image: KroegerRealEstate,
          alt: 'Kroeger Real Estate Website Redesign',
          title: 'Kroeger Real Estate: A Modern Transformation',
          description: "In 2023, we revitalized the Kroeger Real Estates website, bringing it to the forefront of modern design...",
        },
        {
          id: 'bitcoinbay',
          image: BitcoinBayBot,
          alt: 'Bitcoin Bay Website',
          title: 'Bitcoinbay: AI-Powered Customer Service',
          description: "We introduced an AI-driven chatbot for Bitcoinbay, designed to swiftly address customer queries...",
        },
        {
          id: 'seaver',
          image: SeaverMarketing1,
          alt: 'Seaver Marketing Website',
          title: 'Seaver Marketing Group: A Digital Revamp',
          description: "For Seaver Marketing Group, we crafted a website that's more than just visually appealing—it's a conversion machine...",
        },
        {
          id: 'trashHaul',
          image: TrashHaul,
          alt: 'Nashville Trash Haul Website',
          title: 'Nashville Trash Haul: A Dynamic Website',
          description: "For Nashville Trash Haul, we created a website that brings visual appeal and information at ease...",
        },
        {
          id: 'PMT',
          image: PMTwebsite,
          alt: 'PMT Site Nashville',
          title: 'PMT Site: Growing an Online Presence',
          description: "For PMT site, we crafted a website that's fortified their online presence with robust search engine optimization...",
        },
      ];
      

    return (
<div className=' py-2 px-2'>
  <h1 className="text-4xl text-center font-bold py-4">
    Click to Read these Case Studies!
  </h1>

  {selectedModal && (
    <Modal
      image={getImageForModal(selectedModal)}
      content={renderModalContent(selectedModal)}
      onClose={() => setSelectedModal(null)}
    />
  )}

  <div className="overflow-x-auto">
    <div className="flex justify-center space-x-4 flex-col md:flex-row items-center"> {/* Center on mobile */}
      {caseStudies.map((study) => (
        <div
          key={study.id}
          className="w-64 h-auto rounded-3xl bg-white p-4 border-black  cursor-pointer shadow-black shadow-sm hover:shadow-xl hover:focus:[110%] mb-4" // Add margin-bottom for spacing
          onClick={() => setSelectedModal(study.id)}
        >
          <img
            src={study.image}
            alt={study.alt}
            className="w-full h-auto rounded mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
          <p>{study.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>



    );
}

export default CaseStudies;
