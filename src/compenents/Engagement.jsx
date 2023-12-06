import React, { useState, useEffect, useRef } from "react";
import Engagement1 from "./assets/pictures/Engagment1.webp";
import { useNavigate } from 'react-router-dom';
import AkiraLogo from './assets/pictures/Icons/AkiraLogo.webp';
import LaptopIcon from './assets/pictures/Icons/laptopicon.webp';
import SearchEngine from './assets/pictures/Icons/searchicon.webp';

const Engagement = () => {
    const navigate = useNavigate();

    const [contentIsVisible, setContentIsVisible] = useState(false);
    const contentRef = useRef(null);

    const [imgIsVisible, setImgIsVisible] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
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
                    alt="AI-web-solutions" 
                />
                <div 
                    ref={contentRef}
                    className={`flex flex-col justify-center ${animationClasses(contentIsVisible)}`}
                >
                    <p className="text-center text-gray-500 font-bold"> Akira Web Solutions </p>
                    <h1 className="text-center md:text-4xl sm:text-3xl text-2xl font-bold py-2"> Our Solutions</h1>
                    <ul className="text-xl ">
                        <li className="border border-red-500 rounded p-2 mb-4 shadow-2xl">
                            <strong className={`text-xl font-bold`}>
                            <img className="h-12 inline-block" src={AkiraLogo} alt="ai-chatbots-nashville" ></img> <span className="text-xl font-bold"> Customer Service AI Chatbots</span>
                            </strong> 
                            <br></br>
                            We excel in building, maintaining, and analyzing advanced chatbots. These digital assistants not only enhance user interactions but also significantly cut operational costs and elevate customer satisfaction. With the power of in-depth data analytics, our chatbots offer valuable insights, allowing you to understand and cater to your clients' needs more effectively, optimizing engagement and fostering loyalty.
                        </li>
                        <br></br>
                        <li className="border border-red-500 rounded p-2 mb-4 shadow-2xl">
                            <strong className={`text-xl font-bold`}>
                                <span className="font-bold text-xl"> <img className="h-12 inline-block" src={SearchEngine} alt="seo-services-nashville" ></img> Search Engine Optimization</span>
                            </strong> 
                            <br></br>
                            Our specialized SEO services are designed to boost your online visibility, ensuring your business consistently achieves higher rankings on search engines.
                        </li>
                        <br></br>
                        <li className="border border-red-500 rounded p-2 mb-4 shadow-2xl">
                            <strong className={`text-xl font-bold`}>
                                <span className="font-bold text-xl"> <img className="h-12 inline-block" src={LaptopIcon} alt="custom-website-build-nashville" ></img> Custom Website Builds</span>
                            </strong> 
                            <br></br>
                            Crafted to mirror your brand, our websites ensure a seamless and engaging user experience tailored to your business needs.
                            <br></br>
                            From streamlined landing pages to intricate online storefronts and API integrations, our solutions scale with your needs. Elevate your digital presence and adapt with growth, ensuring both style and functionality are at the forefront.
                        </li>
                    </ul>

                    <button onClick={handleViewSolutions} className="bg-[#FF0033] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Engagement;
