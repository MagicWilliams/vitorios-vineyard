import Image from 'next/image';
import Link from 'next/link';
import VittorioHeading from '@/components/VittorioHeading';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
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

      <div className="relative flex flex-col items-center min-h-screen p-4 md:p-8 z-10">
        <div className="absolute top-0 left-0 w-full p-4 md:p-8">
          <VittorioHeading />
        </div>
        <div className="w-full max-w-4xl h-full">
          <Link
            href="/about-us"
            className="absolute bottom-4 left-4 text-lg md:text-xl text-[#FFEFCF] hover:underline"
          >
            Our Story
          </Link>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8 absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] w-full max-w-4xl p-4 md:p-0">
            <form className="w-full md:w-1/2 flex flex-col gap-4 bg-[#663F47]/80 rounded-xl p-6 md:p-10 border border-[#FFEFCF]/30 shadow-lg backdrop-blur-sm">
              <h1 className="text-2xl md:text-4xl font-playfair text-[#FFEFCF] text-center mb-2">
                Join Heard It Through The Grapevine
              </h1>
              <h2 className="text-xl md:text-2xl font-playfair text-[#FFEFCF] text-center mb-4 leading-tight">
                Stay up to date with our latest news and events
              </h2>
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent border border-[#FFEFCF] rounded-md px-4 py-2 md:py-3 text-[#FFEFCF] placeholder-[#FFEFCF]/70 focus:outline-none focus:ring-2 focus:ring-[#FFEFCF]/60 transition text-sm md:text-base"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="bg-transparent border border-[#FFEFCF] rounded-md px-4 py-2 md:py-3 text-[#FFEFCF] placeholder-[#FFEFCF]/70 focus:outline-none focus:ring-2 focus:ring-[#FFEFCF]/60 transition text-sm md:text-base"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border border-[#FFEFCF] rounded-md px-4 py-2 md:py-3 text-[#FFEFCF] placeholder-[#FFEFCF]/70 focus:outline-none focus:ring-2 focus:ring-[#FFEFCF]/60 transition text-sm md:text-base"
              />
              <select
                className="bg-transparent border border-[#FFEFCF] rounded-md px-4 py-2 md:py-3 text-[#FFEFCF] placeholder-[#FFEFCF]/70 focus:outline-none focus:ring-2 focus:ring-[#FFEFCF]/60 transition appearance-none text-sm md:text-base"
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
                className="mt-2 bg-[#A0522D] hover:bg-[#7a3920] text-[#FFEFCF] font-playfair text-base md:text-lg rounded-md py-2 md:py-3 transition-colors duration-200 shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
