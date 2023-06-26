import * as React from 'react';

import useExternalLinks from '@/hooks/useExternalLinks';

import Loader from '@/components/common/Loader';
interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const { isLoading, isHome, setIsLoading } = useExternalLinks();
  return (
    <div id='root'>
      {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <div className='flex min-h-[100vh] flex-col'>{children}</div>
      )}
    </div>
  );
}
