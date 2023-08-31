import React from "react";
import Typed from 'react-typed';

const Hero = () => {

  

    const handleCalendlyClick = (e) => {
        e.preventDefault();
        window.Calendly.initPopupWidget({url: 'https://calendly.com/ryanhood/30min'});
    };

    return (
        <div className="">
            <div className="pt-12 max-w-[800px] mt-[-96px] w-full h-[50vh]  mx-auto text-center flex flex-col justify-center">
                <p className="py-12 text-[#FF0033] text-l font-bold p-2"> <br></br></p> 
                <h1 className="pt-12 md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data.</h1>
                <div>
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Engage your Customers</p>
                    <Typed 
                        strings={['Boost Online Visibility,', 'Engage Clients,', 'Find your Web Solutions']}
                        typeSpeed={120}
                        backSpeed={140}
                        className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                        loop 
                    />
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500 md:pl-4 pl-2">We monitor data analytics to increase your revenue, reach more customers, and keep them engaged.</p>
                <button onClick={handleCalendlyClick} className="bg-[#FF0033] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">Book a Meeting Today!</button>
                <br></br>
            </div>
        </div>
    )
}

export default Hero;
