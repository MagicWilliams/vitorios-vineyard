import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const VittorioHeading = () => {
  return (
    <>
      {/* Desktop Heading */}
      <div className="md:block mb-24">
        <Link href="/">
          <Image
            src="/img/wordmark.svg"
            className="w-auto h-40 md:h-48"
            alt="Vitorio Vineyard"
            width={1000}
            height={1000}
          />
        </Link>
      </div>
    </>
  );
};

export default VittorioHeading;
