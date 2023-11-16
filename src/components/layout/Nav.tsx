import Link from 'next/link';
import React from 'react';

import Logo from '@/components/common/Logo';

const StyledHeader = ({ children }: { children: React.ReactNode }) => (
  <header className='flex w-full items-center justify-between pt-10'>
    {children}
  </header>
);
const StyledNav = ({ children }: { children: React.ReactNode }) => (
  <ol className='m-0 flex list-none justify-between p-0 font-mono'>
    {children}
  </ol>
);
const NavItem = ({
  href,
  children,
  index,
}: {
  href: string;
  children: React.ReactNode;
  index: number;
}) => {
  const pseudoValue = `0${index + 1}.`;
  return (
    <li className='relative mx-2 px-2'>
      <Link href={href}>
        <div className='hover:text-green text-lightest-slate duration-default text-xs transition-all'>
          <p
            before-dynamic-value={pseudoValue}
            className='before:text-green before:text-xxs before:mr-[5px] before:text-right before:content-[attr(before-dynamic-value)]'
          >
            {children}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default function Nav() {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <StyledHeader>
      <Logo />
      <StyledNav>
        {navItems.map((item, index) => (
          <NavItem key={index} href={item.href} index={index}>
            {item.label}
          </NavItem>
        ))}
      </StyledNav>
    </StyledHeader>
  );
}
