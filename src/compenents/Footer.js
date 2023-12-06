import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import iconFacebook from './assets/pictures/Icons/icons_facebook.webp';
import iconLinkedin from './assets/pictures/Icons/Icons_LinkedIn.webp';
import iconEnvelope from './assets/pictures/Icons/Icon_Email.webp';


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

        const currentRef = ref.current; // Store ref.current in a variable

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []); // Add ref to the dependencies array if needed

    return [ref, isVisible];
}

function Footer() {
    const [footerRef, footerVisible] = useVisible();

    const animationClasses = (isVisible) => 
        `transform transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`;

    return (
        <footer ref={footerRef} className={`max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-600 ${animationClasses(footerVisible)}`}>
            <div className='lg:col-span-3 flex justify-between space-x-10'>
                <div>
                    <h1 className='w-full text-3xl font-bold text-[#FF0033]'> Connect with us Further</h1>
                    <p className='py-4'>Connect with us on LinkedIn, Facebook, or send us an email at <span className='font-bold'>connect@akirawebsolutions.com</span></p>
                    <nav>
                        <ul className="flex justify-between md:w-[75%] my-6">
                            <li>
                                <Link to="https://www.linkedin.com/company/akira-web-solutions/">
                                    <img alt='linkedin-marketing-nashville' src={iconLinkedin} size="2x" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.facebook.com/profile.php?id=61550844571239">
                                    <img alt='facebook-marketing-nashville' src={iconFacebook} size="2x" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/connect">
                                    <img alt='email-marketing-nashville' src={iconEnvelope} size="2x" />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='lg:col-span-3 flex justify-between'>
                    <div>
                        <Link to="/solutions" className="text-[#FF0033] text-xl font-bold">
                            Solutions
                        </Link>
                        <ul>
                            <li className='py-2 text-sm'>Customer Service AI Chatbots</li>
                            <li className='py-2 text-sm'>Analytics</li>
                            <li className='py-2 text-sm'>Search Engine Optimization</li>
                            <li className='py-2 text-sm'>Website Customization</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
