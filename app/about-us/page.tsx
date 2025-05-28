import VittorioHeading from '@/components/VittorioHeading';

const AboutUsPage = () => {
  return (
    <>
      {/* Desktop Layout */}
      <main className="flex relative min-h-screen w-full flex-col pb-32">
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
        <div className="relative z-10 flex flex-1 flex-col p-4 md:p-8 text-[#FFEFCF]">
          <div className="w-full mx-auto">
            {' '}
            {/* Center heading */}
            <VittorioHeading />
          </div>

          <div className="grid flex-1 grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column: Text */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h1 className="font-playfair text-3xl sm:text-4xl font-bold mb-4">
                About Vitorio's Vineyard
              </h1>
              <h3 className="font-playfair text-lg sm:text-xl font-semibold text-[#FFEFCF]/80 italic mb-6">
                Where wine meets art, sound meets soul, and experience becomes
                culture.
              </h3>
              <p className="font-playfair text-base sm:text-lg leading-relaxed mb-4 text-[#FFEFCF]/90">
                Created by music artist, creative visionary, and modern-day
                renaissance man Vitorio aka Vino, Vitorio's Vineyard is more
                than a wine label—it's a living, breathing expression of
                culture, community, and creativity. Born from a passion for
                music, storytelling, and sensory experiences, the Vineyard is an
                extension of Vitorio's world—where each bottle, like each beat,
                tells a story.
              </p>
              <p className="font-playfair text-base sm:text-lg leading-relaxed mb-4 text-[#FFEFCF]/90">
                Vitorio has performed in cultural hotspots across the U.S., from
                Atlanta and New York City to Denver and Los Angeles, bringing a
                magnetic energy that fuses hip hop, R&B, house, electronic,
                neo-soul, and spoken word. With a deep appreciation for style,
                taste, and timeless vibes, his work has always been about more
                than performance—it's about presence.
              </p>
              <p className="font-playfair text-base sm:text-lg leading-relaxed mb-4 text-[#FFEFCF]/90">
                That same ethos led to the creation of his signature show, "Wine
                Wednesday with Vino"—a sit-down, interview-style YouTube series
                featuring dynamic conversations with women, layered over wine
                and honest dialogue. But the show is just the beginning. Vitorio
                turned it into a full-blown event series—a curated, immersive
                experience that combines live DJing, culinary art, painting and
                sculpture, wine tasting, and live music. These multi-sensory
                evenings reflect what Vitorio stands for: connection,
                creativity, and culture.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="flex items-start justify-center w-full h-full order-1 md:order-2">
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
    </>
  );
};

export default AboutUsPage;
