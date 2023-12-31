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

import { useScreenSize } from '@/hooks/useScreenSize';

import { SmallButton } from '@/components/buttons/Button';
import Logo from '@/components/common/Logo';
import HamburgerIcon from '@/components/layout/widgets/HamburgerIcon';
import SearchBar from '@/components/layout/widgets/SearchBar';

import {
  con_variants,
  li_variants,
  outer_con_variants,
  ul_variants,
} from '@/constant/animation';

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
        !fullWidth ? 'max-w-[1050px] px-4' : 'px-4 lg:px-24'
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
        <div className='hover:text-green duration-default text-lightest-slate text-xs transition-all'>
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
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#collective', label: 'Collective' },
    { href: '#topselling', label: 'Top selling' },
  ];
  const { lg } = useScreenSize();
  const [openSidenav, setOpenSidenav] = useState(false);
  const [openInnerCon, setOpenInnerCon] = useState(false);
  const [openOuterCon, setOpenOuterCon] = useState(false);
  const setOpen = (open: boolean): void => {
    if (open) {
      setOpenOuterCon(open);
      setOpenInnerCon(open);
      setOpenSidenav(open);
    } else {
      setTimeout(() => setOpenOuterCon(open), 400);
      setTimeout(() => setOpenInnerCon(open), 100);
      setOpenSidenav(open);
    }
  };

  return (
    <>
      <ol className='m-0 flex list-none items-center justify-between p-0 font-mono'>
        {lg ? (
          <>
            {navItems.map((item, index) => (
              <NavItem key={index} href={item.href} index={index}>
                {item.label}
              </NavItem>
            ))}
            <div className='ml-5 flex items-center gap-4'>
              <SearchBar />
              <SmallButton>Login</SmallButton>
            </div>
          </>
        ) : (
          <>
            <div
              className={` ${
                openOuterCon
                  ? 'absolute right-0 top-0 -z-10 mt-0 flex h-screen w-full flex-col items-start overflow-hidden'
                  : 'hidden'
              }`}
            >
              <motion.div
                className={` ${
                  openInnerCon
                    ? 'h-full w-full bg-black/70 dark:bg-black/40'
                    : 'hidden'
                }`}
                onClick={() => setOpen(false)}
                initial={false}
                animate={openSidenav ? 'open' : 'closed'}
                variants={outer_con_variants}
              ></motion.div>
              <motion.nav
                initial={false}
                animate={openSidenav ? 'open' : 'closed'}
                className='bg-light-navy absolute bottom-0 right-0 top-0 w-[300px]'
              >
                <motion.div
                  className='absolute left-0 top-0 h-full w-full'
                  variants={con_variants}
                >
                  <motion.ul
                    className='absolute top-[100px] w-full px-4'
                    variants={ul_variants}
                  >
                    {navItems.map((item, index) => (
                      <motion.li variants={li_variants} key={index}>
                        <NavItem href={item.href} index={index}>
                          {item.label}
                        </NavItem>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.nav>
            </div>
          </>
        )}
        {lg ? null : (
          <div className='flex items-center gap-2'>
            <SearchBar />
            <HamburgerIcon open={openSidenav} setOpen={setOpen} />
          </div>
        )}
      </ol>
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

    const currentSentinalRef = sentinalRef.current;

    if (currentSentinalRef) {
      observer.observe(currentSentinalRef);
    }

    return () => {
      if (currentSentinalRef) {
        observer.unobserve(currentSentinalRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentinalRef, observerOptions]);
  return (
    <StyledHeader
      sentinalRef={sentinalRef}
      navRef={navRef}
      fullWidth={fullWidth}
    >
      <StyledLogo>
        <Logo />
        {showTitle && (
          <>
            <div className='ml-2.5 hidden h-6 w-[1.5px] rotate-12 xl:block'></div>
            {navBarTitle && (
              <p className='ml-2.5 mt-1 hidden font-medium xl:block'>
                {navBarTitle}
              </p>
            )}
            {!navBarTitle && (
              <p className='ml-2.5 hidden font-mono text-sm font-medium md:block'>
                <span className='text-slate'>{BLOG.description}</span>
              </p>
            )}
          </>
        )}
      </StyledLogo>
      <Nav />
    </StyledHeader>
  );
};
