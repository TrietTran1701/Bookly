import * as React from 'react';

import useExternalLinks from '@/hooks/useExternalLinks';

import Loader from '@/components/common/Loader';
import { Header } from '@/components/layout/Header';
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
        <>
          <Header navBarTitle={null} fullWidth={false} />
          <div className='flex min-h-[100vh] flex-col px-10'>
            <div id='content'>{children}</div>
          </div>
        </>
      )}
    </div>
  );
}
