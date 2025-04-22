import Image from 'next/image';
import Link from 'next/link';
import VittorioHeading from '@/components/VittorioHeading';

export default function Home() {
  return (
    <>
      <main className="hidden md:flex relative min-h-screen w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/img/bkg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 z-0 bg-black opacity-20" />

        {/* Hand Grapes Image - Desktop Only */}
        <div className="absolute right-0 top-0 z-20 hidden md:block">
          <Image
            src="/img/hand-grapes.png"
            alt="Hand holding grapes"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex-1">
          {/* Main Grid Layout */}
          <div className="grid h-full w-full grid-cols-1 md:grid-cols-2">
            {/* Left Column */}
            <div className="grid md:h-full h-min-content grid-rows-2 gap-8 p-8 md:p-12">
              {/* Top Text */}
              <div className="flex flex-col justify-start">
                <VittorioHeading />
              </div>

              {/* Bottom Text Container */}
              <div className="flex flex-col justify-start pt-12">
                <h2 className="mb-4 text-[6vw] font-semibold leading-tight text-[#FFEFCF] md:text-[4vw]">
                  For artists of taste
                </h2>
                <p className="mb-8 text-lg text-[#FFEFCF]/90">
                  Explore our curated selection of premium wines, straight from
                  our vineyards located in California
                </p>
                <Link href="/the-collection">
                  <button className="flex w-fit items-center gap-4 rounded-full bg-[#32080A] px-6 py-3 text-white transition-transform hover:scale-105 hover:cursor-pointer">
                    <span>Explore the collection</span>
                    <Image
                      src="/img/arrow.svg"
                      alt="Arrow"
                      width={24}
                      height={24}
                      className="object-contain rotate-135"
                    />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="h-full w-full flex flex-col align-end items-center pr-8">
              <div className="flex h-full w-full flex-col items-end justify-end pb-12 relative">
                <Image
                  src="/img/bottles.png"
                  alt="Wine bottles"
                  width={600}
                  height={600}
                  className="object-contain hidden md:block absolute top-[50%] right-32 -translate-y-1/2 z-40"
                />
                <h5 className="capriola text-[1.25vw] font-normal leading-tight text-[#FFEFCF] md:text-[1.3vw] mb-2">
                  Reviews
                </h5>
                <h4 className="capriola text-[1.15vw] font-normal leading-tight text-[#FFEFCF] md:text-[1.5vw]">
                  Late Harvest Zinfandel
                </h4>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1 justify-end mt-2">
                    <Image
                      src="/img/star.svg"
                      alt="Star rating"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <Image
                      src="/img/star.svg"
                      alt="Star rating"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <Image
                      src="/img/star.svg"
                      alt="Star rating"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <Image
                      src="/img/star.svg"
                      alt="Star rating"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <Image
                      src="/img/star.svg"
                      alt="Star rating"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <p className="capriola text-[1.15vw] font-normal leading-tight text-[#FFEFCF] md:text-[1.3vw]">
                    4.9 stars out of 5
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="md:hidden p-6">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/img/bkg-mobile.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <VittorioHeading />
        <Image
          src="/img/bottles.png"
          alt="Wine bottles"
          width={600}
          height={600}
          className="object-contain relative z-10 relative left-[-24px] top-[5vw]"
        />
        <div className="flex flex-col justify-start items-center relative z-10">
          <h2 className="mb-4 text-[6vw] font-semibold leading-tight text-[#FFEFCF] md:text-[4vw]">
            For artists of taste
          </h2>
          <p className="mb-8 text-lg text-[#FFEFCF]/90 text-center">
            Explore our curated selection of premium wines, straight from our
            vineyards located in California
          </p>
          <Link href="/the-collection">
            <button className="flex w-fit items-center gap-4 rounded-full bg-[#FFEFCF] text-[#32080A] px-6 py-3 transition-transform hover:scale-105 hover:cursor-pointer">
              <span>Explore the collection</span>
              <Image
                src="/img/arrow-red.svg"
                alt="Arrow"
                width={24}
                height={24}
                className="object-contain rotate-135"
              />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
