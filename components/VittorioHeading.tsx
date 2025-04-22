import React from 'react';

const VittorioHeading = () => {
  return (
    <>
      {/* Desktop Heading */}
      <div className="hidden md:block mb-24">
        <h1 className="text-[12vw] font-bold text-[#FFEFCF] md:text-[8vw] leading-[85%]">
          Vitorio <br />
          <span className="relative left-16">Vineyard</span>
        </h1>
        <h4 className="text-[1.15vw] font-normal leading-tight text-[#FFEFCF] md:text-[1.5vw] relative top-6 left-32 tracking-[110%]">
          EST. 2020
        </h4>
      </div>
      {/* Mobile Heading */}
      <div className="md:hidden">
        <h1 className="text-[16vw] font-bold text-[#FFEFCF] md:text-[8vw] leading-[85%] relative z-10">
          Vitorio <br />
          <span className="relative left-8">Vineyard</span>
        </h1>
        <h4 className="text-[4.15vw] font-normal leading-tight text-[#FFEFCF] md:text-[1.5vw] tracking-[100%] relative z-10 left-[15vw] top-[3vw]">
          EST. 2020
        </h4>
      </div>
    </>
  );
};

export default VittorioHeading;
