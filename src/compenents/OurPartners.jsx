import React, { useEffect, useRef } from 'react';
import BitcoinBayLogo from './assets/partnerLogos/bitcoinbayLogo.webp';
import BondsSouthEastIncLogo from './assets/partnerLogos/BondsSouthEastInc_SmallLogo.png';
import CreativeColoringLogo from './assets/partnerLogos/creativeColoringLogo.png';
import FuzzEraserLogo from './assets/partnerLogos/FuzzEraserLogo2.png';
import VincentPeachLogo from './assets/partnerLogos/VincentPeachLogo.png';
import KroegerRealEstateLogo from './assets/partnerLogos/KroegerRealEstateLogo.jpeg';
import PMTsiteLogo from './assets/partnerLogos/PMTsiteLogo.png';
import NashTrash from './assets/partnerLogos/NashTrashLogo.png';
import IBMLogo from './assets/partnerLogos/IBMLogo.png';
import ShopLogo from './assets/partnerLogos/ShopifyPart.png';

const partnerLogos = [
    BondsSouthEastIncLogo,
    CreativeColoringLogo,
    FuzzEraserLogo,
    VincentPeachLogo,
    KroegerRealEstateLogo, IBMLogo,
    PMTsiteLogo,
    BitcoinBayLogo, BondsSouthEastIncLogo, ShopLogo,
    CreativeColoringLogo,
    NashTrash,
    FuzzEraserLogo,
    VincentPeachLogo,
    KroegerRealEstateLogo,IBMLogo,
    PMTsiteLogo,
    BitcoinBayLogo, BondsSouthEastIncLogo, ShopLogo,
    CreativeColoringLogo,    NashTrash,
    FuzzEraserLogo,
    VincentPeachLogo,
    KroegerRealEstateLogo,IBMLogo,
    PMTsiteLogo,
    BitcoinBayLogo, BondsSouthEastIncLogo, ShopLogo,
    CreativeColoringLogo, NashTrash,
    FuzzEraserLogo,
    VincentPeachLogo,
    KroegerRealEstateLogo, IBMLogo,
    PMTsiteLogo,
    BitcoinBayLogo, BondsSouthEastIncLogo, ShopLogo,
    CreativeColoringLogo, NashTrash,
    FuzzEraserLogo,
    VincentPeachLogo,
    KroegerRealEstateLogo, IBMLogo,
    PMTsiteLogo,
    BitcoinBayLogo,
];
const BannerCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      carouselRef.current.scrollLeft += 120; // Adjust scroll speed as needed
    }, 2000); // Adjust interval as needed

    return () => clearInterval(carouselInterval);
  }, []);

  return (
    <div className="py-2 w-full text-center">
        <h3 className='pb-4 text-xl'>Our Partners</h3>
    <div className="flex justify-center overflow-hidden bg-white h-120px">

      <div ref={carouselRef}
       className="flex overflow-hidden w-[80%]"       
        style={{ scrollBehavior: 'smooth' }}>
        {partnerLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner Logo ${index}`}
            className="h-full max-h-16 mx-4"
          />
        ))}
      </div>
    </div>
    </div>

  );
};

export default BannerCarousel;