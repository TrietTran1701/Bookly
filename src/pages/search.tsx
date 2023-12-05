import * as React from 'react';

import Seo from '@/components/Seo';

import SearchPage from '@/views/search';
export default function HomePage() {
  return (
    <>
      <Seo templateTitle='Search' />
      <SearchPage />
    </>
  );
}
