'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'Home',
    href: '/dashboard',
    icon: HomeIcon,
    exact: true,
  },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Customers',
    href: '/dashboard/customers',
    icon: UserGroupIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  const isActive = (link) => {
    if (link.exact) {
      return pathname === link.href;
    }
    return pathname.startsWith(link.href);
  };

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
              'group flex h-12 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-all',
              'text-gray-600 hover:bg-sky-100 hover:text-blue-600',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
              active && 'bg-sky-100 text-blue-600 shadow-sm'
            )}
          >
            <Icon
              className={clsx(
                'h-5 w-5 transition-transform duration-200',
                'group-hover:scale-110',
                active && 'scale-110'
              )}
            />

            <span className="hidden md:block">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
