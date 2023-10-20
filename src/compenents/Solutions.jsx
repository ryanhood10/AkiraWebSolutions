import React, { useState, useEffect, useRef } from "react";
import Laptop from "./assets/pictures/webPhoto1.png";
import { useNavigate } from 'react-router-dom';
import EmailMarketing from './assets/pictures/webPhoto2.png';
import CustomWebsite from './assets/pictures/CustomWebsite2.png';
import SearchEngine from './assets/pictures/SearchEngine3.png';

function useVisible(initialVisibility = false) {
    const [isVisible, setIsVisible] = useState(initialVisibility);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return [ref, isVisible];
}

const Solutions = () => {
    const navigate = useNavigate();

    const [contentRef, contentVisible] = useVisible();
    const [emailDivRef, emailDivVisible] = useVisible();
    const [emailImgRef, emailImgVisible] = useVisible();
    const [seoDivRef, seoDivVisible] = useVisible();
    const [seoImgRef, seoImgVisible] = useVisible();
    const [websiteDivRef, websiteDivVisible] = useVisible();
    const [websiteImgRef, websiteImgVisible] = useVisible();

    // const handleViewSolutions = () => {
    //     navigate('/solutions');
    // };

    const handleViewContact = () => {
        navigate('/connect');
    };

    const animationClasses = (isVisible) => 
        `transform transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`;

    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 space-x-5 space-y-5">
                <img ref={contentRef} className={`w-[500px] mx-auto my-4 rounded-xl ${animationClasses(contentVisible)}`} src={Laptop} alt="/" />
                <div ref={contentRef} className={`flex flex-col justify-center space-y-3 ${animationClasses(contentVisible)}`}>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"> Our Solutions</h1>
                    <p className="md:text-2xl sm:text-xl text-l py-2"> 
                    Elevate your business to new heights with our innovative solutions.
                     Implement the power of <span className="font-bold">AI chatbots</span> and <span className="font-bold">data analytics</span> to automate and refine your customer service, 
                     gain deeper understanding of your clients and boost customer satisfaction. 
                    <br></br>
                     Our custom website builds not only enhance your online presence but also fortify your brand's image. 
                     With search engine optimized text and layout, we ensure you shine brighter on Google.
                      Witness the transformation our products can bring.
                      <br></br>
                     <span className="font-bold">Book a call today and let's chart a path to your business's brighter future.</span>
                    </p>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 space-x-5 space-y-5">
                <div ref={emailDivRef} className={`flex flex-col justify-center ${animationClasses(emailDivVisible)}`}>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"> Customized AI Chatbots</h1>
                    <p className="md:text-2xl sm:text-xl text-l py-2"> 
                    Our AI chatbots, expertly trained for customer service and marketing, respond swiftly and accurately to client questions.
                     Opt for training based on your data, collaborate with us for tailored solutions, or both. 
                     With our in-depth data analytics, monitor client conversations to enhance satisfaction by better understanding your customers. 
                     The result? Significant time and money savings. 
                     Plus, for Salesforce users, seamless integration awaits. 
                    Choose Akira Web Solutions for AI-driven excellence.
                    </p>
                    <button onClick={handleViewContact} className="bg-[#FF0033] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:bg-purple-400">Contact Us</button>
                </div>
                <img ref={emailImgRef} className={`w-[500px] mx-auto my-4 rounded-xl ${animationClasses(emailImgVisible)}`} src={EmailMarketing} alt="/" />
            </div>

            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 space-x-5 space-y-5">
                <div ref={seoDivRef} className={`flex flex-col justify-center ${animationClasses(seoDivVisible)}`}>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"> Search Engine Optimization</h1>
                    <p className="md:text-2xl sm:text-xl text-l py-2"> 
                        Boost your online visibility through our comprehensive Search Engine Optimization (SEO) services.
                        Our experts will fine-tune your website, ensuring it ranks higher on search engine results pages.
                        By optimizing keywords, improving site structure, and enhancing content, we drive organic traffic to your platform. 
                        Experience increased exposure and attract a wider audience, all while we manage the complexities of SEO. 
                        Elevate your online presence with our proven strategies and watch your visibility soar on the internet.
                    </p>
                    <button onClick={handleViewContact} className="bg-[#FF0033] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:bg-purple-400">Contact Us</button>
                </div>
                <img ref={seoImgRef} className={`w-[500px] mx-auto my-4 rounded-xl ${animationClasses(seoImgVisible)}`} src={SearchEngine} alt="/" />
            </div>

            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 space-x-5 space-y-5">
                <img ref={websiteImgRef} className={`w-[500px] sm:w-full mx-auto my-4 rounded-xl ${animationClasses(websiteImgVisible)}`} src={CustomWebsite} alt="/" />
                <div ref={websiteDivRef} className={`flex flex-col justify-center ${animationClasses(websiteDivVisible)}`}>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"> Custom Website Builds</h1>
                    <p className="md:text-2xl sm:text-xl text-l py-2"> 
                        Acquire a tailor-made website that encapsulates your unique brand essence. 
                        Our services encompass website design and development. 
                        We will craft customized features to fulfill your specific needs.
                        In today's digital landscape, a compelling landing page is indispensable for every company.
                        Let us create an online presence that truly reflects your business while incorporating essential website features.
                    </p>
                    <button onClick={handleViewContact} className="bg-[#FF0033] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:bg-purple-400">Contact Us</button>
                </div>
            </div>
        </div>
    );
}

export default Solutions;
