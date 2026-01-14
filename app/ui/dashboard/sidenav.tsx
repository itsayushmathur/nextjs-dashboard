'use client';

import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <aside
      className="relative flex h-full w-full flex-col
                 border-r border-slate-200
                 bg-white
                 px-3 py-4 md:px-2"
    >
      {/* Soft blue ambient glow */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-72 w-72
                   rounded-full bg-blue-100 blur-3xl"
      />

      {/* Logo */}
      <Link
        href="/"
        className="group relative mb-6 flex h-20 items-center rounded-xl
                   bg-gradient-to-br from-blue-600 to-blue-500
                   px-4 shadow-sm transition
                   hover:shadow-md md:h-28"
      >
        <div className="relative w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>

      {/* Navigation */}
      <div className="flex grow flex-col justify-between gap-4">
        <NavLinks />

        {/* Sign out */}
        <button
          type="button"
          className="group flex h-12 items-center gap-3 rounded-xl px-4
                     font-sans text-sm font-semibold
                     text-red-600
                     transition-all
                     hover:bg-red-50 hover:text-red-700
                     focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-red-400"
        >
          <PowerIcon
            className="h-5 w-5 transition-transform duration-200
                       group-hover:scale-110"
          />
          <span className="hidden md:block">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
