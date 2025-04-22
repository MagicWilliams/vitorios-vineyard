// components/Nav.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/the-collection', label: 'The Collection' },
  { href: '/about-us', label: 'About Us' },
];

export default function Nav() {
  const pathname = usePathname(); // live pathname 🗺️

  return (
    <div className="flex items-center gap-1 md:gap-2 justify-center absolute bottom-8 left-[50%] translate-x-[-50%] z-100">
      {links.map(link => (
        <Link
          className="capriola p-2 md:p-4 px-4 md:px-6 rounded-full whitespace-nowrap relative z-10"
          href={link.href}
          key={link.href}
        >
          {pathname === link.href && (
            <motion.div
              className="absolute inset-0 bg-[#ffc014] rounded-full z-0"
              layoutId="active-nav-background"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative">{link.label}</span>
        </Link>
      ))}
    </div>
  );
}
