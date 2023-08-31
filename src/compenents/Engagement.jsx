import React, { useState, useEffect, useRef } from "react";
import Engagement1 from "./assets/pictures/Engagment1.png";
import { useNavigate } from 'react-router-dom';
import AkiraLogo from './assets/pictures/AkiraLogo.png';
import LaptopIcon from './assets/pictures/laptopicon.png';
import SearchEngine from './assets/pictures/searchicon.png';


const Engagement = () => {
    const navigate = useNavigate();

    const [contentIsVisible, setContentIsVisible] = useState(false);
    const [colorTransition, setColorTransition] = useState(false);
    const contentRef = useRef(null);

    const [imgIsVisible, setImgIsVisible] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === contentRef.current && entry.isIntersecting) {
                    setContentIsVisible(true);
                    setTimeout(() => {
                        setColorTransition(true);
                    }, 3000);
                } else if (entry.target === imgRef.current && entry.isIntersecting) {
                    setImgIsVisible(true);
                }
            });
        });

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (contentRef.current) {
                observer.unobserve(contentRef.current);
            }
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);

    const handleViewSolutions = () => {
        navigate('/solutions');
    };

    const animationClasses = (isVisible) => 
        `transform transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`;

        return (
            <div className="w-full bg-white py-16 px-4">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                    <img 
                        ref={imgRef}
                        className={`w-[500px]  mx-auto my-4 rounded-xl ${animationClasses(imgIsVisible)}`} 
                        src={Engagement1} 
                        alt="/" 
                    />
                    <div 
                        ref={contentRef}
                        className={`flex flex-col justify-center ${animationClasses(contentIsVisible)}`}
                    >
                        <p className="text-center text-gray-500 font-bold"> Akira Web Solutions </p>
                        <h1 className="text-center md:text-4xl sm:text-3xl text-2xl font-bold py-2"> Our Solutions</h1>
                            <ul className="text-xl ">
                                <li className="border border-red-500 rounded p-2 mb-4 shadow-2xl">
                                    <strong className={`text-xl font-bold transition-all duration-[2s] ${colorTransition ? 'text-[#FF0033]' : 'text-black'}`}>
                                        <span className={`${colorTransition ? 'text-2xl duration-[2s]' : ''}`}> <img className="h-12 inline-block" src={LaptopIcon} alt="Laptop Icon" ></img>Custom Website Builds</span>
                                    </strong> 
                                    <br></br>
                                    Crafted to mirror your brand, our websites ensure a seamless and engaging user experience tailored to your business needs.
                                    <br></br>
                                     From streamlined landing pages to intricate online storefronts and API integrations, our solutions scale with your needs. Elevate your digital presence and adapt with growth, ensuring both style and functionality are at the forefront.
                                </li>
                                <br></br>
                                <li className="border border-red-500 rounded p-2 mb-4 shadow-2xl">
                                    <strong className={`text-xl font-bold transition-all duration-[3s] ${colorTransition ? 'text-[#FF0033]' : 'text-black'}`}>
                                        <span className={`${colorTransition ? 'text-2xl duration-[3s]' : ''}`}> <img className="h-12 inline-block" src={SearchEngine} alt="Search Engine" ></img>Search Engine Optimization</span>
                                    </strong> 
                                    <br></br>
                                    Our specialized SEO services are designed to boost your online visibility, ensuring your business consistently achieves higher rankings on search engines.
                                </li>
                                <br></br>
                                <li className="border border-red-500 rounded p-2 mb-4 shadow-2xl">
                                    <strong className={`text-xl font-bold transition-all duration-[4s] ${colorTransition ? 'text-[#FF0033]' : 'text-black'}`}>
                                        <span className={`${colorTransition ? 'text-2xl duration-[4s]' : ''}`}> <img className="h-12 inline-block" src={AkiraLogo} alt="Akira Logo" ></img>Customer Service Chatbots</span>
                                    </strong> 
                                    <br></br>
                                    We excel in building, maintaining, and analyzing advanced chatbots. These digital assistants not only enhance user interactions but also significantly cut operational costs and elevate customer satisfaction. With the power of in-depth data analytics, our chatbots offer valuable insights, allowing you to understand and cater to your clients' needs more effectively, optimizing engagement and fostering loyalty.                                </li>
                            </ul>
        
                        <button onClick={handleViewSolutions} className="bg-[#FF0033] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">Learn More</button>
                    </div>
                </div>
            </div>
        )
        
}

export default Engagement;
