import * as React from 'react';

import Seo from '@/components/Seo';

import Homepage from '@/views/homepage';
export default function HomePage() {
  return (
    <>
      <Seo templateTitle='Home' />
      <Homepage />
    </>
  );
}
