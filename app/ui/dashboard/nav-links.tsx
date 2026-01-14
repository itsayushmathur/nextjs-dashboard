'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  name: string;
  href: string;
  icon: React.ElementType;
  exact?: boolean;
};

const links: NavLink[] = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon, exact: true },
  { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  const isActive = (link: NavLink) =>
    link.exact ? pathname === link.href : pathname.startsWith(link.href);

  return (
    <nav className="flex flex-col gap-1">
      {links.map((link) => {
        const Icon = link.icon;
        const active = isActive(link);

        return (
          <Link
            key={link.name}
            href={link.href}
            aria-current={active ? 'page' : undefined}
            className={clsx(
              // base
              'group flex h-12 items-center gap-3 rounded-xl px-4',
              'font-sans text-[15px] font-semibold',
              'transition-all duration-200',

              // default
              'text-slate-700 hover:bg-blue-50 hover:text-blue-700',

              // focus
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',

              // active
              active &&
                'bg-blue-100 text-blue-700 shadow-sm'
            )}
          >
            <Icon
              className={clsx(
                'h-5 w-5 shrink-0 transition-transform duration-200',
                active ? 'text-blue-700 scale-110' : 'text-slate-500',
                'group-hover:scale-110 group-hover:text-blue-600'
              )}
            />

            <span className="hidden md:block tracking-tight">
              {link.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
