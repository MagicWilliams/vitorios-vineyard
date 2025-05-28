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

        <div className="absolute flex items-center justify-center top-0 left-0 p-4 z-10 h-full w-full">
          <div className="absolute p-4 top-0 left-0 h-full w-full">
            <VittorioHeading />
            <Link href="/about-us">
              <h4 className="absolute bottom-4 left-4 text-xl hover:underline">
                Our Story
              </h4>
            </Link>
          </div>

          <form className="flex flex-col gap-6 w-full max-w-md bg-[#663F47]/80 rounded-xl p-10 border border-[#FFEFCF]/30 shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-playfair text-[#FFEFCF] text-center mb-2">
              Vittorio Wines
            </h1>
            <h2 className="text-2xl font-playfair text-[#FFEFCF] text-center mb-6 leading-tight">
              Join Our Newsletter
            </h2>
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border border-[#FFEFCF] rounded-md px-4 py-3 text-[#FFEFCF] placeholder-[#FFEFCF]/70 focus:outline-none focus:ring-2 focus:ring-[#FFEFCF]/60 transition"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="bg-transparent border border-[#FFEFCF] rounded-md px-4 py-3 text-[#FFEFCF] placeholder-[#FFEFCF]/70 focus:outline-none focus:ring-2 focus:ring-[#FFEFCF]/60 transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-[#FFEFCF] rounded-md px-4 py-3 text-[#FFEFCF] placeholder-[#FFEFCF]/70 focus:outline-none focus:ring-2 focus:ring-[#FFEFCF]/60 transition"
            />
            <select
              className="bg-transparent border border-[#FFEFCF] rounded-md px-4 py-3 text-[#FFEFCF] placeholder-[#FFEFCF]/70 focus:outline-none focus:ring-2 focus:ring-[#FFEFCF]/60 transition appearance-none"
              defaultValue=""
            >
              <option value="" disabled>
                Favorite type of wine
              </option>
              <option value="red">Red</option>
              <option value="white">White</option>
              <option value="rosé">Rosé</option>
              <option value="sparkling">Sparkling</option>
              <option value="dessert">Dessert</option>
              <option value="other">Other</option>
            </select>
            <button
              type="submit"
              className="mt-2 bg-[#A0522D] hover:bg-[#7a3920] text-[#FFEFCF] font-playfair text-lg rounded-md py-3 transition-colors duration-200 shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Content Container */}
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
