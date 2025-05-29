import Image from 'next/image';
import Link from 'next/link';
import VittorioHeading from '@/components/VittorioHeading';
import SignUpForm from './components/SignUpForm';

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
            <SignUpForm />
          </div>
        </div>
      </div>
    </main>
  );
}
