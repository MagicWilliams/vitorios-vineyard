import Image from 'next/image';
import VittorioHeading from '@/components/VittorioHeading';

const AboutUsPage = () => {
  return (
    <>
      {/* Desktop Layout */}
      <main className="hidden md:flex relative min-h-screen w-full flex-col">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/img/bkg.png")', // Using the same desktop background
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 z-0 bg-black opacity-20" />{' '}
        {/* Overlay */}
        {/* Content Area */}
        <div className="relative z-10 flex flex-1 flex-col p-8 md:p-12 text-[#FFEFCF]">
          <div className="w-full max-w-4xl mx-auto">
            {' '}
            {/* Center heading */}
            <VittorioHeading />
          </div>

          <div className="grid flex-1 grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column: Text */}
            <div className="flex flex-col justify-center">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6">
                Our Story
              </h1>
              <p className="font-playfair text-lg mb-6 text-[#FFEFCF]/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="font-playfair text-lg text-[#FFEFCF]/90">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>

            {/* Right Column: Placeholder Image */}
            <div className="flex items-start justify-center w-full h-full">
              <div className="bg-gray-700 aspect-square w-full max-w-[400px] flex items-center justify-center">
                {/* Basic placeholder representation */}
                <svg
                  className="w-1/2 h-1/2 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Layout */}
      <div className="md:hidden relative min-h-screen flex flex-col p-6">
        {/* Mobile Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/img/bkg-mobile.png")', // Using the mobile background
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 z-0 bg-black opacity-30" />{' '}
        {/* Slightly darker overlay maybe? */}
        {/* Content Area */}
        <div className="relative z-10 flex flex-1 flex-col items-center text-[#FFEFCF]">
          <div className="w-full mb-8">
            {' '}
            {/* Heading takes full width */}
            <VittorioHeading />
          </div>

          {/* Stacked Content */}
          <div className="flex flex-col items-center w-full">
            {/* Text Section */}
            <div className="w-full mb-8">
              <h1 className="font-playfair text-4xl text-center mb-4">
                Our Story
              </h1>
              <p className="font-playfair text-base text-center mb-4 text-[#FFEFCF]/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="font-playfair text-base text-center text-[#FFEFCF]/90">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>

            {/* Placeholder Image Section */}
            <div className="flex items-center justify-center w-full max-w-[300px] mb-8">
              {' '}
              {/* Constrain width on mobile */}
              <div className="bg-gray-700 aspect-square w-full flex items-center justify-center">
                {/* Basic placeholder representation */}
                <svg
                  className="w-1/2 h-1/2 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
