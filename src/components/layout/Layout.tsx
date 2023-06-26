import * as React from 'react';

import useExternalLinks from '@/hooks/useExternalLinks';

import Loader from '@/components/common/Loader';
interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const { isLoading, isHome, setIsLoading } = useExternalLinks();
  return (
    <div className='bg-navy h-[100vh]'>
      {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <div>{children}</div>
      )}
      {/* <div>{children}</div> */}
      {/* <Loader finishLoading={() => setIsLoading(false)} /> */}
    </div>
  );
}
