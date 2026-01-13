'use client';

import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <aside
      className="relative flex h-full w-full flex-col overflow-hidden
                 border-r border-slate-200/70
                 bg-white/70 backdrop-blur-xl
                 px-3 py-4 md:px-2"
    >
      {/* Ambient pastel glow */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-64 w-64
                   rounded-full bg-blue-200/50 blur-3xl animate-floatSlow"
      />

      {/* Logo */}
      <Link
        href="/"
        className="group relative mb-6 flex h-20 items-center rounded-xl
                   bg-gradient-to-br from-blue-500 to-indigo-500
                   px-4 shadow-sm transition-all
                   hover:shadow-md md:h-28"
      >
        {/* subtle hover sheen */}
        <div
          className="absolute inset-0 rounded-xl bg-white/40 opacity-0
                     transition-opacity group-hover:opacity-100"
        />

        <div className="relative w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>

      {/* Navigation */}
      <div className="flex grow flex-col justify-between gap-3">
        <nav className="flex flex-col gap-1">
          <NavLinks />
        </nav>

        {/* Sign out */}
        <button
          type="button"
          className="group relative flex h-12 items-center justify-center gap-3
                     rounded-xl
                     bg-red-50 px-3 text-sm font-medium text-red-600
                     transition-all duration-300
                     hover:bg-red-100 hover:text-red-700
                     active:scale-[0.98]
                     focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-red-400 md:justify-start"
        >
          <PowerIcon
            className="h-5 w-5 transition-transform duration-200
                       group-hover:scale-110"
          />
          <span className="hidden md:block">Sign Out</span>

          {/* hover glow */}
          <span
            className="pointer-events-none absolute inset-0 rounded-xl
                       bg-red-300/20 opacity-0 blur-md
                       transition-opacity group-hover:opacity-100"
          />
        </button>
      </div>
    </aside>
  );
}
