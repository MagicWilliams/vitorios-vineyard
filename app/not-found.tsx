import Link from 'next/link';
import VittorioHeading from '../components/VittorioHeading';

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full p-6 md:p-12 flex flex-col items-center justify-center">
      {/* Desktop Background */}
      <div
        className="absolute inset-0 z-0 hidden md:block"
        style={{
          backgroundImage: 'url("/img/bkg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Mobile Background */}
      <div
        className="absolute inset-0 z-0 md:hidden"
        style={{
          backgroundImage: 'url("/img/bkg-mobile.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-black opacity-20" />

      {/* Content Container */}
      <div className="relative z-10 text-center">
        <VittorioHeading />
        <h1 className="text-6xl md:text-8xl text-[#FFEFCF] mb-6 mt-8">404</h1>
        <h2 className="text-2xl md:text-4xl text-[#FFEFCF] mb-8">
          Page Not Found
        </h2>
        <p className="text-lg md:text-xl text-[#FFEFCF] mb-12 max-w-md mx-auto">
          The page you&apos;re looking for seems to have vanished like a fine
          wine&apos;s bouquet.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-[#FFEFCF] text-black hover:bg-[#FFE4B5] transition-colors duration-300 rounded-md text-lg font-medium"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
