import React from 'react'
import robot1 from './assets/pictures/bannerWeb.png';



const OtherHero = () => {
    return (
        <div className="w-full mx-auto p-4">
            <div className='max-h-[500px] relative'>
                {/* overlay */}
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center z-0'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold' >The <span className='text-[#FF0033]'> Best</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold' >Solutions <span className='text-[#FF0033]'> Delivered</span></h1>
                </div>
                    <img className='w-full max-h-[350px] object-cover' src={robot1}  alt="robot1" />
            </div>
        </div>
    )
}

export default OtherHero