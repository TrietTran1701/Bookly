import anime from 'animejs';
import { NextPage } from 'next';
import React, { useCallback, useEffect, useState } from 'react';

import IconLoader from '@/components/icons/IconLoader';
import Seo from '@/components/Seo';

type LoaderProps = {
  finishLoading: () => void;
};

const Loader: NextPage<LoaderProps> = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = useCallback(() => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '#logo path',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #T',
        duration: 700,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 500,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  }, [finishLoading]);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, [animate]);

  return (
    <div className='bg-dark-navy loader fixed bottom-0 left-0 right-0 top-0 z-50 flex h-full w-full items-center justify-center'>
      <Seo />
      <div
        className={`max-w-100 flex w-max flex-col items-center ${
          isMounted ? 'opacity-100' : 'opacity-0'
        } logo-wrapper primary-transition`}
      >
        <IconLoader />
        <h1 id='logo' className='font-sf-mono text-xl font-medium text-white'>
          Loading...
        </h1>
      </div>
    </div>
  );
};

export default Loader;
