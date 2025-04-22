// components/Nav.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const links = [
  { href: '/', label: 'Home' },
  { href: '/collection', label: 'The Collection' },
  { href: '/about', label: 'About Us' },
];

const activeStyles = 'bg-[#ffc014]';

export default function Nav() {
  const pathname = usePathname(); // live pathname 🗺️
  console.log(pathname, links[0].href === '/');

  return (
    <div className="flex items-center gap-1 md:gap-2 justify-center absolute bottom-8 left-[50%] translate-x-[-50%] z-10">
      {links.map(link => (
        <Link
          className={clsx(
            'capriola p-2 md:p-4 px-4 md:px-6 rounded-full whitespace-nowrap',
            pathname === link.href && activeStyles
          )}
          href={link.href}
          key={link.href}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
