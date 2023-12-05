import React, { ReactNode } from 'react';

import SearchResult from '@/views/search/components/SearchResult';
const StyledMainContainer = ({ children }: { children: ReactNode }) => (
  <main className='mx-0 min-h-screen w-full max-w-screen-xl md:mx-auto md:px-[150px]'>
    {children}
  </main>
);

export default function SearchPage() {
  return (
    <StyledMainContainer>
      <SearchResult />
    </StyledMainContainer>
  );
}
