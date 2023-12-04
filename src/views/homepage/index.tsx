import React, { ReactNode } from 'react';

import Featured from '@/views/homepage/components/Featured';
import Hero from '@/views/homepage/components/Hero';
import Popular from '@/views/homepage/components/Popular';
const StyledMainContainer = ({ children }: { children: ReactNode }) => (
  <main className='mx-0 min-h-screen w-full max-w-screen-xl md:mx-auto md:px-[150px]'>
    {children}
  </main>
);

export default function Homepage() {
  return (
    <StyledMainContainer>
      <Hero />
      <Featured />
      <Popular />
    </StyledMainContainer>
  );
}
