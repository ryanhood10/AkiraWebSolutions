import React from "react";
import Typed from 'react-typed';
import Banner1 from './assets/pictures/banner1.png'

const Hero = () => {

  

    const handleCalendlyClick = (e) => {
        e.preventDefault();
        window.Calendly.initPopupWidget({url: 'https://calendly.com/ryanhood/30min'});
    };

    return (
        <div className="">
            <div className="pt-12 max-w-[800px] mt-[-96px] w-full h-[50vh]  mx-auto text-center flex flex-col justify-center">
                <p className="py-12 text-[#FF0033] text-l font-bold p-2"> <br></br></p> 
                <p className="md:text-5xl sm:text-4xl text-xl font-bold pt-4">Grow with Data</p>
                <div>
                <h1 className="pt-12 md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Find your Web Solutions</h1>                   
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500 md:pl-4 pl-2">
                    <Typed 
                        strings={[
                            'Elevate your online footprint with a dynamic website, seamlessly integrating the latest technologies to drive business growth and success. <br/><br/> Enhance customer experience while saving time and resources. Trust us to deploy and manage an efficient Customer Service Chatbot Assistant for your needs.'
                        ]}
                        startDelay={600}
                        typeSpeed={10}
                        showCursor={true}
                    />
                     <Typed 
                        strings={[
                            '🤖'
                        ]}
                        typeSpeed={5}
                        startDelay={10000}
                        showCursor={false}
                    />
                </p>


                <button onClick={handleCalendlyClick} className="bg-[#FF0033] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">Book a Meeting Today!</button>
                <br></br>
            </div>
        </div>
    )
}

export default Hero;
