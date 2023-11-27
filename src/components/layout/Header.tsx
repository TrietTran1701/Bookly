import BLOG from 'blog.config.js';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

import { SmallButton } from '@/components/buttons/Button';

const StyledHeader = ({
  children,
  sentinalRef,
  navRef,
  fullWidth,
}: {
  children: ReactNode;
  sentinalRef: MutableRefObject<HTMLDivElement | null>;
  navRef: MutableRefObject<HTMLElement | null>;
  fullWidth: boolean | null;
}) => (
  <>
    <div className='observer-element h-0 md:h-0' ref={sentinalRef}></div>
    <header
      className={`sticky-nav m-auto flex h-0 w-full flex-row items-center justify-between bg-opacity-60 py-8 lg:my-6 ${
        !fullWidth ? 'max-w-[950px] px-4' : 'px-4 lg:px-24'
      }`}
      id='sticky-nav'
      ref={navRef}
    >
      {children}
    </header>
  </>
);

const StyledLogo = ({ children }: { children: ReactNode }) => (
  <motion.div
    className='flex cursor-pointer items-center fill-current'
    aria-label={BLOG.title}
  >
    {children}
  </motion.div>
);

const StyledNav = ({ children }: { children: ReactNode }) => (
  <ol className='m-0 flex list-none items-center justify-between p-0 font-mono'>
    {children}
  </ol>
);
const NavItem = ({
  href,
  children,
  index,
}: {
  href: string;
  children: ReactNode;
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

export const Nav = () => {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <StyledNav>
        {navItems.map((item, index) => (
          <NavItem key={index} href={item.href} index={index}>
            {item.label}
          </NavItem>
        ))}
        <div className='ml-4'>
          <SmallButton>Resume</SmallButton>
        </div>
      </StyledNav>
    </>
  );
};

interface IHeaderProps {
  navBarTitle: string | null;
  fullWidth: boolean | null;
}
export const Header = ({ navBarTitle, fullWidth }: IHeaderProps) => {
  const [showTitle, setShowTitle] = useState(false);
  const useSticky = !BLOG.autoCollapsedNavBar;
  const navRef = useRef(null);
  const sentinalRef = useRef<HTMLDivElement>(null);

  const handler = ([entry]: IntersectionObserverEntry[]) => {
    if (navRef && navRef.current && useSticky) {
      if (!entry.isIntersecting && entry !== undefined) {
        (navRef.current as HTMLElement)?.classList.add('sticky-nav-full');
      } else {
        (navRef.current as HTMLElement)?.classList.remove('sticky-nav-full');
      }
    } else {
      (navRef.current as unknown as HTMLElement)?.classList.add(
        'remove-sticky'
      );
    }
  };
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowTitle(true);
      } else {
        setShowTitle(false);
      }
    });

    const observer = new IntersectionObserver(handler, observerOptions);

    const currentSentinalRef = sentinalRef.current; // Create a variable

    if (currentSentinalRef) {
      observer.observe(currentSentinalRef);
    }

    return () => {
      if (currentSentinalRef) {
        observer.unobserve(currentSentinalRef);
      }
    };
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentinalRef, observerOptions]);
  return (
    <StyledHeader
      sentinalRef={sentinalRef}
      navRef={navRef}
      fullWidth={fullWidth}
    >
      <StyledLogo>
        {/* <Logo /> */}
        {navBarTitle ? (
          <>
            <div
              className={`bg-night dark:bg-day ml-2.5 h-6 w-[1.5px] rotate-12 ${
                !showTitle ? 'hidden' : 'hidden xl:block'
              }`}
            ></div>
            <p
              className={`ml-2.5 mt-1 font-medium ${
                !showTitle ? 'hidden' : 'hidden xl:block'
              }`}
            >
              {navBarTitle}
            </p>
          </>
        ) : (
          <p className='ml-2.5 hidden font-mono text-sm font-medium md:block'>
            {showTitle ? (
              <>
                {BLOG.title}, <span>{BLOG.description}</span>
              </>
            ) : (
              <span>Triet Tran</span>
            )}
          </p>
        )}
      </StyledLogo>
      <Nav />
    </StyledHeader>
  );
};
