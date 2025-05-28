import React from 'react';
import Image from 'next/image';

const VittorioHeading = () => {
  return (
    <>
      {/* Desktop Heading */}
      <div className="md:block mb-24">
        <Image
          src="/img/wordmark.svg"
          className="w-auto h-40 md:h-48"
          alt="Vitorio Vineyard"
          width={1000}
          height={1000}
        />
      </div>
    </>
  );
};

export default VittorioHeading;
